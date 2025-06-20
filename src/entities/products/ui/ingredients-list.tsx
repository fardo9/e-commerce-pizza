import { IngredientDTO } from '@/src/server/dto/ingredients/ingredient.dto'

export function IngredientsList({ ingredients }: { ingredients: IngredientDTO[] }) {
  return (
    <>
      {ingredients?.length > 0 && (
        <ul className="mt-4 text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
          {ingredients.map(ing => (
            <li key={ing.id} className="list-disc list-inside">
              {ing.name}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
