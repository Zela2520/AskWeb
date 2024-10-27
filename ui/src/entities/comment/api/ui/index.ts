import { apiInstance } from "@/shared/api"
import type { AxiosPromise } from "axios"
import type { CommentsResponse } from "./index.types"

const BASE_URL = '/'

export const getCommentByPostId = (id: number): AxiosPromise<CommentsResponse> => {
    return apiInstance.get(`${BASE_URL}${id}/comments`,)
}