"use strict";
console.log("global.js loaded");
let intervalIds = [];

/**
 * Die bessere Weise der beendigung der Intervale, da hier jedes Interval in das laufende Array eingetragen wird.
 * The better way of terminating intervals, because here each interval is entered into the current array.
 */
function setStoppableInterval(fn, time) {
  // console.log('Interval läuft');
  let id = setInterval(fn, time);
  
  intervalIds.push(id);
  // return id; 
}
// console.log('Interval ID:', setStoppableInterval(() => {}, 1000));

function clearAllIntervals() {
  intervalIds.forEach(clearInterval);
  intervalIds = [];
}

// Test
let id = setStoppableInterval(() => {
  console.log('Interval läuft');
}, 1000);

console.log('Interval ID:', id); // Sollte eine ID anzeigen