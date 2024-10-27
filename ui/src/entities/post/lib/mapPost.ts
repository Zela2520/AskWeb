import type { Post } from '../api';
import type { PostDto } from '../model/index.types';

export const mapPost = (post: Post): PostDto =>{
    return {
        id: post.id,
        title: post.title,
        body: post.body,
        tags: post.tags,
        likes: post.reactions.likes,
        dislikes: post.reactions.dislikes,
        views: post.views,
        userId: post.userId,
        isLiked: false,
        isDisliked: false,
    }
}