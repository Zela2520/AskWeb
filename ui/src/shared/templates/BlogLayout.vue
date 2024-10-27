<template>
    <main class="flex overflow-hidden flex-col items-center px-8 pt-4 pb-16 bg-white max-md:px-5">
      <header class="gap-10 pb-12 text-4xl font-bold leading-none text-orange-500 whitespace-nowrap">
        <h1>ikakprosto.ru</h1>
      </header>
      <section class="flex flex-col mt-2.5 max-w-full w-[676px]">
        <BlogPost
          v-for="post in posts"
          :key="post.id"
          :title="post.title"
          :content="post.content"
          :initial-likes="post.likes"
          :initial-dislikes="post.dislikes"
        />
      </section>
    </main>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue'
  import BlogPost from './BlogPost.vue'
  
  interface Post {
    id: number
    title: string
    content: string
    likes: number
    dislikes: number
  }
  
  export default defineComponent({
    name: 'BlogLayout',
    components: {
      BlogPost
    },
    setup() {
      const posts: Post[] = [
        {
          id: 1,
          title: 'His mother had always taught him',
          content: 'His mother had always taught him not to ever think of himself as better than others. He\'d tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.',
          likes: 192,
          dislikes: 25
        },
      ]
  
      return {
        posts
      }
    }
  })
  </script>