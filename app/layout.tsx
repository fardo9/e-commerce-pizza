import { Nunito } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'

import './globals.css'

import { TanStackProvider, ThemeProvider } from '@/src/shared/providers'

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
        <TanStackProvider>
          <ThemeProvider>{children}</ThemeProvider>
          <SpeedInsights />
        </TanStackProvider>
      </body>
    </html>
  )
}
