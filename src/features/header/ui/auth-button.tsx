import { User } from 'lucide-react'

import { Button } from '@components/ui'

export const AuthButton = () => (
  <Button variant="outline" className="flex items-center gap-1">
    <User size={16} />
    Log In
  </Button>
)
