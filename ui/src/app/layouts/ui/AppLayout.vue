<script setup lang="ts"></script>
<template>
    <div class="flex h-screen">
        <div class="min-w-full flex flex-col items-center">
            <main class="flex flex-col items-center px-8 pt-4 pb-16 bg-white max-md:px-5">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<style scoped></style>