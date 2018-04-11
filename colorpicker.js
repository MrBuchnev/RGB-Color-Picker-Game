var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      // TERNARY OPERATOR:
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      //The ternary operator replaces the "IF, ELSE" conditionals.
      //It is consists of 3 parts:
        //1) Condition (this.textContent === "Easy")
        //2) Action, if true ( ? numSquares = 3)
        //3) Action, if false ( : numSquares = 6)
      reset();
    });
  };
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //select the clicked color
      var clickedColor = this.style.backgroundColor;
      //compare the clicked colors
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(pickedColor);
        h1.style.backgroundColor = clickedColor;
      }
      else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  };
}

function reset() {
  //generate new colors
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match changed colors
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";
  //change the colors of the squares
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }
    else {
      squares[i].style.display = "none";
    }
  };
  h1.style.backgroundColor = "steelblue";
};
// easyButton.addEventListener("click", function(){
//   easyButton.classList.add("selected");
//   hardButton.classList.remove("selected");
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++) {
//     if (colors[i]) {
//       squares[i].style.backgroundColor = colors[i];
//     }
//     else {
//       squares[i].style.display = "none";
//     }
//   }
// });
//
// hardButton.addEventListener("click", function(){
//   hardButton.classList.add("selected");
//   easyButton.classList.remove("selected");
//   numSquares = 6;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   for(var i = 0; i < squares.length; i++) {
//     squares[i].style.backgroundColor = colors[i];
//     squares[i].style.display = "block";
//   }
// });

resetButton.addEventListener("click", function(){
  // colors = generateRandomColors(numSquares);
  // pickedColor = pickColor();
  // colorDisplay.textContent = pickedColor;
  // messageDisplay.textContent = "";
  // this.textContent = "New Colors"
  // for (var i = 0; i < squares.length; i++) {
  //   squares[i].style.backgroundColor = colors[i];
  // };
  // h1.style.backgroundColor = "steelblue";
  reset();
});

function changeColors(color) {
  //loop through all squares
  for(var i = 0; i < squares.length; i++) {
    //change each color to match picked color
    squares[i].style.backgroundColor = color;
  };
};

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat the action "num" times
  for(var i = 0; i < num; i++) {
    //get random color and push it into the array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor(){
  //pick a number for "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a number for "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a number for "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  //return the rgb colors
  return "rgb(" + r + ", " + g + ", " + b + ")"
}
