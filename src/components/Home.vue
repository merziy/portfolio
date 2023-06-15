<template>
    <div class="bg-pale-kings-blue min-h-screen flex flex-col">
        <Navigation />
        <div class="grid grid-cols-1 md:grid-cols-2">
            <section class="ml-5 md:ml-auto mx-auto max-w-sm md:max-w-sm font-sans">
                <h1 class="md:mx-5 text-6xl md:text-8xl">Alexander Mathis</h1>
                <aside class="md:space-y-10 mt-3 md:mx-5 md:text-lg">
                    <p class="inline md:block">Alexander Mathis is a front end engineer based in New York City. He is currently working with Juicyorange and helping clients create e-commerce solutions to suit their clients needs. </p>
                    <p class="inline md:block">Ready to talk? Select the phone or email icons below and we can work together.</p>
                </aside>
            </section>
            <section class="mx-auto">
                <Dodecahedron />
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import Navigation from "./Nav.vue";
import Dodecahedron from './Dodecahedron.vue';
{
  Navigation
  Dodecahedron
};
</script>
