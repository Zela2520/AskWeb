import type { Ref } from "vue"

export type LikeProps = {
    initialLikes?: number
    initialDislikes?: number
}

export type Reaction = {
    isLiked: Ref<boolean, boolean>;
    isDisliked: Ref<boolean, boolean>;
    likes:  Ref<number, number>;
    dislikes:  Ref<number, number>;
    toggleLike: () => void;
    toggleDislike: () => void;
}