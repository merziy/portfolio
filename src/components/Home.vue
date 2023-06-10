<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <Navigation />
        <section class="hero mx-auto">
            <h1 class="md:mx-5 ">Alexander Mathis</h1>
            <p>Alexander Mathis is a front end engineer based in New York City. He is currently working with Juicyorange and helping clients create e-commerce solutions to suit their clients needs.</p>
            <p>Ready to talk? Select the phone or email icons below and we can work together.</p>
        </section>
    </div>
</template>

<script setup lang="ts">
import Navigation from "./Nav.vue";
components: {
    Navigation
};
</script>
