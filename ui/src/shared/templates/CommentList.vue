<template>
    <section data-layername="comments" class="flex flex-col" aria-label="Comments Section">
      <header data-layername="header" class="self-start pt-8 text-3xl font-bold tracking-tighter text-gray-950">
        <h2>2 comments</h2>
      </header>
      <article v-for="(comment, index) in comments" :key="index" :data-layername="'comment'" class="flex flex-wrap gap-2 items-start mt-6 max-md:max-w-full">
        <img :src="comment.authorImage" alt="User avatar" data-layername="image" class="flex shrink-0 rounded-full border-dashed border-[5px] border-gray-950 h-[46px] w-[46px]" />
        <div data-layername="content" class="flex flex-col min-w-[240px] w-[624px] max-md:max-w-full">
          <div data-layername="autorAndComment" class="flex flex-col w-full text-xl tracking-tighter leading-none max-md:max-w-full">
            <div data-layername="autor" class="flex gap-2 items-center self-start font-semibold whitespace-nowrap text-gray-950">
              <h3 data-layername="usernameAndBadge" class="gap-1 self-stretch my-auto">
                {{ comment.author }}
              </h3>
            </div>
            <p v-if="!comment.isDeleted" data-layername="commentText" class="mt-3 text-gray-950 max-md:max-w-full">
              {{ comment.text }}
            </p>
            <div v-else class="flex flex-wrap gap-2 items-start mt-3 w-full max-md:max-w-full">
              <p data-layername="deletedMessage" class="tracking-tighter text-gray-950">
                This comment has been deleted.
              </p>
              <button 
                data-layername="link" 
                class="flex flex-col text-orange-500 whitespace-nowrap w-[57px]"
                @click="handleReturn(comment.id)"
                aria-label="Return deleted comment"
              >
                <span>Return</span>
                <div class="mt-1 w-full min-h-0 border border-solid border-orange-500 border-opacity-30"></div>
              </button>
            </div>
          </div>
          <footer v-if="!comment.isDeleted" data-layername="commentFooter" class="flex flex-wrap gap-5 items-start mt-4 w-full tracking-normal whitespace-nowrap max-md:max-w-full">
            <time data-layername="date" class="text-sm text-black text-opacity-20">
              {{ comment.date }}
            </time>
            <button 
              data-layername="linkCaption" 
              class="flex flex-col w-10 text-sm leading-none text-red-500"
              @click="handleDelete(comment.id)"
              aria-label="Delete comment"
            >
              <span>Delete</span>
              <div class="mt-1 w-full min-h-0 bg-rose-500 border border-rose-500 border-solid"></div>
            </button>
          </footer>
        </div>
      </article>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  
  interface Comment {
    id: number;
    author: string;
    authorImage: string;
    text: string;
    date: string;
    isDeleted: boolean;
  }
  
  export default defineComponent({
    name: 'CommentList',
    data() {
      return {
        comments: [
          {
            id: 1,
            author: 'Stas',
            authorImage: '/path/to/avatar.jpg',
            text: 'His mother had always taught him',
            date: 'Today',
            isDeleted: false
          },
          {
            id: 2,
            author: 'Stas',
            authorImage: '/path/to/avatar.jpg',
            text: '',
            date: 'Today',
            isDeleted: true
          },
          {
            id: 3,
            author: 'Stas',
            authorImage: '/path/to/avatar.jpg',
            text: 'His mother had always taught him not to ever think of himself as better than others. Hed tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
            date: 'Today',
            isDeleted: false
          }
        ] as Comment[]
      }
    },
    methods: {
      handleDelete(commentId: number): void {
        const comment = this.comments.find(c => c.id === commentId)
        if (comment) {
          comment.isDeleted = true
        }
      },
      handleReturn(commentId: number): void {
        const comment = this.comments.find(c => c.id === commentId)
        if (comment) {
          comment.isDeleted = false
        }
      }
    }
  })
  </script>
  
  <style scoped>
  builder-component {
    max-width: none !important;
  }
  </style>