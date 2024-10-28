<template>
  <button :class="buttonClass" @click="onClick" aria-label="button">
      <span class="flex gap-1 items-center">
          <img :src="props.icon" :alt="props.iconAlt" class="object-contain w-[13px] aspect-[1.18]" />
          <span>{{ props.label }}</span>
      </span>
      <span v-if="props.value !== undefined" class="self-stretch my-auto tracking-tighter text-right">
          {{ props.value }}
      </span>
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import type { ButtonProps } from './index.types';

const props = defineProps<ButtonProps>();

const buttonClass = computed(() => {
  return [
      'flex gap-1.5 items-center self-stretch py-2 pr-2 pl-3 my-auto',
      props.isActive ? 'bg-red-500 text-white' : 'bg-black bg-opacity-0 text-black'
  ];
});
</script>

<style scoped>
</style>