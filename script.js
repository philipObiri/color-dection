const button = document.querySelector(".generate");
const hex = document.querySelector(".hex");
const copy = document.querySelector(".copy");

//Function expression for generating the hex color code
const generateColor = function () {
  const randomColor = Math.random().toString(16).substring(2, 8); //generate a random HEX value and cut out the numbers after the 0.
  hex.value = "#" + randomColor; // assign the generated hex value to the input field
  document.body.style.background = hex.value; //change the background color to the generated hx color;
};

//Function expression for copying the color
const copyColor = function () {
  hex.select(); // select all the characters in the hex values generated
  hex.setSelectionRange(0, 1000); // sets the amount of characters that can be selected
  document.execCommand("copy"); //executes the copy command that allows the user to save the color to a clipboard
  alert("Color has been copied to the clip board");
};
button.addEventListener("click", generateColor);
copy.addEventListener("click", copyColor);
