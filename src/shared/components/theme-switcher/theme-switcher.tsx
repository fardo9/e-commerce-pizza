'use client'

import { useTheme } from 'next-themes'

import { Button } from '@/shared/components/ui'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}>
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </Button>
  )
}
