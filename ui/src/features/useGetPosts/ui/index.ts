import { storeToRefs } from 'pinia';

import { usePostsStore } from '@/entities/post';

const DEFAULT_LIMIT = 5;

export const useGetPosts = () => {
	const postsStore = usePostsStore();
	const { postsList, isPostLoading } = storeToRefs(postsStore);

	const getPosts = async () => await postsStore.getPostsListAsync({}, DEFAULT_LIMIT);

	return {
		postsList,
		getPosts,
		isPostLoading,
	};
};