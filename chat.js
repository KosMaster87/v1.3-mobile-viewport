"use strict";

let canvas;
let world;
let keyboard = new Keyboard();

// ------------------------------------------------------------

/**
 * Der Callback soll den Typen der meta dementsprechend ändern.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  canvas = document.getElementById("canvas");
  if (canvas) {
    window.addEventListener("resize", resizeCanvas); // Event-Listener für das Ändern der Fenstergröße
    window.addEventListener("orientationchange", resizeCanvas); // Event-Listener für das Ändern der Bildschirmorientierung
    resizeCanvas();
  }
  initGame();
});

// ------------------------------------------------------------

/**
 * Funktion, die das Canvas an die Größe des Fensters anpasst.
 */
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// ------------------------------------------------------------

/**
 * New World load the canvas in world.class.js
 * Also check first if it is a mobile device or another device.
 */
function initGame() {
  canvas = document.getElementById("canvas");
  if (canvas) {
    resizeCanvas();
    world = new World(canvas, keyboard);

    startGame();
  } else {
    console.error("Canvas element not found");
  }
}

// ------------------------------------------------------------

("use strict");

let isGameRunning = false;

// ------------------------------------------------------------------------
// HTML manager
// ------------------------------------------------------------------------
function startGame() {
  document.getElementById("startLayerForCanvas").style.display = "none";
  document.getElementById("buttonContainerSecond").style.display = "none";
  document.getElementById("canvasParent").style.display = "block";
  document.getElementById("canvas").style.display = "block";
  document.getElementById("buttonContainerThird").style.display = "flex";
  isGameRunning = true;
  startGameHandleInstructionPopUpSelf();
}

function startGameHandleInstructionPopUpSelf() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";

  let returnToMenuBtnRef = document.querySelectorAll(".returnToMenuBtn");
  returnToMenuBtnRef.forEach((button) => {
    button.style.display = "block";
  });

  let restartAfterGameOverBtnRef = document.querySelectorAll(
    ".restartAfterGameOverBtn"
  );
  restartAfterGameOverBtnRef.forEach((button) => {
    button.style.display = "block";
  });
}

function restart() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  document.getElementById("gameOverLayerForCanvas").style.display = "none";
  document.getElementById("gameIsWinningOverLayerForCanvas").style.display =
    "none";
  isGameRunning = false;
  clearAllIntervals();
  initGame();
}

function returnToMenu() {
  document.getElementById("startLayerForCanvas").style.display = "block";
  document.getElementById("buttonContainerSecond").style.display = "flex";
  document.getElementById("canvasParent").style.display = "none";
  document.getElementById("canvas").style.display = "none";
  document.getElementById("buttonContainerThird").style.display = "none";
  isGameRunning = false;
  clearAllIntervals();
  returnToMenuHandleInstructionPopUpSelf();
}

function returnToMenuHandleInstructionPopUpSelf() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
  let returnToMenuBtnRef = document.querySelectorAll(".returnToMenuBtn");
  returnToMenuBtnRef.forEach((button) => {
    button.style.display = "none";
  });

  let restartAfterGameOverBtnRef = document.querySelectorAll(
    ".restartAfterGameOverBtn"
  );
  restartAfterGameOverBtnRef.forEach((button) => {
    button.style.display = "none";
  });
}

function closeInstructionPopUpSelf_manuel() {
  let popUpRef = document.getElementById("instructionPopUpSelf");
  popUpRef.style.display = "none";
}

// ------------------------------------------------------------------------
// PopUp Event
// ------------------------------------------------------------------------
/**
 * Open the "instruction PopUp".
 */
function openInstructionPopUpSelf() {
  let popUp = document.getElementById("instructionPopUpSelf");

  if (popUp.style.display == "block") {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  } else {
    popUp.style.display = "block";
    document.addEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

/**
 * Close the "instruction PopUp" with an eventlistener and remove the eventlistener.
 */
function closeInstructionPopUpSelf_outside(event) {
  let popUp = document.getElementById("instructionPopUpSelf");
  let instructionBtn = document.getElementById("instructionPopUpButton");

  if (
    !isGameRunning &&
    !popUp.contains(event.target) &&
    event.target !== instructionBtn
  ) {
    popUp.style.display = "none";
    document.removeEventListener("click", closeInstructionPopUpSelf_outside);
  }
}

// ------------------------------------------------------------------------
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

("use strict");

class Keyboard {
  LEFT = false;
  RIGHT = false;
  UP = false;
  DOWN = false;
  SPACE = false;
  THROW = false; // Taste D

  /**
   * Tastatur oder Toucheingabe einbinden. Bezogen auf die Anzeigegröße.
   */
  constructor() {
    document.addEventListener(
      "DOMContentLoaded",
      this.checkScreenWidth.bind(this)
    );
    window.addEventListener("resize", this.checkScreenWidth.bind(this));
    window.addEventListener("keydown", this.handleKeyDownEvent.bind(this));
    window.addEventListener("keyup", this.handleKeyUpEvent.bind(this));
  }

  checkScreenWidth() {
    if (window.innerWidth < 724) {
      this.bindTouchPressEvents();
    }
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
        console.log("Pepe has throw.");
      });
    }
  }
}
