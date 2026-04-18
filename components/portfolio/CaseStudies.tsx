"use client"

import { CaseStudyCard, type CaseStudy } from "./CaseStudyCard"

const STUDIES: CaseStudy[] = [
  {
    tag: "Retention",
    title: "Reducing Turnover by 20% at a Series C SaaS",
    headlineMetric: "20%",
    metricLabel: "Turnover ↓",
    humanMetric: "34 pts",
    humanMetricLabel: "Manager NPS ↑",
    challenge:
      "Voluntary attrition in engineering had climbed to 28% amid rapid growth, with exit interviews pointing to unclear career paths and manager quality as the top drivers.",
    action:
      "Partnered with the CTO on a leveling framework, rolled out manager enablement cohorts, and instrumented a quarterly engagement pulse tied to team-level action plans and manager scorecards.",
    result:
      "Voluntary attrition dropped from 28% to 8% within three quarters, internal mobility doubled, and an estimated $4.2M in replacement and ramp costs was preserved.",
    human:
      "Alongside the system work, I coached 14 newly promoted engineering managers through their first year — building feedback muscle, calibration confidence, and the career conversations their teams had been missing.",
  },
  {
    tag: "Reorganization",
    title: "Restructuring 1,200 People After Acquisition",
    headlineMetric: "1.2k",
    metricLabel: "Realigned",
    humanMetric: "97%",
    humanMetricLabel: "Role acceptance",
    challenge:
      "Post-acquisition, two overlapping product orgs carried duplicate reporting lines, ambiguous decision rights, and conflicting performance systems that slowed delivery.",
    action:
      "Led a 10-week org design sprint: built a target operating model, ran role-fit assessments, harmonized leveling and comp bands, and staged a communications plan across 14 stakeholder groups.",
    result:
      "Delivered a single operating model with 22% fewer management layers, 97% voluntary role acceptance, and a 30% reduction in cross-team decision latency within two quarters.",
    human:
      "I didn't just redraw the org chart — I coached the seven incoming VPs through the transition, working through grief over lost scope, new reporting lines, and how to show up for teams that were watching every signal.",
  },
  {
    tag: "Talent",
    title: "Building a Leadership Bench for Global Expansion",
    headlineMetric: "4×",
    metricLabel: "Promotions",
    humanMetric: "61%",
    humanMetricLabel: "Ready-now coverage",
    challenge:
      "Only 12% of director roles had ready-now internal successors — a vacuum that threatened a planned expansion into three new regions.",
    action:
      "Launched a tiered leadership development program, redesigned the talent review calibration, and paired high-potentials with executive coaches and stretch assignments.",
    result:
      "Ready-now successor coverage moved from 12% to 61% in 18 months, internal promotion rates into director+ roles quadrupled, and all three regional launches opened with internal leaders.",
    human:
      "I personally coached the first cohort of 11 high-potential leaders — one-on-one, for nine months each. Two of them now run regions. The rest are running businesses I'll never be in the room for.",
  },
  {
    tag: "DEI",
    title: "Rebuilding Inclusive Hiring End-to-End",
    headlineMetric: "+38%",
    metricLabel: "Underrep. hires",
    humanMetric: "200+",
    humanMetricLabel: "Interviewers trained",
    challenge:
      "Hiring for senior roles skewed heavily homogeneous despite a diverse top-of-funnel, and recruiter scorecards showed late-stage drop-off concentrated in specific teams.",
    action:
      "Rebuilt interview loops around structured rubrics, trained 200+ interviewers on inclusive practices, and introduced panel diversity requirements with real-time funnel dashboards for hiring managers.",
    result:
      "Underrepresented hires at senior levels increased 38% year-over-year with no change to quality-of-hire scores, and time-to-fill held steady through the redesign.",
    human:
      "The unlock wasn't the rubric — it was the EQ work with hiring managers who didn't realize how their language and body language in debriefs was shaping outcomes. That conversation changed the culture more than any training deck.",
  },
]

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative bg-sand-100/60 py-24 lg:py-32 dark:bg-navy-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 dark:text-sage-300">
            Strategic Wins
          </div>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl dark:text-sand-50">
            Case studies — business outcome and human outcome
          </h2>
          <p className="mt-4 text-lg text-navy-800/75 dark:text-sand-100/75">
            Every case is reported on two ledgers: the measurable business result, and the people who
            lived through the change. Click any card to expand.
          </p>
        </div>

        <div className="mt-14 grid gap-5">
          {STUDIES.map((s, i) => (
            <CaseStudyCard key={s.title} study={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
