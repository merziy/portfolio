import * as THREE from "three";
import { createControls } from "./OrbitControls";

export class Animate {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private dodecahedron: THREE.Mesh;
  private controls: createControls;

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
    this.controls = new createControls();
    this.controls.createControls(camera, renderer.domElement);
  }

  public animate() {
    const animate = () => {
      requestAnimationFrame(animate);
      this.dodecahedron.rotation.x += 0.005;
      this.dodecahedron.rotation.y += 0.005;
      this.controls.update()
      this.camera.updateProjectionMatrix();
      this.renderer.render(this.scene, this.camera);
    };

    animate();
  }
}
