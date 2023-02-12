document.addEventListener("DOMContentLoaded", function() {

    const forward_button = document.getElementById("forward-button");
    const backward_button = document.getElementById("backward-button");
    const left_button = document.getElementById("left-button");
    const right_button = document.getElementById("right-button");

    let camera = document.querySelector("#camera");

    forward_button.addEventListener("click", function() {
      if (camera) {
        camera.setAttribute("position", {x: camera.getAttribute("position").x, y: camera.getAttribute("position").y, z: camera.getAttribute("position").z - 1});
      }
    });

    backward_button.addEventListener("click", function() {
      if (camera) {
        camera.setAttribute("position", {x: camera.getAttribute("position").x, y: camera.getAttribute("position").y, z: camera.getAttribute("position").z + 1});
      }
    });
  
    left_button.addEventListener("click", function() {
      if (camera) {
        camera.setAttribute("position", {x: camera.getAttribute("position").x - 1, y: camera.getAttribute("position").y, z: camera.getAttribute("position").z});
      }
    });
  
    right_button.addEventListener("click", function() {
      if (camera) {
        camera.setAttribute("position", {x: camera.getAttribute("position").x + 1, y: camera.getAttribute("position").y, z: camera.getAttribute("position").z});
      }
    });
  });
  