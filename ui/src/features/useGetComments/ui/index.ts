import { storeToRefs } from 'pinia';

import { useCommentsStore } from '@/entities/comment';

export const useGetComments = () => {
	const commentsStore = useCommentsStore();
	const { commentsList, actualComments, isCommentsLoading } = storeToRefs(commentsStore);

	const getComments = async (id: number) => {
		await commentsStore.getCommentByPostIdAsync(id);
	};

	return {
		commentsList,
		actualComments,
		getComments,
		isCommentsLoading,
	};
};