<template>
  <nav class="">
    <ul class="flex justify-center md:justify-end border-pyrite-yellow border-b-2">
      <li class="-mb-px mr-1">
        <router-link
          to="/"
          class="inline-block py-2 px-4 text-white text-2xl md:text-4xl font-hangul"
          >HOME</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/portfolio"
          class="inline-block py-2 px-4 text-white text-2xl md:text-4xl font-hangul"
          href="#"
          >PORTFOLIO</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/contact"
          class="inline-block py-2 px-4 text-white text-2xl md:text-4xl font-hangul"
          href="#"
          >CONTACT</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/bio"
          class="inline-block py-2 px-4 text-white text-2xl md:text-4xl font-hangul"
          href="#"
          >BIO</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Navigation",
};
</script>
