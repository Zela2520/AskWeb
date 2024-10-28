<template>
    <article class="flex flex-col w-full max-w-[676px] mx-auto">
        <header class="flex flex-col w-full text-gray-950">
            <h2 class="text-3xl font-bold tracking-tighter">{{ title }}</h2>
            <p class="mt-4 text-xl tracking-tighter leading-5">{{ body }}</p>
        </header>
        <footer class="flex flex-col md:flex-row gap-4 items-center self-start mt-6 text-sm">
            <div class="flex overflow-hidden gap-2 items-center my-auto whitespace-nowrap rounded-[30px]">
                <button :class="[
                    'flex gap-1.5 items-center py-2 pr-2 pl-3',
                    isLiked ? 'bg-red-500 text-white' : 'bg-black bg-opacity-0 text-black'
                ]" @click="handleLikeClick" aria-label="Like post">
                    <span class="flex gap-1 items-center tracking-normal">
                        <img :src="likeIcon" :alt="isLiked ? 'Unlike post' : 'Like post'"
                            class="object-contain w-[13px]" />
                        <span>Like</span>
                    </span>
                    <span :class="['tracking-tighter text-right', !isLiked && 'opacity-30']">
                        {{ likes }}
                    </span>
                </button>

                <button :class="[
                    'flex gap-1.5 items-center py-2 pr-2 pl-3',
                    isDisliked ? 'bg-black text-white' : 'bg-black bg-opacity-0 text-black'
                ]" @click="handleDislikeClick" aria-label="Dislike post">
                    <span class="flex gap-1 items-center tracking-normal">
                        <img :src="dislikeIcon" :alt="isDisliked ? 'Remove dislike' : 'Dislike post'"
                            class="object-contain w-[13px]" />
                        <span>Trash</span>
                    </span>
                    <span :class="['tracking-tighter text-right', !isDisliked && 'opacity-30']">
                        {{ dislikes }}
                    </span>
                </button>

                <button v-if="canOpenPost" @click="toggleComments" class="flex gap-1 items-center text-orange-500">
                    <span>Open comments</span>
                </button>
            </div>

            <div class="flex gap-2 items-center my-auto tracking-normal w-full md:w-auto">
                <time datetime="2024-01-17" class="flex items-center whitespace-nowrap text-black text-opacity-20">
                    Today
                </time>

                <div class="flex items-center whitespace-nowrap">
                    <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/439047a892b88936a81a6798c38680f2764e703d7207ea4c5aa006ebbbb597cd?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66"
                         alt="" class="object-contain w-2.5" />
                    <span class="py-1 pr-1 rounded bg-zinc-500 bg-opacity-10">history</span>
                    
                    <template v-for="(tag, index) in tags" :key="index">
                        <span class="p-1 rounded bg-zinc-500 bg-opacity-10">{{ tag }}</span>
                    </template>
                </div>
            </div>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed } from 'vue';
import { useRouter } from 'vue-router';
import { usePostsStore } from '../model/post.store';
import type { PostProps } from './index.types'

const props = withDefaults(defineProps<PostProps>(), {
    canOpenPost: true
});
const postsStore = usePostsStore();
const router = useRouter();

const likes = computed(() => postsStore.getLikesById(props.id));
const dislikes = computed(() => postsStore.getDislikesById(props.id));
const isLiked = computed(() => postsStore.getIsLikeById(props.id));
const isDisliked = computed(() => postsStore.getIsDislikeById(props.id));
const likeIcon = computed(() =>
    isLiked.value ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/255d07f3a96cc50a3d0320ee77bcdfe888ceb7de6d7625da5ece89189c6247bd?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66' :
    'https://cdn.builder.io/api/v1/image/assets/TEMP/dbac6499cbc423215857579d7a218750c1b14836cf105e3921666b6e114070c0?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66'
);
const dislikeIcon = computed(() =>
    isDisliked.value ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ab98e8a50e9c3910aadd3c28f9a17a189f41bab03cd5d4e8ad5697b1c51cf0b?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66' :
    'https://cdn.builder.io/api/v1/image/assets/TEMP/12673e70352a51d7fd75cd1e2cbd8a1ae2414306024c35eafcc09abcc06c8de8?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66'
);

const toggleComments = () => {
    router.push(`${props.id}/comment`);
};

const handleLikeClick = () => {
    postsStore.handleLikeClick(props.id);
};

const handleDislikeClick = () => {
    postsStore.handleDislikeClick(props.id);
};
</script>

<style scoped>

</style>