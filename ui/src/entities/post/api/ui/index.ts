import type { AxiosPromise } from 'axios'
import type { PostsResponse } from './index.types'
import { apiInstance } from '@/shared/api'

const BASE_URL = '/'

export const getPostsList = (params: any):AxiosPromise<PostsResponse> =>  {
  return apiInstance.get(BASE_URL, { params })
}
