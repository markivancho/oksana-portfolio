import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/portfolio/ThemeProvider"
import { PerspectiveProvider } from "@/components/portfolio/PerspectiveProvider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Oksana Semeniv — Human Capital Architect",
  description:
    "Oksana Semeniv: Strategic HR Business Partner and Executive Coach. Scaling organizations by unlocking individual potential.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-sand-50 text-navy-950 dark:bg-navy-950 dark:text-sand-50`}
      >
        <ThemeProvider>
          <PerspectiveProvider>{children}</PerspectiveProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
