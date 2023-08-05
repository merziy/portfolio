import * as THREE from "three";

export class Renderer {
  private renderer: THREE.WebGLRenderer;

  constructor(private canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,
    });
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  private onWindowResize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;

    this.renderer.setSize(width, height);
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer;
  }
}
