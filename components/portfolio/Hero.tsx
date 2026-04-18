"use client"

import { motion, type Variants } from "framer-motion"
import { ArrowRight, Download, Building2, Compass } from "lucide-react"
import { usePerspective, perspectiveDim } from "./PerspectiveProvider"
import { PerspectiveSwitcher } from "./PerspectiveSwitcher"
import { cn } from "@/lib/utils"

const EASE = [0.22, 1, 0.36, 1] as const

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const HRBP_POINTS = [
  "Talent & Org Strategy",
  "Change & Transformation",
  "People Analytics at Scale",
]

const COACH_POINTS = [
  "Executive 1:1 Coaching",
  "Leadership Development",
  "EQ & Team Dynamics",
]

export function Hero() {
  const { perspective } = usePerspective()
  const hrbpDim = perspectiveDim(perspective, "hrbp")
  const coachDim = perspectiveDim(perspective, "coaching")

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(100,120,99,0.18),transparent_60%)] dark:bg-[radial-gradient(ellipse_75%_55%_at_50%_-10%,rgba(159,176,151,0.16),transparent_60%)]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-sage-50/70 px-3 py-1 text-xs font-medium tracking-wide text-sage-700 backdrop-blur dark:border-sage-400/30 dark:bg-sage-400/10 dark:text-sage-200"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-sage-500" />
            Human Capital Architect · HRBP + Executive Coach
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-5xl lg:text-[3.75rem] dark:text-sand-50"
          >
            Scaling organizations by{" "}
            <span className="italic text-sage-600 dark:text-sage-300">
              unlocking individual potential
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-800/80 dark:text-sand-100/80"
          >
            I operate at two altitudes — designing the systems that move an organization forward,
            and coaching the leaders who make those systems work. Business logic, with
            psychological safety.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-sand-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-md dark:bg-sand-50 dark:text-navy-950 dark:hover:bg-sand-100"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href="#case-studies"
              className="group inline-flex items-center gap-2 rounded-full border border-navy-950/15 bg-white/70 px-5 py-3 text-sm font-semibold text-navy-900 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-sand-50/20 dark:bg-navy-900/60 dark:text-sand-50 dark:hover:bg-navy-800"
            >
              View Strategic Wins
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <div className="ml-1 hidden sm:block">
              <PerspectiveSwitcher />
            </div>
          </motion.div>
        </motion.div>

        {/* Dual-Track */}
        <div className="mt-16 grid gap-5 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0">
          <TrackCard
            side="left"
            dim={hrbpDim}
            icon={Building2}
            label="The Macro"
            title="Strategic HRBP"
            blurb="Org design, talent strategy, and change — translating business goals into the operating system of the company."
            bullets={HRBP_POINTS}
          />

          <div className="relative hidden items-center justify-center px-4 lg:flex">
            <div aria-hidden className="absolute inset-y-6 w-px bg-gradient-to-b from-transparent via-sand-300 to-transparent dark:via-navy-700" />
            <div className="relative grid h-12 w-12 place-items-center rounded-full border border-sand-200 bg-sand-50 text-xs font-semibold uppercase tracking-wider text-sage-700 shadow-sm dark:border-navy-800 dark:bg-navy-900 dark:text-sage-300">
              +
            </div>
          </div>

          <TrackCard
            side="right"
            dim={coachDim}
            icon={Compass}
            label="The Micro"
            title="Executive Coach"
            blurb="1:1 leadership coaching and EQ development — helping individuals lead change that actually lands with their teams."
            bullets={COACH_POINTS}
          />
        </div>
      </div>
    </section>
  )
}

function TrackCard({
  side,
  dim,
  icon: Icon,
  label,
  title,
  blurb,
  bullets,
}: {
  side: "left" | "right"
  dim: boolean
  icon: React.ComponentType<{ className?: string }>
  label: string
  title: string
  blurb: string
  bullets: string[]
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: side === "left" ? 0.25 : 0.35, ease: EASE }}
      className={cn(
        "relative flex h-full flex-col rounded-3xl border bg-white/70 p-7 shadow-sm backdrop-blur transition duration-500 dark:bg-navy-900/60",
        "border-sand-200 dark:border-navy-800",
        dim && "opacity-40 grayscale hover:opacity-60"
      )}
      aria-hidden={dim || undefined}
    >
      <div className="flex items-center justify-between">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-sand-50 dark:bg-sand-50 dark:text-navy-950">
          <Icon className="h-5 w-5" />
        </div>
        <span className="rounded-full border border-sage-200 bg-sage-50 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-sage-700 dark:border-sage-400/30 dark:bg-sage-400/10 dark:text-sage-200">
          {label}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-navy-950 dark:text-sand-50">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-800/75 dark:text-sand-100/75">
        {blurb}
      </p>
      <ul className="mt-5 space-y-2 border-t border-sand-200 pt-5 dark:border-navy-800">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-center gap-2.5 text-sm font-medium text-navy-900 dark:text-sand-100"
          >
            <span className="h-1 w-1 rounded-full bg-sage-500" />
            {b}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
