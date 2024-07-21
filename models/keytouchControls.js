document.getElementById("left-button").addEventListener("touchstart", () => {
  keyboard.LEFT = true;
});
document.getElementById("left-button").addEventListener("touchend", () => {
  keyboard.LEFT = false;
});

document.getElementById("right-button").addEventListener("touchstart", () => {
  keyboard.RIGHT = true;
});
document.getElementById("right-button").addEventListener("touchend", () => {
  keyboard.RIGHT = false;
});

document.getElementById("jump-button").addEventListener("touchstart", () => {
  keyboard.UP = true;
});
document.getElementById("jump-button").addEventListener("touchend", () => {
  keyboard.UP = false;
});

document.getElementById("throw-button").addEventListener("touchstart", () => {
  // Hier kannst du deine Wurfaktion hinzufügen
});
