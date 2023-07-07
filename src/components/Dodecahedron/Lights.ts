import * as THREE from "three";

export class Lights {
  createLights() {
    const light = new THREE.DirectionalLight("white", 8);
    light.position.set(10, 10, 10);
    return light;
  }
}
