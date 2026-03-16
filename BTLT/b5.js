const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
const display = document.getElementById("display");

window.addEventListener("load", () => {

  const data = localStorage.getItem("myProfile");

});

saveBtn.addEventListener("click", () => {

  const name = nameInput.value;
  const age = ageInput.value;

  const profile = {
    name: name,
    age: age
  };

  localStorage.setItem("myProfile", JSON.stringify(profile));

  display.innerHTML = `Tên: ${profile.name} | Tuổi: ${profile.age}`;

});

deleteBtn.addEventListener("click", () => {

  localStorage.removeItem("myProfile");

  display.innerHTML = "Chưa có thông tin cá nhân";

});