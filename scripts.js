const button = document.querySelector("button");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

button.addEventListener("click", () => {
  let result = (input.value * 9) / 5 + 32;
  output.innerHTML = result;
  if (input.value == "") {
    output.innerHTML = "";
  }
});
