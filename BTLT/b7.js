const counter = document.getElementById("counter");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");

let value = 0;

window.addEventListener("load", () => {
  let savedValue = localStorage.getItem("counterValue");

  counter.innerHTML = value;
});

plus.addEventListener("click", () => {
  value++;
  counter.innerHTML = value;

  localStorage.setItem("counterValue", value);
});

minus.addEventListener("click", () => {
  value--;
  counter.innerHTML = value;

  localStorage.setItem("counterValue", value);
});

reset.addEventListener("click", () => {
  value = 0;
  counter.innerHTML = value;

  localStorage.setItem("counterValue", value);
});
