"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Check } from "lucide-react"
import { LinkedInIcon } from "./icons"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle")

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name") ?? ""}`)
    const body = encodeURIComponent(
      `${data.get("message") ?? ""}\n\n— ${data.get("name") ?? ""} (${data.get("email") ?? ""})`,
    )
    window.location.href = `mailto:hello@oksanasemeniv.com?subject=${subject}&body=${body}`
    setStatus("sent")
    form.reset()
  }

  return (
    <section
      id="contact"
      className="relative bg-sand-100/50 py-24 lg:py-32 dark:bg-navy-900/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sage-600 dark:text-sage-300">
              Get in touch
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-navy-950 sm:text-4xl dark:text-sand-50">
              Let&apos;s design the next chapter of your people strategy
            </h2>
            <p className="mt-4 max-w-lg text-lg text-navy-800/75 dark:text-sand-100/75">
              Whether you&apos;re scaling, restructuring, or building leaders for the next altitude —
              I&apos;d love to hear where you are.
            </p>

            <div className="mt-8 space-y-4">
              <ContactRow
                icon={Mail}
                label="hello@oksanasemeniv.com"
                href="mailto:hello@oksanasemeniv.com"
              />
              <ContactRow
                icon={LinkedInIcon}
                label="linkedin.com/in/oksana-semeniv"
                href="https://www.linkedin.com/in/oksana-semeniv"
              />
              <ContactRow icon={MapPin} label="Remote · Based in Europe" />
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-sand-200 bg-white/80 p-6 shadow-sm backdrop-blur lg:p-8 dark:border-navy-800 dark:bg-navy-900/70"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <div className="mt-4">
              <Field label="Company (optional)" name="company" />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-navy-900 dark:text-sand-100">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                className="mt-1.5 w-full resize-none rounded-xl border border-sand-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 shadow-sm outline-none ring-sage-500/30 transition placeholder:text-navy-800/40 focus:border-sage-500 focus:ring-2 dark:border-navy-700 dark:bg-navy-950 dark:text-sand-50 dark:placeholder:text-sand-100/40"
                placeholder="Tell me about your team, your moment, and what you&apos;re after."
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-950 px-5 py-3 text-sm font-semibold text-sand-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-navy-900 hover:shadow-md sm:w-auto dark:bg-sand-50 dark:text-navy-950 dark:hover:bg-sand-100"
            >
              {status === "sent" ? (
                <>
                  <Check className="h-4 w-4" /> Opening your email…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function ContactRow({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href?: string
}) {
  const inner = (
    <span className="inline-flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-navy-800 shadow-sm ring-1 ring-sand-200 dark:bg-navy-900 dark:text-sand-100 dark:ring-navy-700">
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium text-navy-900 dark:text-sand-100">{label}</span>
    </span>
  )
  return href ? (
    <a href={href} target="_blank" rel="noreferrer" className="group block transition hover:-translate-y-0.5">
      {inner}
    </a>
  ) : (
    <div>{inner}</div>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-navy-900 dark:text-sand-100">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-sand-200 bg-white px-3.5 py-2.5 text-sm text-navy-950 shadow-sm outline-none ring-sage-500/30 transition placeholder:text-navy-800/40 focus:border-sage-500 focus:ring-2 dark:border-navy-700 dark:bg-navy-950 dark:text-sand-50"
      />
    </div>
  )
}
