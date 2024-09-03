<script setup>
import MainNavbar from '@/js/Components/MainNavbar.vue';
</script>

<template>
    <main class="bg-light bg-gradient min-vh-100">
        <MainNavbar></MainNavbar>
        <div>
            <slot></slot>
        </div>
    </main>
</template>
