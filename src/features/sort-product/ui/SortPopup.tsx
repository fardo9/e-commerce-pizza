import React from 'react'
import { ArrowUpDown } from 'lucide-react'

import { Popover, PopoverContent, PopoverTrigger } from '@/shared/components/ui'
import { cn } from '@/shared/lib/utils'
import { IProps } from '@/shared/types'

export default function SortPopup({ className }: IProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
            className
          )}
        >
          <ArrowUpDown className="w-4 h-4" />
          <b>Sort:</b>

          <b className="text-primary">popylar</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            Popular at first
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            Inexpensive at first
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            First expensive
          </li>
          <li className="hover:bg-secondary hover:text-primary p-2 px-4 cursor-pointer rounded-md">
            With the best grade
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  )
}
