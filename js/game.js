"use strict";

let canvas;
let world;
let keyboard = new Keyboard();

/**
 * Funktion, die das Canvas an die Größe des Fensters anpasst.
 */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

/**
 * Der Callback soll den Typen der meta dementspächendt ändern.
 */
window.addEventListener("resize", resizeCanvas); // Event-Listener für das Ändern der Fenstergröße
window.addEventListener("orientationchange", resizeCanvas); // Event-Listener für das Ändern der Bildschirmorientierung

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
