import * as THREE from 'three';

export class Renderer {
    private renderer: THREE.WebGLRenderer;

    constructor(private canvas: HTMLCanvasElement) {
        this.renderer = new THREE.WebGL1Renderer({ canvas: this.canvas, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        window.addEventListener('resize', this.onWindowResize.bind(this));
    }

    private onWindowResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.renderer.setSize(width, height);
    }

    public getRenderer(): THREE.WebGLRenderer {
        return this.renderer;
    }
}