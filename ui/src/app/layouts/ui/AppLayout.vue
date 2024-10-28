<script setup lang="ts"></script>

<template>
    <div class="flex h-screen">
        <div class="flex flex-col items-center w-full">
            <main class="flex flex-col items-center px-8 pt-4 pb-16 bg-white max-md:px-5 w-full">
                <slot></slot>
            </main>
        </div>
    </div>
</template>
