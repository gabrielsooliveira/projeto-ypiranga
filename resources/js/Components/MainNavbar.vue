<script setup>
import { Link, usePage, router } from '@inertiajs/vue3';
import { route } from 'ziggy';
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import brandImageSrc from '@/assets/img/escudo.png';
</script>

<template>
    <header>
        <div class="bg-secondary text-white px-5 text-end">
            <ul class="nav justify-content-end gap-3 fs-7">
                <li>
                    <a class="link-light text-decoration-none" href="#"><font-awesome-icon :icon="['fab', 'whatsapp']" /> (XX) XXXXX-XXXX</a>
                </li>
                <li>
                    <Link class="link-light text-decoration-none" href="route('faq')"><font-awesome-icon :icon="['fas', 'circle-exclamation']" /> FAQ</Link>
                </li>
            </ul>
        </div>
        <nav class="navbar navbar-expand-lg navbar-dark" aria-label="Offcanvas navbar large">
            <div class="container-fluid">
                <Link href="route('home')">
                    <img :src="brandImageSrc" alt="Escudo do Ypiranga" class="img-fluid" width="57">
                </Link>
                <button class="nav-link link-secondary d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <font-awesome-icon :icon="['fas', 'bars']" size="lg"/>
                </button>
                <div class="offcanvas offcanvas-start text-bg-secondary" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div class="offcanvas-header border-bottom">
                        <h5 class="offcanvas-title text-primary" id="offcanvasNavbarLabel">Ypiranga</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 fw-bold">
                            <li class="nav-item">
                                <Link class="nav-link link-secondary" aria-current="page" href="#" :class="{ 'active': $page.url === '/' }">Inicio</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
