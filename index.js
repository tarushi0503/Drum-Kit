// select and play relevant sound
function makeSound(key){
  switch (key) {
    case 'w':
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case 'a':
        var audio = new Audio("tom-2.mp3");
        audio.play();
        break;
    case 's':
        var audio = new Audio("tom-3.mp3");
        audio.play();
        break;
    case 'd':
       var audio = new Audio("tom-4.mp3");
       audio.play();
       break;
    case 'j':
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case 'k':
      var crash = new Audio("crash.mp3");
      crash.play();
      break;
    case 'l':
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHTML);
  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

//detecting button press
var count = document.querySelectorAll(".drum").length;   //No of boxes it can press=No of buttons
for( var i = 0; i < count; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// detecting keyboard press
document.addEventListener("keypress", function(event){
  makeSound(event.key);  //key property of event
  buttonAnimation(event.key);
});
