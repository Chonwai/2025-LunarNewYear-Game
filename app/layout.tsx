import type { Metadata } from "next"
import "./globals.css"
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google"
import Metrics from "./components/Metrics"

export const metadata: Metadata = {
  title: "2025蛇年過三關🐍",
  description: "2025蛇年過三關🐍",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <Metrics />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID!} />
      </body>
    </html>
  )
}
