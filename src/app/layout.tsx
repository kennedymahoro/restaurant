import './globals.css'
import type { Metadata } from 'next'
import { Crimson_Text, Playfair_Display, Roboto, Merriweather } from 'next/font/google'
import localfont from 'next/font/local'

const crimson_text = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-crimson',
  display: 'swap',
  weight: '400'
})

const playfiar_display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: '400'
})
const roboto= Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  weight: '400'
})
const ThinMan = localfont({
  src: './ThinMan.ttf',
  display:'swap',
  variable:'--font-ThinMan'
})
const merriweather = Merriweather({
  subsets: ['latin'],
  display:'swap',
  weight: '400',
  variable:'--font-merriweather'
})

export const metadata: Metadata = {
  title: 'Canlis - Home',
  description: "Seattle's landmark fine-dining destination for 70 years and recent home to multi-disciplinary pandemic pivots designed to serve our city.",
  //content: '"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`w-full h-full ${crimson_text.variable} ${playfiar_display.variable} ${roboto.variable} ${ThinMan.variable} ${merriweather.variable}`}>
      <body >{children}</body>
    </html>
  )
}
