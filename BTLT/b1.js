let input = document.getElementById("name-input");
let btn = document.getElementById("btn-submit");
let hello = document.querySelector(".hello");

btn.addEventListener("click", () => {
    localStorage.setItem("username", input.value);

    let savedName = localStorage.getItem("username");

    hello.innerHTML = "Xin chào " + savedName;
});