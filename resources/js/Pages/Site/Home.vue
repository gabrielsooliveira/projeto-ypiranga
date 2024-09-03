<script setup>
import { Head } from '@inertiajs/vue3';
import LogoImageSrc from '@/assets/img/escudo.png';
</script>

<template>
    <Head title="Home"></Head>
    <div class="text-center">
        <img :src="LogoImageSrc" alt="imagem do escudo" class="img-fluid">
    </div>
</template>
