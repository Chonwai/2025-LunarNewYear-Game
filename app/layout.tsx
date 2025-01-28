import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '2025蛇年過三關🐍',
  description: '2025蛇年過三關🐍',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
