"use strict";

class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  THROW = false; // Taste D

  /**
   * Tastatur oder toucheingabe einbinden. Bezogen auf die Anzeigegröße.
   */
  constructor() {
    this.bindTouchPressEvents();
    document.addEventListener(
      "DOMContentLoaded",
      this.toggleMobileControls.bind(this)
    );
    window.addEventListener("resize", this.toggleMobileControls.bind(this));
    window.addEventListener("keydown", this.handleKeyDownEvent.bind(this));
    window.addEventListener("keyup", this.handleKeyUpEvent.bind(this));
  }

  handleKeyDownEvent(e) {
    switch (e.keyCode) {
      case 37:
        this.LEFT = true;
        break;
      case 39:
        this.RIGHT = true;
        break;
      case 38:
        this.UP = true;
        break;
      case 40:
        this.DOWN = true;
        break;
      case 32:
        this.SPACE = true;
        break;
      case 68:
        this.THROW = true;
        break;
    }
  }

  handleKeyUpEvent(e) {
    switch (e.keyCode) {
      case 37:
        this.LEFT = false;
        break;
      case 39:
        this.RIGHT = false;
        break;
      case 38:
        this.UP = false;
        break;
      case 40:
        this.DOWN = false;
        break;
      case 32:
        this.SPACE = false;
        break;
      case 68:
        this.THROW = false;
        break;
    }
  }

  bindTouchPressEvents() {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const jumpButton = document.getElementById("jumpButton");
    const throwButton = document.getElementById("throwButton");

    if (leftButton) {
      leftButton.addEventListener("touchstart", () => {
        this.LEFT = true;
      });
      leftButton.addEventListener("touchend", () => {
        this.LEFT = false;
      });
    }

    if (rightButton) {
      rightButton.addEventListener("touchstart", () => {
        this.RIGHT = true;
      });
      rightButton.addEventListener("touchend", () => {
        this.RIGHT = false;
      });
    }

    if (jumpButton) {
      jumpButton.addEventListener("touchstart", () => {
        this.UP = true;
      });
      jumpButton.addEventListener("touchend", () => {
        this.UP = false;
      });
    }

    if (throwButton) {
      throwButton.addEventListener("touchstart", () => {
        this.THROW = true;
      });
      throwButton.addEventListener("touchend", () => {
        this.THROW = false;
      });
    }
  }

  toggleMobileControls() {
    const mobileControls = document.getElementById("mobileControls");
    if (window.innerWidth < 1080) {
      mobileControls.style.display = "block";
    } else {
      mobileControls.style.display = "none";
    }
  }
}
