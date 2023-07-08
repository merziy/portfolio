import * as THREE from "three";

export class Dodecahedron {
  private geometry: THREE.BufferGeometry;
  private material: THREE.Material;
  public dodecahedron: THREE.Mesh;

  constructor() {
    this.geometry = new THREE.DodecahedronGeometry(1);
    this.material = new THREE.MeshStandardMaterial({ color: "purple" });
    this.dodecahedron = new THREE.Mesh(this.geometry, this.material);
    this.dodecahedron.scale.set(3, 3, 3);
  }

  public addToScene(scene: THREE.Scene) {
    scene.add(this.dodecahedron);
  }
}
