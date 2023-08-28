<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow grid grid-cols-1 md:grid-cols-2">
      <Navigation />
      <section class="text-center sm:text-start font-sans md:pl-52">
        <article class="md:space-y-10 mt-3 md:text-lg md:min-w-full text-blue">
          <div class="flex flex-col">
            <h2 class="font-semibold">Who am I?</h2>
            <p class="py-3">My name is Alexander Mathis, and I am currently <span>{{ age }}</span> years old. I call New York City home, where I live with my wife and our beloved dog.</p>
            <p class="py-3">I was born in South Carolina but spent my formative years moving around various states in the beautiful Appalachian region. I still value the simplicity in living and profound beauty of nature, particularly in that corner of the United States.</p>
            <p class="py-3">Today, I enjoy reading about philosophy, traveling, cities, exploring, and being around friends. My love for learning has been a constant companion throughout my life and carries over to my passion for my career in web development.</p>
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
  computed: {
    age() {
      const birthDate = new Date("1995-10-28");
      const currentDate = new Date();
      const ageInMilliseconds = currentDate.getTime() - birthDate.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
      return Math.floor(ageInYears);
    },
  },
};
</script>
