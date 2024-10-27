import type { Comment } from '../api';
import type { CommentDto } from '../model/index.types';

export const mapComment = (post: Comment): CommentDto => {
    return {
        id: post.id,
        postId: post.postId,
        body: post.body,
        likes: post.likes,
        userId: post.user.id,
        username: post.user.username,
        fullName: post.user.fullName,
    }
}
