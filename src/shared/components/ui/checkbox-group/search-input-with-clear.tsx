import { X } from 'lucide-react'

import { Input } from '@/src/shared/components/ui'

interface SearchInputWithClearProps {
  value: string
  onChange: (v: string) => void
  placeholder?: string
}

export const SearchInputWithClear = ({
  value,
  onChange,
  placeholder
}: SearchInputWithClearProps) => (
  <div className="relative mb-5">
    <Input
      value={value}
      placeholder={placeholder}
      className="bg-gray-50 border-none"
      onChange={e => onChange(e.target.value)}
    />
    {value.length > 1 && (
      <span
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 hover:cursor-pointer"
        onClick={() => onChange('')}
      >
        <X size={16} />
      </span>
    )}
  </div>
)
