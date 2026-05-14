import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: "Nexus Tech Solution — AI-first Software Company",
  description: "Building smart software solutions for businesses ready to grow. Specializing in AI-powered platforms, custom web applications, and business automation.",
  icons: {
    icon: "/nexustech-logo.png",
    shortcut: "/nexustech-logo.png",
    apple: "/nexustech-logo.png",
  },
}

export const viewport: Viewport = {
  themeColor: '#0d0d0d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
