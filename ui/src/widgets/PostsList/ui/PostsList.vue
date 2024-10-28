<template>
    <section class="flex flex-col mt-2.5 max-w-full w-[676px] gap-y-8">
        <div v-if="isPostLoading">
            <Spinner />
        </div>
        <Post
          v-for="post in postsList"
          :id="post.id"
          :title="post.title"
          :body="post.body"
          :likes="post.likes" 
          :dislikes="post.dislikes"
          :tags="post.tags"
          :views="post.views"
        />
    </section>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useGetPosts } from '@/features/useGetPosts';
import { Post } from '@/entities/post';
import { Spinner } from '@/shared/ui/Spinner';

export default defineComponent({
    components: {
        Post,
        Spinner,
    },
    setup() {
        const { postsList, getPosts, isPostLoading } = useGetPosts();

        onMounted(() => {
            if (!postsList.value.length) getPosts()
        });

        return {
            postsList,
            isPostLoading,
        };
    },
});
</script>

<style scoped>
</style>