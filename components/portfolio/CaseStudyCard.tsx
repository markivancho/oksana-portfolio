"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Target, Zap, TrendingUp, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CaseStudy {
  tag: string
  title: string
  headlineMetric: string
  metricLabel: string
  humanMetric: string
  humanMetricLabel: string
  challenge: string
  action: string
  result: string
  human: string
}

export function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] as const }}
      className="group overflow-hidden rounded-2xl border border-sand-200 bg-white/80 shadow-sm backdrop-blur transition hover:shadow-md dark:border-navy-800 dark:bg-navy-900/70"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-6 p-6 text-left lg:p-8"
        aria-expanded={open}
      >
        <div className="hidden flex-shrink-0 sm:block">
          <div className="flex items-stretch gap-2">
            <MetricTile
              value={study.headlineMetric}
              label={study.metricLabel}
              variant="navy"
            />
            <MetricTile
              value={study.humanMetric}
              label={study.humanMetricLabel}
              variant="sage"
            />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-sage-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sage-700 dark:bg-sage-400/10 dark:text-sage-200">
              {study.tag}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-semibold text-navy-950 sm:text-2xl dark:text-sand-50">
            {study.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm text-navy-800/75 dark:text-sand-100/70">
            {study.challenge}
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-sage-700 dark:text-sage-300">
            {open ? "Collapse details" : "Read the full story"}
            <ChevronDown
              className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
            />
          </div>
        </div>

        <div className="sm:hidden">
          <MetricTile value={study.headlineMetric} label={study.metricLabel} variant="navy" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            className="overflow-hidden"
          >
            <div className="grid gap-5 border-t border-sand-200 p-6 sm:grid-cols-3 lg:p-8 dark:border-navy-800">
              <StarBlock
                label="Challenge"
                icon={Target}
                accent="text-navy-900 bg-sand-100 dark:text-sand-50 dark:bg-navy-800"
                body={study.challenge}
              />
              <StarBlock
                label="Action"
                icon={Zap}
                accent="text-sand-50 bg-navy-950 dark:text-navy-950 dark:bg-sand-50"
                body={study.action}
              />
              <StarBlock
                label="Result"
                icon={TrendingUp}
                accent="text-sage-50 bg-sage-600 dark:text-navy-950 dark:bg-sage-300"
                body={study.result}
              />
            </div>

            <div className="border-t border-sand-200 bg-sage-50/50 px-6 py-6 lg:px-8 dark:border-navy-800 dark:bg-sage-400/5">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sage-500 text-sand-50 dark:bg-sage-400 dark:text-navy-950">
                  <Heart className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-sage-700 dark:text-sage-200">
                    The Human Element
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-900 dark:text-sand-100">
                    {study.human}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}

function MetricTile({
  value,
  label,
  variant,
}: {
  value: string
  label: string
  variant: "navy" | "sage"
}) {
  return (
    <div
      className={cn(
        "min-w-[84px] rounded-2xl p-4 text-center shadow-sm",
        variant === "navy"
          ? "bg-navy-950 text-sand-50 dark:bg-sand-50 dark:text-navy-950"
          : "bg-sage-500 text-sand-50 dark:bg-sage-400 dark:text-navy-950"
      )}
    >
      <div className="text-2xl font-semibold leading-none lg:text-3xl">{value}</div>
      <div className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-90">
        {label}
      </div>
    </div>
  )
}

function StarBlock({
  label,
  icon: Icon,
  accent,
  body,
}: {
  label: string
  icon: React.ComponentType<{ className?: string }>
  accent: string
  body: string
}) {
  return (
    <div>
      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider",
          accent
        )}
      >
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-3 text-sm leading-relaxed text-navy-900 dark:text-sand-100">
        {body}
      </p>
    </div>
  )
}
