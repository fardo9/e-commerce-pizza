'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ShoppingCart, User } from 'lucide-react'

import { cn } from '@shared/lib/utils'
import type { IProps } from '@shared/types'
import { Container, ThemeToggle } from '@components'
import { Button } from '@components/ui'

export function Header({ className }: IProps) {
  return (
    <header className={cn('border-b border-gray-100', className)}>
      <Container className="flex items-center justify-between py-8">
        <Link href="/" className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            width={35}
            height={35}
            alt="Logo"
            priority
            quality={100}
            sizes="(max-width: 768px) 24px, 35px"
          />
          <div>
            <h1 className="text-2xl font-black uppercase">Next Pizza</h1>
            <p className="text-sm leading-3 text-gray-400">смачніше як ніколи</p>
          </div>
        </Link>

        <div className="mx-10 flex-1">{/* <SearchInput /> */}</div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Log In
          </Button>

          <Button variant="outline" className="group relative">
            <b>520 ₴</b>
            <span className="mx-3 h-full w-[1px] bg-primary group-hover:bg-primary-foreground" />
            <ShoppingCart
              size={16}
              className="relative group-hover:opacity-0 group-hover:duration-300"
              strokeWidth={2}
            />
            <ArrowRight
              size={16}
              className="absolute right-5 -translate-x-2 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
            />
          </Button>

          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
