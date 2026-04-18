"use client"

import { motion } from "framer-motion"
import { usePerspective, type Perspective } from "./PerspectiveProvider"
import { cn } from "@/lib/utils"

const OPTIONS: { value: Perspective; label: string }[] = [
  { value: "both", label: "Both" },
  { value: "hrbp", label: "HRBP" },
  { value: "coaching", label: "Coaching" },
]

export function PerspectiveSwitcher({ compact = false }: { compact?: boolean }) {
  const { perspective, set } = usePerspective()

  return (
    <div
      role="tablist"
      aria-label="Perspective"
      className={cn(
        "relative inline-flex items-center rounded-full border border-sand-200 bg-white/70 p-1 shadow-sm backdrop-blur dark:border-navy-800 dark:bg-navy-900/60",
        compact ? "gap-0.5" : "gap-1"
      )}
    >
      {OPTIONS.map((opt) => {
        const active = perspective === opt.value
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => set(opt.value)}
            className={cn(
              "relative z-10 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide transition",
              compact ? "px-2.5" : "",
              active
                ? "text-white dark:text-navy-950"
                : "text-navy-700/80 hover:text-navy-900 dark:text-sand-100/70 dark:hover:text-sand-50"
            )}
          >
            {active && (
              <motion.span
                layoutId="perspective-pill"
                className="absolute inset-0 -z-10 rounded-full bg-navy-900 dark:bg-sand-50"
                transition={{ type: "spring", stiffness: 360, damping: 30 }}
              />
            )}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
