import type { Category } from './types'

import { axiosInstance } from '@/src/shared/_api/axios'
import { ApiRoutes } from '@/src/shared/_api/constants'
import { request } from '@/src/shared/_api/request'

export const getAllCategories = async (): Promise<Category[]> => {
  return request(axiosInstance.get<Category[]>(ApiRoutes.CATEGORY))
}
