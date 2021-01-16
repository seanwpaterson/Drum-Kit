// Detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    checkChar(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

// Detecting Key Press

document.addEventListener('keydown', function(event) {
  checkChar(event.key);
  buttonAnimation(event.key);
});

function checkChar(char) {
  switch (char) {
    case 'w':
      playAudio('sounds/snare.mp3');
      break;

    case 'a':
      playAudio('sounds/tom-1.mp3');
      break;

    case 's':
      playAudio('sounds/tom-4.mp3');
      break;

    case 'd':
      playAudio('sounds/kick-bass.mp3');
      break;

    case 'j':
      playAudio('sounds/tom-3.mp3');
      break;

    case 'k':
      playAudio('sounds/tom-2.mp3');
      break;

    case 'l':
      playAudio('sounds/crash.mp3');
      break;

    default:
      console.log(char);
      break;
  }
}

function playAudio(file) {
  var audio = new Audio(file);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
