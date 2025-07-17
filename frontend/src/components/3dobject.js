import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"

export const box =({containerRef}) =>{
    //Determine the canvas or the 3d area
    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    //1. Create a scene
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#f0f0f0')

    //2. Setup a camera
    const camera = new THREE.PerspectiveCamera(75, width/height, 0.1, 1000) //Field of view, aspect ratio, near and far clipping
    camera.position.z = 5

    //3. Add light
    const light = new THREE.SpotLight(0x006769, 100 )
    light.position.set(1,1,1)
    
    //4. Create 3d object
    const boxGeometry = new THREE.BoxGeometry(2,0.1,2) //Size x,y,z
    const boxMaterial = new THREE.MeshLambertMaterial({color: 'rgba(23, 76, 189, 1)', emissive:'rgba(23,76,190,1)'})
    const box = new THREE.Mesh(boxGeometry, boxMaterial)
    
    //5. Add object to the scene
    scene.add(box)
    scene.add(light)

    //6. Create a renderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    //6.5 Add Control
    const controls = new OrbitControls(camera, container)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.enableZoom = true
    controls.enablePan = true
    
    //7. Create animation
    function animate(){
        requestAnimationFrame(animate)
        
        box.rotation.x += 0.002
        box.rotation.y += 0.002
        
        controls.update()
        renderer.render(scene, camera)

    }

    return animate()
}