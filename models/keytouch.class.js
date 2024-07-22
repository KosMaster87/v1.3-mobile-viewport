"use strict";

class TouchController {
  constructor() {
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.initTouchEvents();
  }

  initTouchEvents() {
    window.addEventListener("touchstart", (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
      this.touchStartY = e.changedTouches[0].screenY;
    });

    window.addEventListener("touchend", (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.touchEndY = e.changedTouches[0].screenY;
      this.handleTouchGesture();
    });
  }

  handleTouchGesture() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = this.touchEndY - this.touchStartY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // swipe right
        keyboard.RIGHT = true;
      } else {
        // swipe left
        keyboard.LEFT = true;
      }
    } else {
      if (deltaY > 0) {
        // swipe down
        keyboard.DOWN = true;
      } else {
        // swipe up
        keyboard.UP = true;
      }
    }

    setTimeout(() => {
      keyboard.RIGHT = false;
      keyboard.LEFT = false;
      keyboard.UP = false;
      keyboard.DOWN = false;
    }, 100); // Reset after 100ms
  }
}

let touchController = new TouchController();
