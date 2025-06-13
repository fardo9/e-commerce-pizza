import { useState } from 'react'
import { useClickAway } from 'react-use'

import { useCreateSafeRef } from '../utils/createRef'

export const useSearchInput = () => {
  const ref = useCreateSafeRef<HTMLDivElement>()
  const [focused, setFocused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  useClickAway(ref, () => {
    setFocused(false)
    setSearchQuery('')
  })

  return { ref, focused, setFocused, searchQuery, setSearchQuery }
}
