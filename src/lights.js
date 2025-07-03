import * as THREE from 'three';

export function createLights(scene) {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);
    
    // Point light for ambient room lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.4, 100);
    pointLight.position.set(0, 4, 0);
    scene.add(pointLight);
    
    // Warm light from the corner
    const warmLight = new THREE.PointLight(0xffaa44, 0.3, 50);
    warmLight.position.set(-3, 2, -3);
    scene.add(warmLight);
}