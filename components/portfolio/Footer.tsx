import { Mail } from "lucide-react"
import { LinkedInIcon } from "./icons"

export function Footer() {
  return (
    <footer className="border-t border-sand-200 bg-sand-50 dark:border-navy-800 dark:bg-navy-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-950 text-xs font-semibold text-sand-50 dark:bg-sand-50 dark:text-navy-950">
            OS
          </span>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-navy-950 dark:text-sand-50">
              Oksana Semeniv
            </div>
            <div className="text-[11px] text-sage-700 dark:text-sage-300">
              Human Capital Architect — HRBP + Executive Coach
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 text-sage-700 dark:text-sage-300">
          <a
            href="https://www.linkedin.com/in/oksana-semeniv"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition hover:text-navy-950 dark:hover:text-sand-50"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href="mailto:hello@oksanasemeniv.com"
            aria-label="Email"
            className="transition hover:text-navy-950 dark:hover:text-sand-50"
          >
            <Mail className="h-4 w-4" />
          </a>
          <span className="text-[11px] text-navy-800/70 dark:text-sand-100/60">
            © {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  )
}
