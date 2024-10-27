import { storeToRefs } from 'pinia';

import { usePostsStore } from '@/entities/post';

export const useGetPosts = () => {
	const postsStore = usePostsStore();
	const { postsList, isPostLoading } = storeToRefs(postsStore);

	const getPosts = async () => {
		await postsStore.getPostsListAsync({});
	};

	return {
		postsList,
		getPosts,
		isPostLoading,
	};
};