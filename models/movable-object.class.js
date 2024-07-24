"use strict";

class MovableObject extends DrawableObject {
  otherDirection = false;
  energy = 100;
  lastHit = 0;

  speedY = 0; // Geschwindigkeit nach unten.
  acceleration = 1; // Beschleunigung

  // ################################ applyGravity START #################################################

  /**
   * Die Schwerkraft für den Charakter und für die Flaschen definieren.
   */
  applyGravity() {
    setStoppableInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        // Das mit größer als 0 muss sein, da die Sprung fn nur über dem Boden funktionieren soll.
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 26);
  }

  /**
   * Bestätigung, ob das Objekt über dem Boden ist.
   * Confirming whether the object is above the ground.
   * @returns boolean
   */
  isAboveGround() {
    // Hier soll nur die Flasche angesprochen werden; Da Pepe ja ein "extends MovableObject" ist!
    if (this instanceof ThrowableObject) {
      return true;
      // Der "else" Teil ist relevant für Pepe:
    } else {
      return this.y < 280;
    }
  }
  // Für Pepe wird immer der else-Teil der Abfrage ausgeführt, da Pepe keine Instanz von ThrowableObject ist.
  // Die Bedingung für Pepe, um sich über dem Boden zu befinden, ist also this.y < 260.

  // ###################################### applyGravity END ###########################################

  // ###################################### Pepes animate START ###########################################

  /**
   * Pepes Controls
   */
  moveRight() {
    this.x += this.speed;
  }

  /**
   * Pepes Controls
   * Also moves the clouds and the chickens.
   */
  moveLeft() {
    this.x -= this.speed;
  }

  /**
   * Nur für den Pepe, um seine beschleunigung zum Springen zu steuern.
   */
  jump() {
    this.speedY = 15;
  }

  /**
   * Der zugefügte Schaden, an Pepe in einer bestimmten Zeitspanne. (Siehe: this.lastHit)
   * @returns Boolean
   */
  isHurt() {
    let timePassed = new Date().getTime() - this.lastHit;
    timePassed = timePassed / 1000;
    return timePassed < 1;
  }

  /**
   * Zugefügter Schaden am Charakter in der Statusleiste.
   */
  hit() {
    this.energy -= 10;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /**
   * Pepes sein sterben.
   * @returns Boolean
   */
  isDead() {
    return this.energy == 0;
  }

  // ###################################### Pepes animate END ###########################################

  /**
   * The full value of an array with the images is iterated here,
   * and a variable with the path of the images selected for playback is declared here.
   * This means that the pre-loaded "load Images(array)" are cached here individually for movement.
   *
   * Der Vollwert eines Arrays mit den Bilder wird hier Iterriert,
   * und eine Variable mit den Pfad der Bilder die zum Abspielen gewählt wurden,
   * wird hier geklariert.
   * Das heisst, die im vorab geladenen "loadImages(array)", werden hier einzelt für die Bewegung zwischengespeichert.
   * @param {Array with images} images
   */
  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }

  // ###################################### colliding Manager START ###########################################

  /**
   * Berechnung des Bereiches für das jeweiliege Objekt.
   */
  isColliding(obj) {
    return (
      this.x + this.width > obj.x &&
      this.y + this.height > obj.y &&
      this.x < obj.x + obj.width &&
      this.y < obj.y + obj.height
    );
  }

  // ###################################### colliding Manager END ###########################################
}
