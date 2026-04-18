"use client"

import { motion, type Variants } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

const reveal: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.1, ease: EASE },
  },
}

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.22, delayChildren: 0.1 },
  },
}

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden bg-sand-100/50 py-28 lg:py-36 dark:bg-navy-900/30"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(100,120,99,0.14),transparent_70%)] dark:bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(159,176,151,0.12),transparent_70%)]"
      />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-120px" }}
        className="mx-auto max-w-3xl px-6 text-center lg:px-8"
      >
        <motion.div
          variants={reveal}
          className="text-xs font-semibold uppercase tracking-[0.24em] text-sage-600 dark:text-sage-300"
        >
          Methodology
        </motion.div>

        <motion.h2
          variants={reveal}
          className="mt-6 text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-navy-950 sm:text-4xl lg:text-5xl dark:text-sand-50"
        >
          I integrate{" "}
          <span className="italic text-sage-700 dark:text-sage-300">business logic</span>
          {" "}with{" "}
          <span className="italic text-sage-700 dark:text-sage-300">psychological safety</span>.
        </motion.h2>

        <motion.p
          variants={reveal}
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-navy-800/80 dark:text-sand-100/80"
        >
          Most change programs fail not because the strategy is wrong, but because the people
          inside it were never given the conditions to succeed. I design the system and coach the
          humans operating it — because the two are the same work.
        </motion.p>

        <motion.div
          variants={reveal}
          className="mx-auto mt-12 grid max-w-2xl gap-3 text-left sm:grid-cols-3"
        >
          {[
            { n: "01", t: "Diagnose", d: "Data first. Listen second. Assume nothing." },
            { n: "02", t: "Design", d: "Build for the operating reality, not the org chart." },
            { n: "03", t: "Enable", d: "Coach the leaders who have to live with the change." },
          ].map((p) => (
            <div
              key={p.n}
              className="rounded-2xl border border-sand-200 bg-white/70 p-5 backdrop-blur dark:border-navy-800 dark:bg-navy-900/50"
            >
              <div className="font-mono text-xs text-sage-600 dark:text-sage-300">{p.n}</div>
              <div className="mt-2 text-base font-semibold tracking-tight text-navy-950 dark:text-sand-50">
                {p.t}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-navy-800/75 dark:text-sand-100/70">
                {p.d}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
