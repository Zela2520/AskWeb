<script setup lang="ts">
import { CommentsList } from '@/widgets/CommentsList'
</script>

<template>
  <section data-layername="comments" class="flex flex-col w-full max-w-4xl mx-auto p-4" aria-label="Comments Section">
    <CommentsList />
  </section>
</template>
