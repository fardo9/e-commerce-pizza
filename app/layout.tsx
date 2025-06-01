import { Nunito } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import { Header } from '@features/header/header'

import './globals.css'

import { ThemeProvider } from './_providers/ThemeProvider'

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900']
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>

        <SpeedInsights />
      </body>
    </html>
  )
}
