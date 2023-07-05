import * as THREE from "three";
import { TWEEN } from "https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js";
import "./style.css";
const fallspeed = 0.1;

export default function fall(golfball, plane) {
  golfball.position.y = golfball.position.y - fallspeed;
  hitground(golfball, plane);
}

export function hitground(golfball, plane) {
  const roundedY = golfball.position.y.toFixed(40);
  if (roundedY <= plane.position.y + 0.3) {
    golfball.position.y = golfball.position.y + fallspeed;
  }
}

export function move(object, camera, distance, duration) {
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    direction.y = 0;
    direction.normalize();
  
    // Calculate the target position
    const targetPosition = object.position.clone().add(direction.multiplyScalar(distance));
  
    // Create a new Tween object
    const tween = new TWEEN.Tween(object.position)
      .to(targetPosition, duration)
      .start();
}
