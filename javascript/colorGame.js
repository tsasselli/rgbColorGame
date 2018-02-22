var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.getElementById("resetButton");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  //Mode button event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 2 : numSquares = 6;
      reset();
    })
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to squares
    squares[i].style.backgroundColor = colors[i]
    // add click listenters to square
    squares[i].addEventListener("click", function() {
      // grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      console.log(clickedColor, pickedColor);

      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?"
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  // generates new colors array
  colors = generateRandomColors(numSquares);
  //pick a new color from array
  pickedColor = pickColor();
  //Changes colors that are generated and updates the text with the 1 of those values.
  rgbDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = ""
  //loops through all the colors picked
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
};

rgbDisplay.textContent = pickedColor;

resetButton.addEventListener("click", function() {
  reset()
});

function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor() {
  // use math . floor to get rid of decible value
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i <= num; i++) {
    //gets random colors and pushes it into array.
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`
}
