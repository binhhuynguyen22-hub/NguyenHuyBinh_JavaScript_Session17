const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const btn = document.getElementById("saveBtn");
const display = document.getElementById("display");

window.addEventListener("load", () => {

  const data = localStorage.getItem("myProfile");
});

btn.addEventListener("click", () => {

  const name = nameInput.value;
  const age = ageInput.value;

  const profile = {
    name: name,
    age: age
  };

  localStorage.setItem("myProfile", JSON.stringify(profile));

  display.innerHTML = `Tên: ${profile.name} | Tuổi: ${profile.age}`;

});