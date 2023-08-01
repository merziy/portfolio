import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

export class createControls {
  private controls!: OrbitControls;

  createControls(camera: THREE.Camera, canvas: HTMLCanvasElement) {
     this.controls = new OrbitControls(camera, canvas);
     this.controls.enableDamping = true;
     this.controls.dampingFactor = 0.05;
  }

  public update() {
    this.controls.update();
  }
}
