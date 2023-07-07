<template>
  <nav class="">
    <ul class="flex justify-center md:justify-end border-b border-black">
      <li class="-mb-px mr-1">
        <router-link
          to="/"
          class="inline-block py-2 px-4 text-black font-semibold"
          >HOME</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/portfolio"
          class="inline-block py-2 px-4 text-black font-semibold"
          href="#"
          >PORTFOLIO</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/contact"
          class="inline-block py-2 px-4 text-black font-semibold"
          href="#"
          >CONTACT</router-link
        >
      </li>
      <li class="-mb-px mr-1">
        <router-link
          to="/bio"
          class="inline-block py-2 px-4 text-black font-semibold"
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
