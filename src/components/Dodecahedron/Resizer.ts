import * as THREE from 'three';

export class Resizer {
    constructor(private renderer: THREE.WebGLRenderer, private camera: THREE.PerspectiveCamera) {
        this.handleWindowResize();
        window.addEventListener('resize', this.handleWindowResize.bind(this));
    }

    private handleWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }
}