<script setup lang="ts">
import type { CommentProps } from './index.types'
import { useCommentsStore } from '../model/comment.store'
import { computed } from 'vue'

const props = withDefaults(defineProps<CommentProps>(), {});

const commentsStore = useCommentsStore();
const isDeleted = computed(() => commentsStore.getIsDeleteById(props.id))

const handleDeleteClick = () => {
    commentsStore.handleDeleteClick(props.id);
}

const handleReturnClick = () => {
    commentsStore.handleReturnClick(props.id);
}
</script>

<template>
    <article :id="String(id)" class="flex gap-2 items-start mt-6 max-md:max-w-full">
        <img src="/src/shared/images/myAva.png" alt="User avatar" data-layername="image" class="flex shrink-0 rounded-full border-dashed border-[5px] border-gray-950 h-[46px] w-[46px]" />
        <div data-layername="content" class="flex flex-col min-w-[240px] w-[624px] max-md:max-w-full">
          <div data-layername="autorAndComment" class="flex flex-col w-full text-xl tracking-tighter leading-none max-md:max-w-full">
            <div data-layername="autor" class="flex gap-2 items-center self-start font-semibold whitespace-nowrap text-gray-950">
              <h3 data-layername="usernameAndBadge" class="gap-1 self-stretch my-auto">
                {{ author }}
              </h3>
            </div>
            <p v-if="!isDeleted" data-layername="commentText" class="mt-3 text-gray-950 max-md:max-w-full font-normal">
              {{ text }}
            </p>
            <div v-else class="flex flex-wrap gap-2 items-start mt-3 w-full max-md:max-w-full">
              <p data-layername="deletedMessage" class="tracking-tighter text-gray-950">
                This comment has been deleted.
              </p>
              <button 
                data-layername="link" 
                class="flex flex-col text-orange-500 whitespace-nowrap w-[57px]"
                @click="handleReturnClick"
                aria-label="Return deleted comment"
              >
                <span>Return</span>
                <div class="mt-1 w-full min-h-0 border border-solid border-orange-500 border-opacity-30"></div>
              </button>
            </div>
          </div>
          <footer v-if="!isDeleted" data-layername="commentFooter" class="flex flex-wrap gap-5 items-start mt-4 w-full tracking-normal whitespace-nowrap max-md:max-w-full">
            <time data-layername="date" class="text-sm text-black text-opacity-20">
              Today
            </time>
            <button 
              data-layername="linkCaption" 
              class="flex flex-col w-10 text-sm leading-none text-red-500"
              @click="handleDeleteClick"
              aria-label="Delete comment"
            >
              <span>Delete</span>
              <div class="mt-1 w-full min-h-0 bg-rose-500 border border-rose-500 border-solid"></div>
            </button>
          </footer>
        </div>
      </article>
</template>

<style scoped></style>