'use client'

import { ReactNode } from 'react'
import { ThemeProvider as Theme } from 'next-themes'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme attribute="class" defaultTheme="system" enableSystem>
      {children}
    </Theme>
  )
}
