'use client'

import Link from 'next/link'

import { cn } from '@shared/lib/utils'

interface Props {
  name: string
  id: number
  isActive?: boolean
}

export const CategoryLink = ({ name, id, isActive }: Props) => (
  <Link
    href="/"
    className={cn(
      'flex items-center font-bold text-primary h-11 rounded-2xl px-5',
      isActive && 'bg-white shadow-md shadow-gray-200 text-primary'
    )}
  >
    {name}
  </Link>
)
