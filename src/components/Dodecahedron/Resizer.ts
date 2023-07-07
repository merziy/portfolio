import * as THREE from "three";

export class Resizer {
  constructor(
    private renderer: THREE.WebGLRenderer,
    private camera: THREE.PerspectiveCamera,
    private canvas: HTMLCanvasElement
  ) {
    this.handleWindowResize();
    window.addEventListener("resize", this.handleWindowResize.bind(this));
  }

  private handleWindowResize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    this.camera.aspect = width / height;
    this.renderer.setSize(width, height);
    this.camera.updateProjectionMatrix();
  }
}
