<template>
    <div>
        <h1 class="text-2xl font-bold mb-4">Posts</h1>
        <div v-if="isPostLoading">
            <Spinner />
        </div>
        <ul v-else>
            <li v-for="post in postsList" :key="post.id">
                <Post :post="post" />
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useGetPosts } from '@/features/useGetPosts';
import { Post } from '@/entities/post';
import Spinner from '@/shared/ui/Spinner';

export default defineComponent({
    components: {
        Post,
        Spinner,
    },
    setup() {
        const { postsList, getPosts, isPostLoading } = useGetPosts();

        onMounted(getPosts);

        return {
            postsList,
            isPostLoading,
        };
    },
});
</script>
