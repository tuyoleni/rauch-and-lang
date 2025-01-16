import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Rauch & Lang Electric Car - Historical Innovation',
  description: 'A 106-year-old masterpiece reimagined for the future of mobility',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

