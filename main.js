import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import fall from "./physics.js";
import { hitground } from "./physics.js";
import userinput from "./userinput";
const loader = new THREE.TextureLoader();

/**
 * Base
 */
// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// GameState
let gameState = {
  player: {
    position: {
      x: 0,
      y: 0,
      z: 0,
    },
    rotation: {},
  }

}

/**
 * Objects
 */
// golfball
const golfball= new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 100, 100),
    new THREE.MeshBasicMaterial({
      map: loader.load('./resources/images/golfballtexture.png'), side: THREE.DoubleSide
     })
    );
golfball.position.y = 7;
scene.add(golfball);

//plane
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(5, 5),
    new THREE.MeshBasicMaterial({ 
      map: loader.load('./resources/images/wall.png'), side: THREE.DoubleSide 
    })
    );
plane.rotateX(Math.PI / 2);
plane.position.y = -0.3;
scene.add(plane);



/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.z = 3;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
 // userinput
 userinput(golfball);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);

  // falldown golfball
  fall(golfball,plane)

  // hitground
  hitground(golfball,plane)

 
};

tick();