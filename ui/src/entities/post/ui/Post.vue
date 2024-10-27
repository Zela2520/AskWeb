<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { usePostsStore } from '../model/post.store';
import { storeToRefs } from 'pinia';
import { Spinner } from '@/shared/ui/Spinner';
import { Like } from '@/shared/icons'

// TODO: принимает пропсы. feature импортирует api, использует api делает запрос возвращает данные для этой сущности
export default defineComponent({
    components: {
        Spinner,
        Like,
    },
    setup() {
        const postsStore = usePostsStore();
        const { postsList, isPostLoading } = storeToRefs(postsStore);

        onMounted(async () => {
            await postsStore.getPostsListAsync({});
        });

        return {
            postsList,
            isPostLoading,
        };
    }
});
</script>
<template>
    <div>
        <h1>Posts</h1>
        <div v-if="isPostLoading">
            <Spinner />
        </div>
        <ul v-else>
            <li v-for="post in postsList" :key="post.id">
                <h2>{{ post.title }}</h2>
                <p>{{ post.body }}</p>
                <p><strong>Likes:</strong> {{ post.likes }}</p>
                <p><strong>Tags:</strong> {{ post.tags.join(', ') }}</p>
                <p><strong>Views:</strong> {{ post.views }}</p>
            </li>
        </ul>
    </div>
</template>
