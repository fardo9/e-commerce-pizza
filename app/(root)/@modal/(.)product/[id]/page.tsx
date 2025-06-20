import React from 'react'

import { Params } from '@/src/shared/types'
import { ProductModalClient } from '@/src/widgets/product-modal/ui/product-modal-client'

export default async function ProductModalPage({ params }: { params: Params }) {
  const { id } = await params

  return <ProductModalClient id={id} />
}
