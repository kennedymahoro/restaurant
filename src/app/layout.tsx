import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Canlis - Home',
  description: "Seattle's landmark fine-dining destination for 70 years and recent home to multi-disciplinary pandemic pivots designed to serve our city.",
  content: '"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='w-full h-full'>
      <body >{children}</body>
    </html>
  )
}
