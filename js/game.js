"use strict";

let canvas;
let world;
let keyboard = new Keyboard();
let isGameRunning = false;
// let intervalIds = [];

/**
 * Der Callback soll den Typen der meta dementspächendt ändern.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  canvas = document.getElementById("canvas");
  window.addEventListener("resize", resizeCanvas); // Event-Listener für das Ändern der Fenstergröße
  window.addEventListener("orientationchange", resizeCanvas); // Event-Listener für das Ändern der Bildschirmorientierung
  resizeCanvas();
});

/**
 * Funktion, die das Canvas an die Größe des Fensters anpasst.
 */
function resizeCanvas() {
  const canvasParentRef = document.getElementById("canvasParent");
  const mobileControlsRef = document.getElementById("mobileControls");

  canvas.width = canvasParentRef.clientWidth;
  canvas.height = canvasParentRef.clientHeight;

  if (mobileControlsRef) {
    mobileControlsRef.style.width = canvasParentRef.clientWidth + 'px';
    mobileControlsRef.style.height = canvasParentRef.clientHeight + 'px';
  }
}
// function resizeCanvas() {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// }

/**
 * New World load the canvas in world.class.js
 * Also check first if it is a mobile device or another device.
 */
function initGame() {
  canvas = document.getElementById("canvas");
  resizeCanvas();
  world = new World(canvas, keyboard);
  startGame();
}

// Ensure the canvas resizes properly when the window size changes
window.addEventListener("resize", resizeCanvas);
