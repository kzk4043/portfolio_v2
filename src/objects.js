import * as THREE from 'three';

export function createInteractiveObjects(scene) {
    const interactiveObjects = [];
    
    // Sofa with person
    const sofaGroup = new THREE.Group();
    
    // Sofa base
    const sofaGeometry = new THREE.BoxGeometry(2, 0.5, 1);
    const sofaMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const sofa = new THREE.Mesh(sofaGeometry, sofaMaterial);
    sofa.position.set(0, 0.25, 0);
    sofa.castShadow = true;
    sofaGroup.add(sofa);
    
    // Sofa back
    const sofaBackGeometry = new THREE.BoxGeometry(2, 1, 0.2);
    const sofaBack = new THREE.Mesh(sofaBackGeometry, sofaMaterial);
    sofaBack.position.set(0, 0.75, -0.4);
    sofaBack.castShadow = true;
    sofaGroup.add(sofaBack);
    
    // Person (simple representation)
    const personGeometry = new THREE.CapsuleGeometry(0.2, 0.8, 4, 8);
    const personMaterial = new THREE.MeshLambertMaterial({ color: 0x3366CC });
    const person = new THREE.Mesh(personGeometry, personMaterial);
    person.position.set(0, 1.2, 0);
    person.castShadow = true;
    sofaGroup.add(person);
    
    // Head
    const headGeometry = new THREE.SphereGeometry(0.15, 8, 8);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0xFFDBB3 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0, 1.7, 0);
    head.castShadow = true;
    sofaGroup.add(head);
    
    sofaGroup.position.set(0, 0, -2);
    sofaGroup.userData = { modal: 'aboutModal' };
    scene.add(sofaGroup);
    interactiveObjects.push(sofaGroup);
    
    // Bookshelf
    const bookshelfGroup = new THREE.Group();
    
    // Bookshelf frame
    const shelfGeometry = new THREE.BoxGeometry(1.5, 3, 0.3);
    const shelfMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const bookshelf = new THREE.Mesh(shelfGeometry, shelfMaterial);
    bookshelf.position.set(0, 1.5, 0);
    bookshelf.castShadow = true;
    bookshelfGroup.add(bookshelf);
    
    // Books
    const bookColors = [0xFF6B6B, 0x4ECDC4, 0x45B7D1, 0x96CEB4, 0xFECA57];
    for (let i = 0; i < 15; i++) {
        const bookGeometry = new THREE.BoxGeometry(0.08, 0.3, 0.2);
        const bookMaterial = new THREE.MeshLambertMaterial({ 
            color: bookColors[i % bookColors.length] 
        });
        const book = new THREE.Mesh(bookGeometry, bookMaterial);
        book.position.set(
            -0.6 + (i % 5) * 0.15 + Math.random() * 0.02,
            0.8 + Math.floor(i / 5) * 0.4,
            0.05
        );
        book.rotation.y = (Math.random() - 0.5) * 0.2;
        book.castShadow = true;
        bookshelfGroup.add(book);
    }
    
    bookshelfGroup.position.set(-3, 0, -4);
    bookshelfGroup.userData = { modal: 'skillsModal' };
    scene.add(bookshelfGroup);
    interactiveObjects.push(bookshelfGroup);
    
    // PC Setup
    const pcGroup = new THREE.Group();
    
    // Desk
    const deskGeometry = new THREE.BoxGeometry(2, 0.1, 1);
    const deskMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 });
    const desk = new THREE.Mesh(deskGeometry, deskMaterial);
    desk.position.set(0, 0.7, 0);
    desk.castShadow = true;
    pcGroup.add(desk);
    
    // Monitor
    const monitorGeometry = new THREE.BoxGeometry(0.8, 0.5, 0.05);
    const monitorMaterial = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const monitor = new THREE.Mesh(monitorGeometry, monitorMaterial);
    monitor.position.set(0, 1.1, -0.3);
    monitor.castShadow = true;
    pcGroup.add(monitor);
    
    // Screen
    const screenGeometry = new THREE.PlaneGeometry(0.7, 0.4);
    const screenMaterial = new THREE.MeshLambertMaterial({ color: 0x0066CC });
    const screen = new THREE.Mesh(screenGeometry, screenMaterial);
    screen.position.set(0, 1.1, -0.27);
    pcGroup.add(screen);
    
    // Keyboard
    const keyboardGeometry = new THREE.BoxGeometry(0.6, 0.02, 0.2);
    const keyboardMaterial = new THREE.MeshLambertMaterial({ color: 0x333333 });
    const keyboard = new THREE.Mesh(keyboardGeometry, keyboardMaterial);
    keyboard.position.set(0, 0.76, 0.1);
    keyboard.castShadow = true;
    pcGroup.add(keyboard);
    
    pcGroup.position.set(3, 0, -2);
    pcGroup.userData = { modal: 'worksModal' };
    scene.add(pcGroup);
    interactiveObjects.push(pcGroup);
    
    // Coffee Table with Smartphone
    const tableGroup = new THREE.Group();
    
    // Table
    const tableGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.05);
    const tableMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const table = new THREE.Mesh(tableGeometry, tableMaterial);
    table.position.set(0, 0.4, 0);
    table.castShadow = true;
    tableGroup.add(table);
    
    // Smartphone
    const phoneGeometry = new THREE.BoxGeometry(0.08, 0.15, 0.01);
    const phoneMaterial = new THREE.MeshLambertMaterial({ color: 0x1a1a1a });
    const phone = new THREE.Mesh(phoneGeometry, phoneMaterial);
    phone.position.set(0.2, 0.43, 0.1);
    phone.castShadow = true;
    phone.userData = { rotate: true };
    tableGroup.add(phone);
    
    // Phone screen
    const phoneScreenGeometry = new THREE.PlaneGeometry(0.06, 0.12);
    const phoneScreenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    const phoneScreen = new THREE.Mesh(phoneScreenGeometry, phoneScreenMaterial);
    phoneScreen.position.set(0.2, 0.435, 0.105);
    phoneScreen.rotation.x = -Math.PI / 2;
    tableGroup.add(phoneScreen);
    
    tableGroup.position.set(0, 0, 1);
    tableGroup.userData = { modal: 'contactModal' };
    scene.add(tableGroup);
    interactiveObjects.push(tableGroup);
    
    return interactiveObjects;
}