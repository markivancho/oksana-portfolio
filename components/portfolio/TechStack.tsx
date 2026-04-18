"use client"

import { motion } from "framer-motion"
import {
  Briefcase,
  LineChart,
  UserSearch,
  Gauge,
  MessagesSquare,
  Workflow,
  BarChart3,
  Database,
  GraduationCap,
  Brain,
  NotebookPen,
  Compass,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { usePerspective } from "./PerspectiveProvider"

interface Tool {
  name: string
  category: string
  description: string
  icon: LucideIcon
  track: "hrbp" | "coaching"
}

const TOOLS: Tool[] = [
  { name: "Workday", category: "HRIS", description: "Core HR, compensation cycles, and workforce reporting.", icon: Briefcase, track: "hrbp" },
  { name: "Lattice", category: "Performance", description: "Reviews, 1:1s, goal-setting, and engagement surveys.", icon: Gauge, track: "hrbp" },
  { name: "Greenhouse", category: "ATS", description: "Structured hiring, scorecards, and funnel analytics.", icon: UserSearch, track: "hrbp" },
  { name: "Tableau", category: "Analytics", description: "People dashboards, attrition modeling, and exec reporting.", icon: LineChart, track: "hrbp" },
  { name: "BambooHR", category: "HRIS", description: "Full HRIS stack for fast-growth and mid-market orgs.", icon: Database, track: "hrbp" },
  { name: "ChartHop", category: "People Ops", description: "Org planning, headcount scenarios, and comp visualization.", icon: Workflow, track: "hrbp" },
  { name: "Culture Amp", category: "Engagement", description: "Engagement diagnostics and manager-level action planning.", icon: MessagesSquare, track: "hrbp" },
  { name: "Power BI", category: "Analytics", description: "Workforce dashboards integrated across finance and HR.", icon: BarChart3, track: "hrbp" },

  { name: "ICF Coaching", category: "Credential", description: "ICF-accredited coaching methodology and ethics.", icon: GraduationCap, track: "coaching" },
  { name: "Hogan Assessments", category: "Assessment", description: "Personality and derailer insights for leadership coaching.", icon: Brain, track: "coaching" },
  { name: "EQ-i 2.0", category: "Assessment", description: "Emotional intelligence assessment and debriefs.", icon: Compass, track: "coaching" },
  { name: "Immunity to Change", category: "Framework", description: "Kegan & Lahey model for behavioral transformation.", icon: NotebookPen, track: "coaching" },
]

export function TechStack() {
  const { perspective } = usePerspective()

  const visible = TOOLS.filter((t) =>
    perspective === "both" ? true : t.track === perspective
  )

  return (
    <section id="stack" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 dark:text-sage-300">
              The Toolkit
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl dark:text-sand-50">
              Systems, frameworks, and instruments I work with
            </h2>
            <p className="mt-4 text-lg text-navy-800/75 dark:text-sand-100/75">
              HR tech on one side, coaching frameworks and assessments on the other. Tools are
              chosen deliberately, configured to the operating model, and instrumented for insight.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-sage-700 dark:text-sage-300">
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
            Expert-level proficiency
          </div>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ y: -3 }}
              className="group relative flex h-full flex-col rounded-2xl border border-sand-200 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:border-sage-300 hover:shadow-md dark:border-navy-800 dark:bg-navy-900/60 dark:hover:border-sage-400/40"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-sand-50 transition group-hover:bg-sage-600 dark:bg-sand-50 dark:text-navy-950 dark:group-hover:bg-sage-400">
                  <t.icon className="h-5 w-5" />
                </div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={
                      t.track === "hrbp"
                        ? "rounded-full border border-navy-950/15 bg-white/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-navy-900 dark:border-sand-50/20 dark:bg-navy-900/60 dark:text-sand-100"
                        : "rounded-full border border-sage-500/25 bg-sage-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-sage-700 dark:border-sage-400/40 dark:bg-sage-400/10 dark:text-sage-200"
                    }
                  >
                    {t.track === "hrbp" ? "HRBP" : "Coach"}
                  </span>
                </div>
              </div>
              <div className="mt-5 text-base font-semibold text-navy-950 dark:text-sand-50">
                {t.name}
              </div>
              <div className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-sage-700 dark:text-sage-300">
                {t.category}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy-800/75 dark:text-sand-100/70">
                {t.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
