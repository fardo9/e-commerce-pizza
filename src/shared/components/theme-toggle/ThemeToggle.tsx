'use client'

import { useTheme } from 'next-themes'

import { Button } from '@components/ui'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button onClick={() => setTheme(theme => (theme === 'dark' ? 'light' : 'dark'))}>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
      </Button>
    </div>
  )
}

export default ThemeToggle
