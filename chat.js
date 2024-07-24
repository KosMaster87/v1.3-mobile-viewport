"use strict";

// Globale Definition von intervalIds und setStoppableInterval
let intervalIds = [];

function setStoppableInterval(fn, time) {
  let id = setInterval(fn, time);
  intervalIds.push(id);
}

function stopGame() {
  intervalIds.forEach(clearInterval);
}

// MovableObject Klasse bleibt unverändert, da sie bereits angepasst wurde

class Cloud extends MovableObject {
  y = 20;
  width = 500;
  height = 300;

  IMAGES_CLAUD = [
    "./img/5_background/layers/4_clouds/1.png",
    "./img/5_background/layers/4_clouds/2.png",
    "./img/5_background/layers/4_clouds/1.png",
    "./img/5_background/layers/4_clouds/2.png",
  ];

  constructor() {
    super().loadImage("./img/5_background/layers/4_clouds/1.png");
    this.loadImages(this.IMAGES_CLAUD);
    this.x = Math.random() * 10000;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animate();
  }

  /**
   * Speed optionts and Running direction.
   * Also some animations.
   */
  animate() {
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
  }
}

class Endboss extends MovableObject {
  height = 400;
  width = 300;
  y = 50;

  IMAGES_WALKING = [
    "./img/4_enemie_boss_chicken/2_alert/G5.png",
    "./img/4_enemie_boss_chicken/2_alert/G6.png",
    "./img/4_enemie_boss_chicken/2_alert/G7.png",
    "./img/4_enemie_boss_chicken/2_alert/G8.png",
    "./img/4_enemie_boss_chicken/2_alert/G9.png",
    "./img/4_enemie_boss_chicken/2_alert/G10.png",
    "./img/4_enemie_boss_chicken/2_alert/G11.png",
    "./img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 400;
    this.animate();
  }

  /**
   * Speed optionts and Running direction.
   * Also some animations.
   */
  animate() {
    setStoppableInterval(
      () => this.playAnimation(this.IMAGES_WALKING),
      1000 / 7
    );
  }
}

class Chicken extends MovableObject {
  y = 390;
  height = 45;
  width = 45;

  IMAGES_WALKING = [
    "./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  constructor() {
    super().loadImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 10000; // Start the chicken in random place.
    this.speed = 0.15 + Math.random() * 0.25; // Random speed!
    this.animate();
  }

  /**
   * Speed optionts and Running direction.
   * Also some animations.
   */
  animate() {
    setStoppableInterval(() => this.moveLeft(), 1000 / 60);
    setStoppableInterval(
      () => this.playAnimation(this.IMAGES_WALKING),
      1000 / 7
    );
  }
}
