let count = localStorage.getItem("visit_count") || 0;

let countElement = document.getElementById("count");
window.addEventListener("load", () =>{
    count++;

    localStorage.setItem("visit_count", count);
    countElement.innerText = count;
});

