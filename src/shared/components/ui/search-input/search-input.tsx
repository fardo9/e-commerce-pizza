'use client'

import { ChangeEvent, RefObject } from 'react'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Input } from '@/shared/components/ui'
import { IProps } from '@/shared/types'

interface SearchInputProps extends IProps {
  refContainer: RefObject<HTMLDivElement | null>
  searchQuery: string
  setSearchQuery: (value: string) => void
  onFocus?: () => void
  children?: React.ReactNode
}

export function SearchInput({
  className,
  refContainer,
  searchQuery,
  setSearchQuery,
  onFocus,
  children
}: SearchInputProps) {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  return (
    <div
      ref={refContainer}
      className={cn('flex relative rounded-2xl flex-1 justify-between h-9 z-30', className)}
    >
      <SearchIcon className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
      <Input
        className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
        type="text"
        placeholder="Search pizza..."
        onFocus={onFocus}
        value={searchQuery}
        onChange={handleInputChange}
      />
      {children}
    </div>
  )
}
