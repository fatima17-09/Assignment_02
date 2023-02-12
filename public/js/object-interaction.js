AFRAME.registerComponent('object-interaction', {
  init: function() {

    //refer to the HTML element that the component is attached to
    const OBJECT_AF = this.el;

    //refer to the camera element in the scene
    const cameraEl = OBJECT_AF.sceneEl.camera.el;

    let isHolding = false;  
    
    OBJECT_AF.addEventListener('click', function (evt) {

      //set to true when object is clicked to know that it is picked up
      isHolding = true;
    });

    //get the button from the HTML file by Id
    let button = document.getElementById("drop-button");

    //listens to the click event on a button element
    button.addEventListener("click", function() {
      console.log("button clicked");
      if (isHolding) {

        //find the position of the camera
        let cameraPos = cameraEl.getAttribute('position');
        var cameraRot = cameraEl.getAttribute('rotation');
        
        //define x,y,z to new positions where the object will be dropped
        let x = cameraPos.x - 2;
        let y = cameraPos.y + (-1.6);
        let z = cameraPos.z + (-1) * Math.cos(cameraRot.y * (Math.PI / 180)); //calculates the cosine of the camera's rotation and multiplies it by -1, to make the object drop in front of the camera.

        //set the object new position after the button is clicked
        OBJECT_AF.setAttribute('position', {x: x, y: y, z: z});
        
        //object is no longer being held
        isHolding = false;
      }
    });

    //tick function is a render loop that continuously moves the entity
    this.tick = function () {
      //if user is holding the object, update position and rotation of the object to match the rotation and position of the camera
      if (isHolding) {
        OBJECT_AF.setAttribute('position', {x: cameraEl.getAttribute('position').x-1.5, y: cameraEl.getAttribute('position').y, z: cameraEl.getAttribute('position').z});
        OBJECT_AF.setAttribute('rotation', {x: cameraEl.getAttribute('rotation').x, y: cameraEl.getAttribute('rotation').y, z: cameraEl.getAttribute('rotation').z});
      }
    };
  }
});
