"use strict";

class StatusBar extends DrawableObject {
  IMAGES_BAR_HEALTH = [
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/0.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/20.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/40.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/60.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/80.png",
    "img/7_statusbars/1_statusbar/2_statusbar_health/green/100.png",
  ];

  percentage = 100;

  constructor() {
    super();
    this.x = 20;
    this.y = 10;
    this.width = 200;
    this.height = 60;
    this.loadImages(this.IMAGES_BAR_HEALTH);
    this.setPercentage(100);
  }

  /**
   * Wird in der world.class.js Definiert; In der "checkCollisions()", bezogen auf "energy" durch "hit()", in movable-object.class.js.
   * Bestimmung der Enerie in der Statusleiste.
   * @param {current energy from Pepe} percentage
   */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_BAR_HEALTH[this.resolveImagaeIndex()];
    this.img = this.imageCache[path];
  }

  /**
   * Einstufung der Energieleiste.
   * @returns number
   */
  resolveImagaeIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
