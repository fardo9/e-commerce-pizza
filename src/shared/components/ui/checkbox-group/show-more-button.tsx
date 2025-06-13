import { Button } from '@/src/shared/components/ui'

export const ShowMoreButton = ({
  showAll,
  setShowAll
}: {
  showAll: boolean
  setShowAll: (v: boolean) => void
}) => (
  <div className={!showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
    <Button variant="outline" className="mt-4" onClick={() => setShowAll(!showAll)}>
      {showAll ? 'Show Less' : 'Show All'}
    </Button>
  </div>
)
