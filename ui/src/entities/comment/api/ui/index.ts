import { apiInstance } from "@/shared/api"
import type { AxiosPromise } from "axios"
import type { CommentsResponse } from "./index.types"
import type { Post } from "@/entities/post/api"

const BASE_URL = '/'

export const getCommentByPostId = ({
    id,
    ...params
  }: Partial<Post>): AxiosPromise<CommentsResponse> => {
    return apiInstance.get(`${BASE_URL}${id}/comments`, { params })
  }