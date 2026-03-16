const btn = document.getElementById("toggleTheme");

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme") || "light";

    if(theme === "dark"){
        document.body.classList.add("dark");
    }
});

btn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
    }else{
        localStorage.setItem("theme", "light");
    }

});