import type { CommentDto } from './index.types'
import { defineStore } from 'pinia'
import { getCommentByPostId } from '../api'
import { ref } from 'vue'
import { mapComment } from '../lib/mapComment'
import { useGetIsDeleted } from '../hooks/useGetIsDeleted'

export const useCommentsStore = defineStore('comments', () => {
  const isCommentsLoading = ref<boolean>(false)
  const commentsList = ref<CommentDto[]>([])
  const actualComments = ref<CommentDto[]>([])

  const getCommentByPostIdAsync = async (id: number) => {
    isCommentsLoading.value = true
    try {
      const { data } = await getCommentByPostId(id);
      commentsList.value = data.comments.map((x) => {
        const { isDeleted, toggleDeleted } = useGetIsDeleted()
        return { ...mapComment(x), isDeleted: ref(isDeleted), toggleDeleted }
      })
      actualComments.value = commentsList.value.filter((x) => !x.isDeleted)
    } catch(e) {
      console.error(e)
      commentsList.value = []
    } finally {
      isCommentsLoading.value = false
    }
  }

  const handleDeleteClick = (id: number) => {
    commentsList.value.forEach((comment) => {
      if (comment.id === id) {
        comment.toggleDeleted?.();
      }
    });
    actualComments.value = commentsList.value.filter((x) => !x.isDeleted)
  };

  const handleReturnClick = (id: number) => {
    commentsList.value.forEach((comment) => {
      if (comment && comment.id === id) {
        comment.toggleDeleted?.();
      }
    });
    actualComments.value = commentsList.value.filter((x) => !x.isDeleted)
  };

  const getIsDeleteById = (id: number) => {
    const deleteComment = commentsList.value?.find((x) => x.id === id);
    return deleteComment?.isDeleted;
  }

  return {
    getCommentByPostIdAsync,
    handleDeleteClick,
    handleReturnClick,
    getIsDeleteById,
    actualComments,
    commentsList,
    isCommentsLoading,
  }
})
