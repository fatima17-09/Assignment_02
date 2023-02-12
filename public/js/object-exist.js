
//component to create spheres at a random y and z position
AFRAME.registerComponent('create-obj', {
  schema: {},
  init: function () {
    this.el.addEventListener('click', function () {

      let object = document.createElement('a-entity');
     
      object.setAttribute('geometry', {
        primitive: 'sphere',
        radius:0.3,
      });
      
  
      object.setAttribute('material', {color: 'rgba(82, 4, 6)', opacity:'0.5', transparent: 'true',});
      
      object.setAttribute('position', {
        x: -7.8,
        y: Math.floor(Math.random() * (7 - 1 + 1)) +1,          //randomize the z-position between -1 and 7
        z: Math.floor(Math.random() * (-10 -(-1.68) + 1)) + 1, //randomize the z-position between -1.68 and 10
      });

      //add an id to the spheres created
      object.setAttribute('id', 'bubbles');
      let scene = document.querySelector('a-scene');
      scene.appendChild(object);
    });
  }
});

//a component to delete the previously created spheres with the id=bubbles
AFRAME.registerComponent('delete-obj', {
  schema: {},
  init: function () {
    this.el.addEventListener('click', function () {

      //find the enities with the id bubbles in the scene
      let scene = document.querySelector('a-scene');
      let spheres = scene.querySelectorAll('#bubbles');
      
      //iterates over each sphere and remove it from the scene
      for (let i = 0; i < spheres.length; i++) {
        scene.removeChild(spheres[i]);
      }
    });
  }
});
