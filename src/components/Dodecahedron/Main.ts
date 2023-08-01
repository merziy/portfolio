import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
import { Lights } from "./Lights";
import { Camera } from "./Camera";
import { Renderer } from "./Renderer";
import { Animate } from "./Animate";
import { Dodecahedron } from "./Dodecahedron";
import { Resizer } from "./Resizer";
import { createControls } from "./OrbitControls";

export default class ThreeObject {
  private scene: THREE.Scene;
  private lights: Lights;
  private camera: Camera;
  private renderer: Renderer;
  private dodecahedron: Dodecahedron;
  // @ts-ignore (idk)
  private resizer: Resizer;
  private controls: createControls;

  constructor(private canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.lights = new Lights();
    this.camera = new Camera();
    this.renderer = new Renderer(this.canvas);
    this.dodecahedron = new Dodecahedron();
    this.resizer = new Resizer(
      this.renderer.getRenderer(),
      this.camera.createCamera(canvas),
      this.canvas
    );
    this.controls = new createControls();
    this.controls.createControls(this.camera.createCamera(this.canvas), this.canvas);

    this.init();
  }

  private init() {
    const renderer = this.renderer.getRenderer();
    const light = this.lights.createLights();
    this.scene.add(light);
    const camera = this.camera.createCamera(this.canvas);
    const dodecahedron = this.dodecahedron.dodecahedron;
    this.dodecahedron.addToScene(this.scene);
    const animate = new Animate(this.scene, camera, renderer, dodecahedron);

    if (WebGL.isWebGLAvailable()) {
      animate.animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      this.canvas.appendChild(warning);
    }
  }

  public cleanUp() {
    this.scene.remove(this.dodecahedron.dodecahedron);
  }
}
