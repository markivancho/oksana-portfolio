"use client"

import { motion } from "framer-motion"
import {
  Building2,
  Compass,
  TrendingUp,
  LayoutGrid,
  GitBranch,
  Sparkles,
  Users,
  MessageCircle,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { usePerspective, perspectiveDim, type Perspective } from "./PerspectiveProvider"
import { cn } from "@/lib/utils"

interface Practice {
  icon: LucideIcon
  title: string
  description: string
}

const HRBP: Practice[] = [
  {
    icon: TrendingUp,
    title: "Talent Strategy",
    description:
      "Competency frameworks, leadership benches, and succession plans that hold up under scale.",
  },
  {
    icon: LayoutGrid,
    title: "Organizational Design",
    description:
      "Operating models, role architecture, and decision rights grounded in business strategy and data.",
  },
  {
    icon: GitBranch,
    title: "Change Management",
    description:
      "Reorg, M&A, and transformation programs — clear narrative, stakeholder alignment, measurable adoption.",
  },
]

const COACH: Practice[] = [
  {
    icon: Sparkles,
    title: "Leadership Development",
    description:
      "Structured programs and executive coaching arcs that turn high performers into leaders others follow.",
  },
  {
    icon: Users,
    title: "EQ Workshops",
    description:
      "Team-based sessions on emotional intelligence, conflict, and psychological safety — grounded in measurable behavior change.",
  },
  {
    icon: MessageCircle,
    title: "1-on-1 Performance Coaching",
    description:
      "Confidential coaching engagements for executives navigating scope changes, new mandates, or stretch roles.",
  },
]

export function Matrix() {
  const { perspective } = usePerspective()

  return (
    <section id="matrix" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 dark:text-sage-300">
            The Practice Matrix
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl dark:text-sand-50">
            Two altitudes, one operating philosophy
          </h2>
          <p className="mt-4 text-lg text-navy-800/75 dark:text-sand-100/75">
            Columns read as the work I do at the organizational level, and the work I do at the
            individual level. The most durable change requires both.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <MatrixColumn
            perspective={perspective}
            track="hrbp"
            icon={Building2}
            eyebrow="Column A · Macro"
            heading="Strategic HRBP"
            accentClass="from-navy-950 to-navy-800"
            items={HRBP}
          />
          <MatrixColumn
            perspective={perspective}
            track="coaching"
            icon={Compass}
            eyebrow="Column B · Micro"
            heading="Executive Coach"
            accentClass="from-sage-600 to-sage-500"
            items={COACH}
          />
        </div>
      </div>
    </section>
  )
}

function MatrixColumn({
  perspective,
  track,
  icon: Icon,
  eyebrow,
  heading,
  accentClass,
  items,
}: {
  perspective: Perspective
  track: "hrbp" | "coaching"
  icon: LucideIcon
  eyebrow: string
  heading: string
  accentClass: string
  items: Practice[]
}) {
  const dim = perspectiveDim(perspective, track)

  return (
    <motion.div
      animate={{ opacity: dim ? 0.38 : 1 }}
      transition={{ duration: 0.45 }}
      className={cn(
        "relative rounded-3xl border border-sand-200 bg-white/60 p-6 shadow-sm backdrop-blur lg:p-8 dark:border-navy-800 dark:bg-navy-900/50",
        dim && "grayscale"
      )}
    >
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br text-sand-50 shadow-sm",
            accentClass
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sage-600 dark:text-sage-300">
            {eyebrow}
          </div>
          <h3 className="mt-0.5 text-xl font-semibold tracking-tight text-navy-950 dark:text-sand-50">
            {heading}
          </h3>
        </div>
      </div>

      <div className="mt-6 divide-y divide-sand-200 dark:divide-navy-800">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
            className="group flex items-start gap-4 py-5"
          >
            <div className="mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-sand-100 text-sage-700 ring-1 ring-inset ring-sand-200 transition group-hover:bg-sage-500 group-hover:text-sand-50 dark:bg-navy-800 dark:text-sage-200 dark:ring-navy-700 dark:group-hover:bg-sage-500 dark:group-hover:text-navy-950">
              <it.icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-base font-semibold text-navy-950 dark:text-sand-50">
                {it.title}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-navy-800/75 dark:text-sand-100/70">
                {it.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
