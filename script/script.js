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

function initCourse() {
    // Step 1: Find the container where we'll put all lessons
    const container = document.getElementById("articles-container");
    if (!container) {
        console.warn("Container not found");
        return;
    }

    // Step 2: Check if course data exists
    if (typeof course === "undefined") {
        console.warn("Course data not found");
        return;
    }

    // Step 3: Build HTML string from course data
    let htmlString = "";

    for (let i = 0; i < course.length; i++) {
        const lesson = course[i];

        // Start the article with ID from course data
        htmlString += `<article id="${lesson.id}">`;

        // Add title
        htmlString += `<h2>${lesson.Title}</h2>`;

        // Add video and codepen (if video exists)
        if (lesson.videoSource) {
            htmlString += `<div class="media-row">`;

            // Video section
            htmlString += `<div class="video-wrapper">`;
            htmlString += `<iframe 
                src="${lesson.videoSource}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
                loading="lazy">
            </iframe>`;
            htmlString += `</div>`;

            // CodePen section
            htmlString += `<div class="codepen-wrapper">`;
            htmlString += `<iframe 
                src="https://codepen.io/trial/embed/PNaGbb?default-tab=html,result&editable=true" 
                loading="lazy" 
                allowfullscreen>
            </iframe>`;
            htmlString += `</div>`;

            htmlString += `</div>`;
        }

        // Add description (if exists)
        if (lesson.description) {
            htmlString += `<p>${lesson.description}</p>`;
        }

        // Add code example (if exists)
        if (lesson.exampleCode) {
            const escapedCode = lesson.exampleCode
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
            
            htmlString += `<pre><code>${escapedCode}</code></pre>`;
        }

        // Close the article
        htmlString += `</article>`;
    }

    // Step 4: Put all HTML into the container
    container.innerHTML = htmlString;

    // Step 5: Tell other scripts that lessons are loaded
    const event = new CustomEvent("articles-loaded", {
        detail: { count: course.length }
    });
    container.dispatchEvent(event);
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    setThemeButtonText();
    initCourse();
});
