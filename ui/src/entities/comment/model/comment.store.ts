import type { CommentDto } from './index.types'
import { defineStore } from 'pinia'
import { getCommentByPostId } from '../api'
import { ref } from 'vue'
import { mapComment } from '../lib/mapComment'

export const useCommentsStore = defineStore('comments', () => {
  const isCommentsLoading = ref<boolean>(false)
  const commentsList = ref<CommentDto[]>([])

  const getCommentByPostIdAsync = async (id: number) => {
    isCommentsLoading.value = true
    try {
      const { data } = await getCommentByPostId(id);
      commentsList.value = data.comments.map((x) => mapComment(x))
      return data
    } catch(e) {
      console.error(e)
      commentsList.value = []
    } finally {
      isCommentsLoading.value = false
    }
  }

  const handleDelete = (commentId: number) =>  {
    commentsList.value = commentsList.value.map((x) => {
      if (x.id === commentId) x.isDeleted = true

      return x
    })
  }

  const handleReturn = (commentId: number) =>  {
      commentsList.value = commentsList.value.map((x) => {
        if (x.id === commentId) x.isDeleted = false

        return x
      })
  }

  return {
    getCommentByPostIdAsync,
    commentsList,
    handleDelete,
    handleReturn,
    isCommentsLoading,
  }
})
