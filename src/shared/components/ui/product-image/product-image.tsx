import React from 'react'
import Image from 'next/image'

import { cn } from '@/shared/lib/utils'

type Size = 20 | 30 | 40

interface Props {
  className?: string
  imageUrl: string
  size: Size
  alt: string
}

export const ProductImage: React.FC<Props> = ({ imageUrl, size, className, alt }) => {
  const dimensions = {
    20: { width: 300, height: 300 },
    30: { width: 400, height: 400 },
    40: { width: 500, height: 500 }
  }

  const { width, height } = dimensions[size] ?? { width: 300, height: 300 }
  return (
    <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className={cn('relative left-2 top-2 transition-all z-10 duration-300', {
          'w-[300px] h-[300px]': size === 20,
          'w-[400px] h-[400px]': size === 30,
          'w-[500px] h-[500px]': size === 40
        })}
      />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full border-gray-200 w-[450px] h-[450px]" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full border-gray-100 w-[370px] h-[370px]" />
    </div>
  )
}
