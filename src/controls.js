import * as THREE from 'three';

export function initializeControls(camera, renderer) {
    const controls = {
        isMouseDown: false,
        previousMousePosition: { x: 0, y: 0 },
        rotation: { x: 0, y: 0 },
        distance: 5,
        target: new THREE.Vector3(0, 1, 0)
    };
    
    function onMouseDown(event) {
        controls.isMouseDown = true;
        controls.previousMousePosition.x = event.clientX;
        controls.previousMousePosition.y = event.clientY;
    }
    
    function onMouseUp() {
        controls.isMouseDown = false;
    }
    
    function onMouseMove(event) {
        if (!controls.isMouseDown) return;
        
        const deltaX = event.clientX - controls.previousMousePosition.x;
        const deltaY = event.clientY - controls.previousMousePosition.y;
        
        controls.rotation.y += deltaX * 0.01;
        controls.rotation.x += deltaY * 0.01;
        
        controls.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, controls.rotation.x));
        
        controls.previousMousePosition.x = event.clientX;
        controls.previousMousePosition.y = event.clientY;
    }
    
    function onWheel(event) {
        controls.distance += event.deltaY * 0.01;
        controls.distance = Math.max(2, Math.min(15, controls.distance));
    }
    
    function update() {
        const x = controls.target.x + controls.distance * Math.sin(controls.rotation.y) * Math.cos(controls.rotation.x);
        const y = controls.target.y + controls.distance * Math.sin(controls.rotation.x);
        const z = controls.target.z + controls.distance * Math.cos(controls.rotation.y) * Math.cos(controls.rotation.x);
        
        camera.position.set(x, y, z);
        camera.lookAt(controls.target);
    }
    
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('wheel', onWheel);
    
    return { update };
}