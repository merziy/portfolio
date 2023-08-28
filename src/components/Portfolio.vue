<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow grid">
      <Navigation />
      <section class="text-center sm:text-start font-sans md:pl-52">
        <article class="md:space-y-10 mt-3 md:text-lg md:min-w-full text-blue">
          <div class="flex flex-col">
            <div class="p-5">
              <h2 class="font-semibold">Web Crawler (2023)</h2>
              <hr />
              <p class="inline">github - </p>
              <a
                class="underline"
                href="https://github.com/merziy/tangerine"
                target="_blank"
                >/merziy/tangerine</a
              >
              <p>
                Developed a web scraper program in Python3 with the Scrapy
                library and integrated a Google Lighthouse wrapper for efficient
                assessment of performance and accessibility issues across all
                pages of a website, outputting into a .csv file to share with
                team and clients.
              </p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="p-5">
              <h2 class="font-semibold">Brandon Strouse (2023)</h2>
              <hr />
              <p class="inline">live link - </p>
              <a
                class="underline"
                href="https://brandonstrouse.com/"
                target="_blank"
                >brandonstrouse.com</a
              >
              <p>
                I enhanced Brandon Strouse's website by making it fully
                responsive, ensuring optimal viewing across all devices.
                Additionally, I integrated JavaScript-based sliders and
                navigation improvements to enhance user engagement and
                interactivity.
              </p>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="p-5">
              <h2 class="font-semibold">Midnight Confessions (2020)</h2>
              <hr />
              <p class="inline">live link - </p>
              <a
                class="underline"
                href="https://midnightcc.org/"
                target="_blank"
                >midnightcc.org</a
              >
              <p>
                Constructed a dynamic and responsive WordPress business website
                from scratch, enhancing its functionality with essential
                features including a blog, a contact form, a slider, and an
                interactive homepage. This project was implemented using a
                robust technology stack consisting of Docker containers, PHP,
                and jQuery. A portion of the project was hosted on a LAMP
                (Linux, Apache, MySQL, PHP) server.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Navigation from "./Nav.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
