import type { Ref } from "vue";

export type PostId = Brand<Id, 'id'>

export type PostDto = {
    id: number; // TODO: вернуть PostId
    title: string;
    body: string;
    tags: string[];
    likes: Ref<number>;
    dislikes: Ref<number>;
    views: number;
    userId: number;
    isLiked: Ref<boolean>
    isDisliked: Ref<boolean>
    toggleLike?: () => void
    toggleDislike?: () => void
}
