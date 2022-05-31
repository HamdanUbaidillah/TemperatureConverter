const button = document.querySelector("button");
const input = document.querySelector(".input");
const output = document.querySelector(".output");

button.addEventListener("click", () => {
  if (input.value === "" || isNaN(input.value)) {
    output.innerHTML = "";
  } else {
    let result = (input.value * 9) / 5 + 32;
    output.innerHTML = result;
  }
});
