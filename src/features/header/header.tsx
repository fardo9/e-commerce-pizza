'use client'

import { AuthButton, CartButton, Logo } from './ui'

import { Container } from '@/shared/components'
import { ThemeSwitcher } from '@/shared/components/theme-switcher/theme-switcher'
import { cn } from '@/shared/lib/utils'
import type { IProps } from '@/shared/types'
import { SearchProduct } from '@/src/features/search-products'

export function Header({ className }: IProps) {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <Logo />

        <div className="mx-10 flex-1">
          <SearchProduct />
        </div>

        <div className="flex items-center gap-3">
          <AuthButton />
          <CartButton />

          <ThemeSwitcher />
        </div>
      </Container>
    </header>
  )
}
