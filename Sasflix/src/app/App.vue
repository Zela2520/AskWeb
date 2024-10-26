<script setup lang="ts">
import AOS from 'aos'
import { Routing } from '../pages/routing'
import { onMounted } from 'vue'
onMounted(() => {
  AOS.init({
    easing: 'ease-in-out',
    offset: 100
  })
})
</script>

<template>
    <Routing />
</template>
<style>
@import './index.scss';
</style>