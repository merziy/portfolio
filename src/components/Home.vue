<template>
  <div class="bg-black min-h-screen flex flex-col w-full">
    <Navigation />
    <div class="grid grid-cols-1 md:grid-cols-2">
      <section class="ml-5 md:ml-auto mx-auto max-w-sm md:max-w-sm font-sans text-white">
        <h1 class="md:mx-5 text-6xl md:text-8xl font-hangul">Alexander Mathis</h1>
        <aside class="md:space-y-10 mt-3 md:mx-5 md:text-lg">
          <p class="inline md:block">
            Alexander Mathis is a front-end engineer based in New York City. He
            is currently working with Juicyorange and helping clients create
            e-commerce solutions to suit their clients' needs.
          </p>
          <p class="inline md:block">
            Ready to talk? Select the phone or email icons below and we can work
            together.
          </p>
        </aside>
      </section>
        <canvas ref="canvasRef" id="canvas"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Navigation from "./Nav.vue";
import ThreeObject from "./Dodecahedron/Main";

export default {
  components: {
    Navigation,
  },
  setup() {
    const canvasRef = ref<HTMLCanvasElement | null>(null);
    let threeObject: ThreeObject | null = null;

    onMounted(() => {
      const canvas = canvasRef.value;
      if (canvas) {
        threeObject = new ThreeObject(canvas);
      }
    });

    onUnmounted(() => {
      if (threeObject) {
        threeObject.cleanUp();
        threeObject = null;
      }
    });

    return {
      canvasRef,
    };
  },
};
</script>
