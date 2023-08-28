<template>
  <div class="fixed right-3 top-3 z-[1] md:hidden">
    <button @click.prevent="toggleMenu" aria-label="Toggle Menu">
      <img src="../assets/img/bluechip.png" alt="" aria-hidden="true" />
    </button>
  </div>
  <!-- Desktop Menu -->
  <nav class="fixed hidden md:block w-52">
    <div class="text-blue h-screen px-4">
      <h1 class="text-2xl font-bold underline py-2">Alexander Mathis</h1>
      <p class="py-2 font-semibold">
        Web Engineer with an interest in web design.
      </p>
      <p class="py-2 font-semibold">
        Passionate about the philosophy behind 'the internet of things' and
        building a better world to surf on
      </p>
      <p class="py-2 font-semibold">Web accessibility and creativity.</p>
      <ul class="flex flex-col pt-10">
        <li class="">
          <router-link
            to="/"
            class="inline-block text-blue text-2xl font-semibold font-sans"
            >HOME</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/portfolio"
            class="inline-block text-blue text-2xl font-semibold font-sans"
            href="#"
            >PORTFOLIO</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/contact"
            class="inline-block text-blue text-2xl font-semibold font-sans"
            href="#"
            >CONTACT</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/bio"
            class="inline-block text-blue text-2xl font-semibold font-sans"
            href="#"
            >BIO</router-link
          >
        </li>
      </ul>
      <a href="mailto:alexzandermathis@gmail.com" target="_blank">
        <img
          class="pt-10"
          src="../assets/img/bluechip.png"
          alt=""
          aria-hidden="true"
        />
        <span class="sr-only">Email Alexander</span>
      </a>
    </div>
  </nav>
  <!-- Mobile Menu -->
  <nav id="mobileMenu" class="hidden fixed top-0 bg-white">
    <div class="text-blue h-screen px-4">
      <h1 class="text-2xl font-bold underline py-2">Alexander Mathis</h1>
      <p class="py-2 font-semibold">
        Web Engineer with an interest in web design.
      </p>
      <p class="py-2 font-semibold">
        Passionate about the philosophy behind 'the internet of things' and
        building a better world to surf on
      </p>
      <p class="py-2 font-semibold">Web accessibility and creativity.</p>
      <ul class="flex flex-col">
        <li class="">
          <router-link to="/" class="inline-block text-blue text-2xl font-sans"
            >HOME</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/portfolio"
            class="inline-block text-blue text-2xl font-sans"
            href="#"
            >PORTFOLIO</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/contact"
            class="inline-block text-blue text-2xl font-sans"
            href="#"
            >CONTACT</router-link
          >
        </li>
        <li class="">
          <router-link
            to="/bio"
            class="inline-block text-blue text-2xl font-sans"
            href="#"
            >BIO</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navigation",
  methods: {
    toggleMenu() {
      const mobileMenu = document.querySelector("#mobileMenu");
      mobileMenu?.classList.toggle("hidden");
    },
  },
};
</script>
