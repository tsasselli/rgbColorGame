var colors = generateRandomColors(6);

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
      console.log(clickedColor, pickedColor);

      if(clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
      } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again";
      }
    });
  };

function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(){
 var random = Math.floor(Math.random() * colors.length);
 return colors[random];
}

function generateRandomColors(num){
var arr = [];
for(var i = 0; i <= num; i++){
  //gets random colors and pushes it into array.
  arr.push(randomColor());

}
return arr;
}

function randomColor(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}
