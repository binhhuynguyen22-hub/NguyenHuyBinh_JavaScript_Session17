const textArea = document.getElementById("textArea");
const clearBtn = document.getElementById("clearBtn");

window.addEventListener("load", () => {

    const draft = localStorage.getItem("draft");
});

textArea.addEventListener("input", () => {

    localStorage.setItem("draft", textArea.value);

});

clearBtn.addEventListener("click", () => {

    localStorage.removeItem("draft");

    textArea.value = "";

});