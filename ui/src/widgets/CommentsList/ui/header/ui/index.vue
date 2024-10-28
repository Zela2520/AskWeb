<template>
    <header data-layername="header" class="self-start pt-8 text-3xl font-bold tracking-tighter text-gray-950">
      <h2>{{ comments }} comments</h2>
    </header>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  import type { HeaderProps } from './index.types';
  
  const props = defineProps<HeaderProps>();
  </script>