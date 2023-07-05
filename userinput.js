import * as THREE from "three";
import { TWEEN } from 'https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js';
export default function userinput(object, camera) {

document.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        const distance = 3
        const duration = 10
        console.log('a')
        // golfball.position.y = golfball.position.y + 1
        

        // const camera = orbitControls.object;

        // // Retrieve the position and rotation data
        // const rotation = camera.rotation;

        // console.log('Camera Rotation:', rotation.x, rotation.y  );
          // Get the camera's direction vector
  // Get the camera's direction vector (excluding the y-component)
  // Get the camera's direction vector (excluding the y-component)
  const direction = new THREE.Vector3();
  camera.getWorldDirection(direction);
  direction.y = 0;
  direction.normalize();

  // Calculate the target position
  const targetPosition = object.position.clone().add(direction.multiplyScalar(distance));

  // Animate the object's movement
  new TWEEN.Tween(object.position)
    .to(targetPosition, duration)
    .start();
    }
});

}