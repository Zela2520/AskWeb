export type CommentId = Brand<Id, 'CommentId'>

export type CommentDto = {
    id: number; // TODO: изменить на CommentId
    body: string;
    postId: number;
    likes: number;
    userId: number;
    username: string;
    fullName: string;
}
