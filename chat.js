function resizeCanvas() {
  const canvasParentRef = document.getElementById("canvasParent");
  const mobileControlsRef = document.getElementById("mobileControls");

  canvas.width = canvasParentRef.clientWidth;
  canvas.height = canvasParentRef.clientHeight;

  if (mobileControlsRef) {
    mobileControlsRef.style.width = canvasParentRef.clientWidth + 'px';
    mobileControlsRef.style.height = canvasParentRef.clientHeight + 'px';
  }
}

// Sicherstellen, dass das Canvas bei der Größenänderung des Fensters angepasst wird
window.addEventListener("resize", resizeCanvas);
