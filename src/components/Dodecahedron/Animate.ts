import * as THREE from "three";

export class Animate {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private dodecahedron: THREE.Mesh;

  constructor(
    scene: THREE.Scene,
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
    dodecahedron: THREE.Mesh
  ) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.dodecahedron = dodecahedron;
  }

  public animate() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.dodecahedron.rotation.x += 0.01;
      this.dodecahedron.rotation.y += 0.01;
      this.camera.updateProjectionMatrix();
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}
