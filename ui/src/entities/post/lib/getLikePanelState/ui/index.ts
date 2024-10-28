import { ref } from 'vue';
import type { LikeProps, Reaction } from './index.types';

export const getLikePanelState = (props: LikeProps): Reaction => {
    const { initialLikes = 0, initialDislikes = 0 } = props

    const isLiked = ref(false);
    const isDisliked = ref(false);
    const likes = ref(initialLikes);
    const dislikes = ref(initialDislikes);

    const toggleLike = () => {
        if (isDisliked.value) {
            isDisliked.value = false;
            dislikes.value--;
        }
        isLiked.value = !isLiked.value;
        likes.value += isLiked.value ? 1 : -1;
    };

    const toggleDislike = () => {
        if (isLiked.value) {
            isLiked.value = false;
            likes.value--;
        }
        isDisliked.value = !isDisliked.value;
        dislikes.value += isDisliked.value ? 1 : -1;
    };

    return {
        isLiked,
        isDisliked,
        likes,
        dislikes,
        toggleLike,
        toggleDislike,
    };
};
