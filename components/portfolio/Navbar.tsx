"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"
import { PerspectiveSwitcher } from "./PerspectiveSwitcher"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#matrix", label: "Practice" },
  { href: "#case-studies", label: "Case Studies" },
  { href: "#stack", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-sand-200/70 bg-sand-50/80 backdrop-blur-md dark:border-navy-800/70 dark:bg-navy-950/80"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-950 text-sm font-semibold text-sand-50 shadow-sm dark:bg-sand-50 dark:text-navy-950">
            OS
          </span>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-semibold text-navy-950 dark:text-sand-50">
              Oksana Semeniv
            </span>
            <span className="text-[11px] font-medium tracking-wide text-sage-600 dark:text-sage-300">
              Human Capital Architect
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-navy-700/80 transition hover:bg-sand-100 hover:text-navy-950 dark:text-sand-100/80 dark:hover:bg-navy-800 dark:hover:text-sand-50"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <PerspectiveSwitcher compact />
          </div>
          <ThemeToggle />
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 text-navy-800 md:hidden dark:border-navy-800 dark:text-sand-100"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-sand-200 bg-sand-50 md:hidden dark:border-navy-800 dark:bg-navy-950"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4">
              <div className="pb-2 lg:hidden">
                <PerspectiveSwitcher />
              </div>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-navy-800 hover:bg-sand-100 dark:text-sand-100 dark:hover:bg-navy-800"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
