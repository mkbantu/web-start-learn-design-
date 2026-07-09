function expandPanel(){
    let leftpanel = document.getElementById("leftPanel");

    if (!leftpanel) {
        return;
    }
    
    if(leftpanel.style.display === "none"){
        leftpanel.style.display = "";
    }else{
        leftpanel.style.display = "none";
    }
}

function setThemeButtonText() {
    let themeButton = document.getElementById("themeButton");

    if (!themeButton) {
        return;
    }

    if (document.body.classList.contains("dark-mode")) {
        themeButton.textContent = "Light";
    } else {
        themeButton.textContent = "Dark";
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    setThemeButtonText();
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    setThemeButtonText();
});
