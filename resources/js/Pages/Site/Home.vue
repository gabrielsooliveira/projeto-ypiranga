<script setup>
import { Head } from '@inertiajs/vue3';
import LogoImageSrc from '@/assets/img/escudo.png';
</script>

<template>
    <Head title="Home"></Head>
    <div class="text-center vh-25 py-3 bg-primary">
        <img :src="LogoImageSrc" alt="imagem do escudo" class="img-fluid">
    </div>

    <div id="carouselExampleIndicators mt-2" class="carousel slide container mt-4">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://dummyimage.com/721x201" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://dummyimage.com/721x401" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="https://dummyimage.com/721x401" class="d-block w-100" alt="...">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>
