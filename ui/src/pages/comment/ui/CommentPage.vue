<script setup lang="ts">
// import CommentList  from '../../../shared/templates/CommentList.vue'
import { CommentsList } from '@/widgets/CommentsList'
</script>
<template>
  <section data-layername="comments" class="flex flex-col" aria-label="Comments Section">
    <CommentsList />
  </section>
  <!-- <CommentList /> -->
</template>
