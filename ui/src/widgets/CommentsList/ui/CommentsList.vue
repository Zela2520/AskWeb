<template>
    <section class="flex flex-col mt-2.5 max-w-full w-full md:w-[676px] mx-auto">
        <Post 
            v-if="selectPost" 
            :id="selectPost.id" 
            :title="selectPost.title" 
            :body="selectPost.body"
            :likes="selectPost.likes" 
            :dislikes="selectPost.dislikes" 
            :tags="selectPost.tags"
            :views="selectPost.views" 
            :canOpenPost="false" 
        />
        
        <div v-if="isCommentsLoading" class="flex justify-center mt-4">
            <Spinner />
        </div>
        
        <section data-layername="comments" class="flex flex-col mt-4" aria-label="Comments Section">
            <Header :comments="actualComments.length" />
            
            <Comment
                v-for="comment in commentsList"
                :key="comment.id"
                :id="comment.id"
                :author="comment.username"
                :text="comment.body"
                class="my-2"
            />
        </section>
    </section>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from 'vue';
import { useGetComments } from '@/features/useGetComments';
import { useGetPosts } from '@/features/useGetPosts';
import { Comment } from '@/entities/comment';
import { Spinner } from '@/shared/ui/Spinner';
import { useRoute } from 'vue-router';
import { Header } from './header';
import { Post } from '@/entities/post';

export default defineComponent({
    name: 'CommentList',
    components: {
        Comment,
        Spinner,
        Header,
        Post,
    },
    setup() {
        const { commentsList, getComments, actualComments, isCommentsLoading } = useGetComments();
        const { postsList, getPosts } = useGetPosts();

        const route = useRoute();
        const commentId = Number(route.params.commentId);

        const selectPost = computed(() => postsList.value.find(post => post.id === commentId) || null);

        const checkReload = () => {
            const isReloaded = sessionStorage.getItem('isReloaded');
            if (!isReloaded) {
                sessionStorage.setItem('isReloaded', 'true');
                if (!postsList.value.length) getPosts();
            }

            window.addEventListener('beforeunload', () => {
                sessionStorage.removeItem('isReloaded');
            });
        };

        onMounted(() => {
            checkReload();
            getComments(commentId);
        });

        return {
            commentsList,
            actualComments,
            selectPost,
            isCommentsLoading,
        };
    },
});
</script>
