<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2">
      <Navigation />
      <section class="text-center sm:text-start font-sans md:pl-52 flex flex-col">
        <article class="mt-3 md:text-lg md:min-w-full text-blue">
          <h2 class="font-semibold">Here's where you can find me:</h2>
          <a class="mt-10 block underline" href="https://www.instagram.com/abscension/" target="_blank">Instagram</a>
          <button class="underline" @click.prevent="downloadPDF">Resume</button>
          <a class="block underline" href="https://www.linkedin.com/in/azmathis/" target="_blank">LinkedIn</a>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from "./Nav.vue";
import pdf from '../assets/files/Alexander_Mathis___Resume.pdf';

export default {
  components: {
    Navigation,
  },
  methods: {
    downloadPDF() {
      fetch(pdf)
        .then((res) => res.blob())
        .then((blob) => {
          const blobUrl = URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = blobUrl;
          a.download = 'Alexander_Mathis___Resume';
          document.body.appendChild(a);

          a.click();
          document.body.removeChild(a);

          URL.revokeObjectURL(blobUrl);
        })
        .catch((err) => {
          console.log('Error downloading PDF: ', err)
        })
    },
  },
};
</script>
