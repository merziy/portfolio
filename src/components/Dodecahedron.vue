<!--
  A great help in writing this component, besides the offical Three docs,
  was the book at https://discoverthreejs.com/. Thanks for explaining 
  PBR (Physically Based Rendering [and Lighting]) :) 
-->
<template>
    <canvas id="canvas" ref="canvas"></canvas>
</template>
<script lang="ts">
import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';

export default {
  mounted() {
    this.initThree();
  },
  beforeUnmount() {
    this.cleanUpThree();
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas as HTMLCanvasElement, alpha: true });
      // renderer.useLegacyLights = true; // Maybe I dont need this?
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio); // for HiDPI displays
      
      function createLights() {
        const light = new THREE.DirectionalLight('white', 8);
        light.position.set( 10,10,10 );
        return light;
      }

      const geometry = new THREE.DodecahedronGeometry(1);
      const material = new THREE.MeshStandardMaterial({ color: 'purple' });
      const dodecahedron = new THREE.Mesh(geometry, material);
      const light = createLights();
      scene.add(dodecahedron, light);

      camera.position.z = 5;
      
      const animate = () => {
        requestAnimationFrame(animate);
        dodecahedron.rotation.x += 0.01;
        dodecahedron.rotation.y += 0.01;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      if ( WebGL.isWebGLAvailable() ) {
        animate();
      } else {
        const warning = WebGL.getWebGLErrorMessage();
        document.querySelector('#canvas')?.appendChild( warning );
      }
    },
    cleanUpThree() {
      // Clean up Three.js objects and event listeners here if necessary
    },
  },
};
</script>