import { ref } from 'vue';

export const useGetIsDeleted = () => {
	const isDeleted = ref(false);

	const toggleDeleted = () => {
		isDeleted.value = !isDeleted.value;
	};

	return { isDeleted, toggleDeleted };
};
