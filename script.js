var first = document.querySelector(".first");
var second = document.querySelector(".second");
var color1 = document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.querySelector("body");

function setGradient() {
  first.innerHTML = color1.value;
  first.style.color = color1.value
  second.innerHTML = color2.value;
  second.style.color = color2.value
  return body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";

}

function makeColor() {
  return css.style.color = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);




// body.style.background = "white"


// ceva