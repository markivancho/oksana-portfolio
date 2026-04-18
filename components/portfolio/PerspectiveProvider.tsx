"use client"

import { createContext, useContext, useState } from "react"

export type Perspective = "both" | "hrbp" | "coaching"

interface PerspectiveContextValue {
  perspective: Perspective
  set: (p: Perspective) => void
}

const PerspectiveContext = createContext<PerspectiveContextValue | null>(null)

export function PerspectiveProvider({ children }: { children: React.ReactNode }) {
  const [perspective, set] = useState<Perspective>("both")
  return (
    <PerspectiveContext.Provider value={{ perspective, set }}>
      {children}
    </PerspectiveContext.Provider>
  )
}

export function usePerspective() {
  const ctx = useContext(PerspectiveContext)
  if (!ctx) throw new Error("usePerspective must be used within PerspectiveProvider")
  return ctx
}

export function perspectiveDim(
  perspective: Perspective,
  track: "hrbp" | "coaching",
): boolean {
  return perspective !== "both" && perspective !== track
}
