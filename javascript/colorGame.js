var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.querySelector("#message");

rgbDisplay.textContent = pickedColor;

  for(var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listenters to square
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      var  clickedColor = this.style.backgroundColor;
      changeColors(clickedColor);

      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
      } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
      }
    });
  };

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    color[i].style.backgroundColor = color;
  }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}
