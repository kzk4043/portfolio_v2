import * as THREE from 'three';
import { createRoom } from './room.js';
import { createLights } from './lights.js';
import { createInteractiveObjects } from './objects.js';
import { initializeModals } from './modals.js';
import { initializeControls } from './controls.js';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ 
    canvas: document.getElementById('canvas'),
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x1a1a1a);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Add components
createRoom(scene);
createLights(scene);
const interactiveObjects = createInteractiveObjects(scene);

// Initialize modals and controls
initializeModals();
const controls = initializeControls(camera, renderer);

// Position camera
camera.position.set(0, 2, 5);
camera.lookAt(0, 1, 0);

// Raycaster for mouse interaction
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Mouse click handler
function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(interactiveObjects);
    
    if (intersects.length > 0) {
        const object = intersects[0].object;
        const modalId = object.userData.modal;
        
        if (modalId) {
            document.getElementById(modalId).style.display = 'flex';
        }
    }
}

// Event listeners
window.addEventListener('click', onMouseClick);
window.addEventListener('resize', onWindowResize);

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate interactive objects slightly
    interactiveObjects.forEach(obj => {
        if (obj.userData.rotate) {
            obj.rotation.y += 0.002;
        }
    });
    
    controls.update();
    renderer.render(scene, camera);
}

// Hide loading screen and start animation
document.getElementById('loading').style.display = 'none';
animate();