import type { PostDto } from '@/entities/post/model/index.types';
import type { PostEntities } from '@/entities/post'

import { ref } from 'vue'

export const mapPost = (post: PostEntities): PostDto =>{
    return {
        id: post.id,
        title: post.title,
        body: post.body,
        tags: post.tags,
        likes: ref(post.reactions.likes),
        dislikes: ref(post.reactions.dislikes),
        views: post.views,
        userId: post.userId,
        isLiked: ref(false),
        isDisliked: ref(false),
    }
}