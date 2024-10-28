export type CommentByPostId = {
    postId: number
}

export type PostEntities = {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

export type PostsResponse = {
    posts: PostEntities[];
    total: number;
    skip: number;
    limit: number;
}