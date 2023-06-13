<template>
    <div class="bg-pale-kings-blue min-h-screen flex flex-col">
        <Navigation />
        <div class="grid grid-cols-1 md:grid-cols-2">
        <section class="mx-auto font-sans">
            <h1 class="md:mx-5 md:text-7xl text-3xl">Alexander Mathis</h1>
            <aside class="md:mx-5 md:text-lg">
                <p>Alexander Mathis is a front end engineer based in New York City. He is currently working with Juicyorange and helping clients create e-commerce solutions to suit their clients needs.</p>
                <p>Ready to talk? Select the phone or email icons below and we can work together.</p>
            </aside>
        </section>
        <section class="mx-auto">
            <p>test</p>
        </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navigation from "./Nav.vue";
components: {
    Navigation
};
</script>
