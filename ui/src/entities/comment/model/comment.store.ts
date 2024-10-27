import type { CommentDto } from './index.types'
import { defineStore } from 'pinia'
import { getCommentByPostId } from '../api'
import { ref } from 'vue'
import type { Post } from '@/entities/post/api'
import { mapComment } from '../lib/mapComment'

export const useCommentsStore = defineStore('posts', () => {
  const isCommentsLoading = ref<boolean>(false)
  const commentsList = ref<CommentDto[]>([])

  async function getCommentByPostIdAsync({ id, ...params }: Partial<Post>) {
    isCommentsLoading.value = true
    try {
      const { data } = await getCommentByPostId({ id, ...params })
      commentsList.value = data.comments.map((x) => mapComment(x))
      return data
    } catch(e) {
      console.error(e)
      commentsList.value = []
    } finally {
      isCommentsLoading.value = false
    }
  }

  return {
    getCommentByPostIdAsync,
    commentsList
  }
})
