<template>
  <div class="min-h-screen flex flex-col">
    <div class="flex-grow grid">
      <Navigation />
      <section class="text-center sm:text-start font-sans md:pl-52">
        <article class="md:space-y-10 mt-3 md:text-lg md:min-w-full text-blue">
          <div class="flex flex-col md:flex-row">
            <div class="p-5">
              <h2 class="font-semibold">UX/UI</h2>
              <p>
                Modern research in web design shows proper design principles are
                necessary when presenting user information so they don't feel
                overwhelmed, as most human beings are day-to-day presented with
                a constant influx of data. This, in modern web development and
                design, has led to the flourishing of fields dedicated to the
                psychology of user experience and the construction of
                interfaces, or UX and UI. In the spirit of user-centric design
                thinking, it becomes evident that understanding the intricacies
                of these fields is not merely advantageous but rather an
                imperative in today's programming landscape.
              </p>
            </div>
            <img
              class="p-5"
              width="750"
              src="../assets/img/portfolio-graphic-one.png"
              alt=""
            />
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="p-5">
              <h2 class="font-semibold">
                Why does a Tech Stack matter? What is it?
              </h2>
              <p>
                A tech stack, broadly defined, is the combination of
                technologies that build and run an application or project. One
                might say the technological market for building a tech stack is
                oversaturated. There's a million JavaScript frameworks and ways
                to build a backend (if you should do this at all, CMSs make
                low-code the norm - for better and for worse.) Part of what
                makes a human successful as a programmer is a desire to learn
                that doesn't quench after exhaustion. What you do now will at
                some point be outdated; part of the immutable nature of
                technological development is obsolescence. The tech stack is an
                ever-morphing machine that functions in shifts and starts as
                technology progresses, and it's the web engineer's
                responsibility to see this dynamic assemblage's successful
                becoming.
              </p>
            </div>
            <img
              class="p-5"
              width="750"
              src="../assets/img/portfolio-graphic-two.png"
              alt=""
            />
          </div>
          <div class="flex flex-col md:flex-row">
            <div class="p-5">
              <h2 class="font-semibold">On the Soul</h2>
              <p>
                In the metaphorical realm of web development, the "soul" can be
                attributed to the backend, the hidden machinery that powers the
                digital world. While this analogy may seem abstract, it holds a
                deeper significance in understanding the essence of web
                development. Much like the soul in philosophy, the backend is
                the invisible force that gives life to the website. It consists
                of databases, servers, and intricate algorithms that process
                data and deliver it to the frontend—the "body" of the web
                experience. The soul of web development extends beyond the code.
                It embodies the principles of security, scalability, and
                efficiency, ensuring that the website functions reliably and
                securely, even under the pressure of high traffic. In essence,
                the soul of web development is the silent guardian that upholds
                the integrity and functionality of the digital world. It's a
                testament to the intricate artistry that underpins every
                successful web project, reminding us that even in the virtual
                realm, the concept of a "soul" holds profound meaning.
              </p>
            </div>
            <img
              class="p-5"
              width="750"
              src="../assets/img/portfolio-graphic-three.png"
              alt=""
            />
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
