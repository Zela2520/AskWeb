import type { PostDto } from './index.types';
import { defineStore } from 'pinia';
import { getPostsList } from '../api';
import { ref } from 'vue';
import { mapPost } from '../lib/mapPost/ui/mapPost';
import { getLikePanelState } from '../lib';

export const usePostsStore = defineStore('posts', () => {
  const isPostLoading = ref<boolean>(false);
  const selectPost = ref<PostDto>();
  const postsList = ref<PostDto[]>([]);

  async function getPostsListAsync(params: any, limit: number = 5) {
    isPostLoading.value = true;
    try {
      const { data } = await getPostsList(params);
      postsList.value = data.posts?.slice(0, limit).map((x) => {
        const { isLiked, isDisliked, likes, dislikes, toggleLike, toggleDislike } = getLikePanelState({ initialLikes: x.reactions.likes, initialDislikes: x.reactions.dislikes });
        return { ...mapPost(x), isLiked: isLiked, isDisliked: isDisliked, likes: likes, dislikes: dislikes, toggleLike, toggleDislike };
      }) || [];
    } catch (e) {
      console.error(e);
      postsList.value = [];
    } finally {
      isPostLoading.value = false;
    }
  }

  const handleLikeClick = (id: number) => {
    postsList.value.forEach((post) => {
      if (post.id === id) {
        post.toggleLike?.();
      }
    });
  };

  const handleDislikeClick = (id: number) => {
    postsList.value.forEach((post) => {
      if (post.id === id) {
        post.toggleDislike?.();
      }
    });
  };

  const getLikesById = (id: number) => {
    const likedPost = postsList.value?.find((x) => x.id === id);
    return likedPost?.likes;
  };

  const getDislikesById = (id: number) => {
    const dislikedPost = postsList.value?.find((x) => x.id === id);
    return dislikedPost?.dislikes;
  };

  const getIsLikeById = (id: number) => {
    const likedPost = postsList.value?.find((x) => x.id === id);
    return likedPost?.isLiked;
  };

  const getIsDislikeById = (id: number) => {
    const dislikedPost = postsList.value?.find((x) => x.id === id);
    return dislikedPost?.isDisliked;
  };

  return {
    getPostsListAsync,
    handleLikeClick,
    handleDislikeClick,
    getLikesById,
    getDislikesById,
    getIsLikeById,
    getIsDislikeById,
    postsList,
    selectPost,
    isPostLoading,
  };
});