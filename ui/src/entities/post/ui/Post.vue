<template>
    <article class="flex flex-col w-full max-w-[676px] max-md:max-w-full">
        <header class="flex flex-col w-full text-gray-950 max-md:max-w-full">
            <h2 class="text-3xl font-bold tracking-tighter max-md:max-w-full">{{ title }}</h2>
            <p class="mt-4 text-xl tracking-tighter leading-5 max-md:max-w-full">{{ body }}</p>
        </header>
        <footer class="flex flex-wrap gap-2 items-center self-start mt-6 text-sm max-md:max-w-full">
            <div class="flex overflow-hidden gap-px items-center self-stretch my-auto whitespace-nowrap rounded-[30px]">
                <p><strong>Likes:</strong> {{ likes }}</p>
                <p><strong>Trash:</strong> {{ dislikes }}</p>
            </div>
            <div class="flex gap-2 items-end self-stretch my-auto tracking-normal min-w-[240px]">
                <p><strong>Tags:</strong> {{ tags.join(', ') }}</p>
                <p><strong>Views:</strong> {{ views }}</p>
            </div>
        </footer>
    </article>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';
import { PostProps } from './index.types';

const props = withDefaults(defineProps<PostProps>(), {});
</script>
