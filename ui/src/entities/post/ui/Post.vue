<template>
    <article class="flex flex-col w-full max-w-[676px] max-md:max-w-full">
        <header class="flex flex-col w-full text-gray-950 max-md:max-w-full">
            <h2 class="text-3xl font-bold tracking-tighter max-md:max-w-full">{{ title }}</h2>
            <p class="mt-4 text-xl tracking-tighter leading-5 max-md:max-w-full">{{ body }}</p>
        </header>
        <footer class="flex flex-wrap gap-2 items-center self-start mt-6 text-sm max-md:max-w-full">
            <div class="flex overflow-hidden gap-px items-center self-stretch my-auto whitespace-nowrap rounded-[30px]">
                <button :class="[
                    'flex gap-1.5 items-center self-stretch py-2 pr-2 pl-3 my-auto',
                    isLiked ? 'bg-red-500 text-white' : 'bg-black bg-opacity-0 text-black'
                ]" @click="handleLikeClick" aria-label="Like post">
                    <span class="flex gap-1 items-center self-stretch my-auto tracking-normal">
                        <img :src="likeIcon" :alt="isLiked ? 'Unlike post' : 'Like post'"
                            class="object-contain shrink-0 self-stretch my-auto aspect-[1.18] w-[13px]" />
                        <span>Like</span>
                    </span>
                    <span :class="['self-stretch my-auto tracking-tighter text-right', !isLiked && 'opacity-30']">
                        {{ likes }}
                    </span>
                </button>

                <button :class="[
                    'flex gap-1.5 items-center self-stretch py-2 pr-2 pl-3 my-auto',
                    isDisliked ? 'bg-black text-white' : 'bg-black bg-opacity-0 text-black'
                ]" @click="handleDislikeClick" aria-label="Dislike post">
                    <span class="flex gap-1 items-center self-stretch my-auto tracking-normal">
                        <img :src="dislikeIcon" :alt="isDisliked ? 'Remove dislike' : 'Dislike post'"
                            class="object-contain shrink-0 self-stretch my-auto aspect-[1.18] w-[13px]" />
                        <span>Trash</span>
                    </span>
                    <span
                        :class="['self-stretch my-auto tracking-tighter text-right', !isDisliked && 'opacity-30']">
                        {{ dislikes }}
                    </span>
                </button>
                <button v-if="canOpenPost" @click="toggleComments" class="flex gap-1 items-center text-orange-500 w-[108px]">
                    <span class="flex flex-col self-stretch my-auto w-[108px]">
                        <span>Open comments</span>
                        <span class="mt-1 w-full border border-solid border-orange-500 border-opacity-30 min-h-[1px]"></span>
                    </span>
                </button>
            </div>
            <div class="flex gap-2 items-center self-stretch my-auto tracking-normal min-w-[240px]">
                <time datetime="2024-01-17" class="flex gap-px items-center whitespace-nowrap min-h-[17px] text-black text-opacity-20">
                    Today
                </time>
                <div class="flex gap-1 items-start text-black whitespace-nowrap">
                    <div class="flex items-center">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/439047a892b88936a81a6798c38680f2764e703d7207ea4c5aa006ebbbb597cd?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66" alt="" class="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[0.56] fill-zinc-500 fill-opacity-10" />
                        <span class="gap-2.5 self-stretch py-1 pr-1 my-auto rounded-none bg-zinc-500 bg-opacity-10">
                            history
                        </span>
                    </div>
                    <span v-for="(tag, index) in tags" :key="index" class="self-stretch p-1 rounded bg-zinc-500 bg-opacity-10">{{ tag }}</span>
                </div>
            </div>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, computed, ref } from 'vue';
import { PostProps } from './index.types';
import { useGetLikePanel } from '../hooks'
import { useRouter, useRoute } from 'vue-router';
import { usePostsStore } from '../model/post.store'
import { storeToRefs } from 'pinia';

const props = withDefaults(defineProps<PostProps>(), {
    canOpenPost: true
});
const postsStore = usePostsStore();
const router = useRouter()
const route = useRoute();

const likes = computed(() => postsStore.getLikesById(props.id))
const dislikes = computed(() => postsStore.getDislikesById(props.id))
const isLiked = computed(() => postsStore.getIsLikeById(props.id))
const isDisliked = computed(() => postsStore.getIsDislikeById(props.id))
const likeIcon = computed(() =>
    isLiked.value ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/255d07f3a96cc50a3d0320ee77bcdfe888ceb7de6d7625da5ece89189c6247bd?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/dbac6499cbc423215857579d7a218750c1b14836cf105e3921666b6e114070c0?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66'
)
const dislikeIcon = computed(() =>
    isDisliked.value ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/0ab98e8a50e9c3910aadd3c28f9a17a189f41bab03cd5d4e8ad5697b1c51cf0b?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66' : 'https://cdn.builder.io/api/v1/image/assets/TEMP/12673e70352a51d7fd75cd1e2cbd8a1ae2414306024c35eafcc09abcc06c8de8?placeholderIfAbsent=true&apiKey=d8cff008ac484424ba1c44f5e914fb66'
)

const toggleComments = () => {
  router.push(`${props.id}/comment`);
}

const handleLikeClick = () => {
    postsStore.handleLikeClick(props.id)
}

const handleDislikeClick = () => {
    postsStore.handleDislikeClick(props.id)
}

</script>
