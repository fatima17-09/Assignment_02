'use strict';

//starting the music
AFRAME.registerComponent('start-experience',{
    init: function() {
      console.log("scene loaded");
      document.querySelector('#user-gesture-button').style.display='block';
    }
});

  //function called from user-gesture click
  const startExperience = function() {
 
  document.querySelector('#user-gesture-overlay').style.display='none'; //hide user-gesture overlay
  
  //start all ambient music
  const ambientSounds = document.querySelectorAll('.music');

  ambientSounds.forEach(function(soundEntity) {
    soundEntity.components.sound.playSound();
  });
}

//starting the sound effect
AFRAME.registerComponent('play-audio',{
    init: function() {
        document.querySelector('#click-sound');
    }
});

//function called from the bubbles button
const startAudio = function() {

//start the sound effect
const soundEffect = document.querySelectorAll('.effect');

soundEffect.forEach(function(soundEntity) {
    soundEntity.components.sound.playSound();

});
}