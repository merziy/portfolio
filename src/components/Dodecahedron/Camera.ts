import * as THREE from "three";

export class Camera {
  createCamera(canvas: HTMLCanvasElement) {
    const camera = new THREE.PerspectiveCamera(
      75,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    return camera;
  }
}
