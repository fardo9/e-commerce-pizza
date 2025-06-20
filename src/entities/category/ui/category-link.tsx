'use client'

import Link from 'next/link'

import { cn } from '@/shared/lib/utils'

export const CategoryLink = ({ name, isActive }: { name: string; isActive?: boolean }) => (
  <Link
    href={`./#${name.toLowerCase()}`}
    className={cn(
      'flex items-center font-bold text-primary h-11 rounded-2xl px-5',
      isActive && 'bg-white shadow-md shadow-gray-200 text-primary'
    )}
  >
    {name}
  </Link>
)
