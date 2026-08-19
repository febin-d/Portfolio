import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Febin Daniel | Computer Science Student",
  description:
    "Portfolio of Febin Daniel, Computer Science Student specializing in Web Development, Cybersecurity, and Machine Learning.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-foreground font-body antialiased selection:bg-primary/40 selection:text-white">
        <div className="scanlines" />
        {children}
      </body>
    </html>
  )
}
