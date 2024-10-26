<script setup lang="ts">
import AOS from 'aos'
import { Routing } from '../pages/routing'
import { AppLayout } from './layouts'
import { onMounted } from 'vue'
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>

<template>
  <AppLayout>
    <Routing />
  </AppLayout>
</template>
<style>
@import './index.scss';
</style>