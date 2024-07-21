"use strict";

/**
 * Im Grunde ist "level1" nur eine Hilfsdatei.
 * Die eigentlichen Platzhalter für die Objekte sind in der "class Level" deklariert.
 * Durch die Erstellung von "new Level" wird durch die Parameter im "constructor" der "class Level" die Objekte in den jeweiligen Variablen gesetzt.
 * Beachte die Reihenfolge der Parameter im "constructor" und zu dem "new Level" Objekt.
 */

// Funktion, um eine bestimmte Anzahl von Objekten zu erstellen
function createObjects(count, createFunc) {
  const objects = [];
  for (let i = 0; i < count; i++) {
    objects.push(createFunc());
  }
  return objects;
}

// Funktion, um die Level-Objekte zu erstellen
function createLevel() {
  const chickens = createObjects(30, () => new Chicken());
  const clouds = createObjects(30, () => new Cloud());
  
  const backgroundObjects = [];
  const positions = [-719, 0, 719, 719 * 2, 719 * 3, 719 * 4, 719 * 5, 719 * 6, 719 * 7, 719 * 8];
  
  positions.forEach((pos, index) => {
    const layerNumber = (index % 2) + 1;
    backgroundObjects.push(new BackgroundObject("./img/5_background/layers/air.png", pos));
    backgroundObjects.push(new BackgroundObject(`./img/5_background/layers/3_third_layer/${layerNumber}.png`, pos));
    backgroundObjects.push(new BackgroundObject(`./img/5_background/layers/2_second_layer/${layerNumber}.png`, pos));
    backgroundObjects.push(new BackgroundObject(`./img/5_background/layers/1_first_layer/${layerNumber}.png`, pos));
  });

  // Hinzufügen des Endbosses zum Chicken-Array
  chickens.push(new Endboss());

  return new Level(chickens, clouds, backgroundObjects);
}

const level1 = createLevel();
