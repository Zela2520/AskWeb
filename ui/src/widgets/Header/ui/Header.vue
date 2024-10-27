<template>
    <header class="gap-10 pb-12 text-4xl font-bold leading-none text-orange-500 whitespace-nowrap">
        <RouterLink to="/" class="cursor-pointer hover:text-orange-700">
            <h1>ikakprosto.ru</h1>
        </RouterLink>
    </header>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router';

export default {
    name: 'Header',
    components: {
        RouterLink,
    },
};
</script>