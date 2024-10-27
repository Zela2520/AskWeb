import type { PostDto } from './index.types'
import { defineStore } from 'pinia'
import { getPostsList } from '../api'
import { ref } from 'vue'
import { mapPost } from '../lib/mapPost'

export const usePostsStore = defineStore('posts', () => {
  const isPostLoading = ref<boolean>(false)
  const postsList = ref<PostDto[]>([])

  async function getPostsListAsync(params: any, limit: number = 5) {
    isPostLoading.value = true
    try {
      const { data } = await getPostsList(params)
      postsList.value = data.posts?.slice(0, limit).map((x) => mapPost(x)) || []
    } catch(e) {
      console.error(e)
      postsList.value = []
    } finally {
      isPostLoading.value = false
    }
  }

  return {
    getPostsListAsync,
    postsList,
    isPostLoading
  }
})
