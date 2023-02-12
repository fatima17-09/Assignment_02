AFRAME.registerComponent('load-model', {
  schema: {
    src: { type: 'string' },
    position: { type: 'vec3', default: { x: 0, y: 0, z: 0 } }
  },
  
  init: function () {

    //intialize variables
    const model = this.el;
    const src = this.data.src;
    const position = this.data.position;

    model.isLoaded = false;

    //Refrence and documentation https://threejs.org/docs/#examples/en/loaders/GLTFLoader
    const loader = new THREE.GLTFLoader();
    
    this.el.addEventListener('click', function () {

      //make sure that the model is not loaded then load the model specified by the src in html 
      if(model.isLoaded === false) {

        loader.load(src, function (gltf) {
        model.setObject3D('mesh', gltf.scene);
        model.getObject3D('mesh').position.set(position.x, position.y, position.z);
        model.isLoaded = true;
      });
    }

    });
  }
});

