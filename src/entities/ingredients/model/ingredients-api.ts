import { axiosInstance } from '@/src/shared/_api/axios'
import { ApiRoutes } from '@/src/shared/_api/constants'
import { request } from '@/src/shared/_api/request'
import { Ingredient } from '@/src/shared/types'

export const getAllIngredients = async (): Promise<Ingredient[]> => {
  return request(axiosInstance.get<Ingredient[]>(ApiRoutes.INGREDIENTS))
}
