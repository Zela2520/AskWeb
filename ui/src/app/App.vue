<script setup lang="ts">
import AOS from 'aos'
import { Routing } from '../pages/routing'
import { AppLayout } from './layouts'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Header } from '@/widgets/Header';

onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>

<template>
  <AppLayout>
    <Header />
    <Routing />
  </AppLayout>
</template>
<style>
@import './index.scss';
</style>