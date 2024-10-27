export type PostId = Brand<Id, 'id'>

export type PostDto = {
    id: number; // TODO: вернуть PostId
    title: string;
    body: string;
    tags: string[];
    likes: number;
    dislikes: number;
    views: number;
    userId: number;
    isLiked: boolean
    isDisliked: boolean
    toggleLike: () => void
    toggleDislike: () => void
}
