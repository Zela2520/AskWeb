export type PostProps = {
    id: number;
    title: string;
    body: string;
    likes: number;
    dislikes: number;
    tags: string[];
    views: number;
    canOpenPost?: boolean
};