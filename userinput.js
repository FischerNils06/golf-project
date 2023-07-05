import * as THREE from "three";
import { move } from "./physics.js";

import { TWEEN } from "https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js";
export default function userinput(object, camera) {
  const duration = 550;
  const offsetDistance = 2
  document.addEventListener("keydown", (event) => {
    if (event.key === "1") {
      const distance = 1;
      move(object, camera, distance, duration, offsetDistance);
    }
    if (event.key === "2") {
      const distance = 2;
      move(object, camera, distance, duration, offsetDistance);
    }
    if (event.key === "3") {
      const distance = 3;
      move(object, camera, distance, duration, offsetDistance);
    }
    if (event.key === "4") {
      const distance = 4;
      move(object, camera, distance, duration, offsetDistance);
    }
    if (event.key === "5") {
      const distance = 40;
      move(object, camera, distance, duration);
    }
  });
}
