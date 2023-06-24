import * as THREE from 'three';
import WebGL from 'three/addons/capabilities/WebGL.js';
import { Lights } from './Lights';
import { Camera } from './Camera';
import { Renderer } from './Renderer';
import { Animate } from './Animate';
import { Dodecahedron } from './Dodecahedron'; 
import { Resizer } from './Resizer';

export default class ThreeObject {
  private scene: THREE.Scene;
  private lights: Lights;
  private camera: Camera;
  private renderer: Renderer;
  private dodecahedron: Dodecahedron;
  // @ts-ignore (idk)
  private resizer: Resizer;

  constructor(private canvas: HTMLCanvasElement) {
    this.scene = new THREE.Scene();
    this.lights = new Lights();
    this.camera = new Camera();
    this.renderer = new Renderer(this.canvas);
    this.dodecahedron = new Dodecahedron();
    this.resizer = new Resizer(
      this.renderer.getRenderer(),
      this.camera.createCamera()
    );
    
    this.init();
  }

  private init() {
    const renderer = this.renderer.getRenderer();
    const light = this.lights.createLights();
    this.scene.add(light);
    const camera = this.camera.createCamera();
    const dodecahedron = this.dodecahedron.dodecahedron;
    this.dodecahedron.addToScene(this.scene);

    const animate = new Animate(
      this.scene,
      camera,
      renderer,
      dodecahedron
    );

    if (WebGL.isWebGLAvailable()) {
      animate.animate();
    } else {
      const warning = WebGL.getWebGLErrorMessage();
      this.canvas.appendChild(warning);
    }
  }

  public cleanUp() {
    // Clean up Three.js objects and event listeners here if necessary
  }
}
