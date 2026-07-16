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
    const leftPanel = document.getElementById("leftPanel");
    const articlesContent = document.getElementById("articles-container");

    if (leftPanel) {
        // Start with the title
        let htmlContent = "<h2 class='panel-title'><span class='panel-icon'>HTML</span> Tutorial</h2>";
        let htmlString="";
        // Add course lessons if course data is available - using for loop as requested
        if (typeof course !== 'undefined' && Array.isArray(course)) {
            for (let i = 0; i < course.length; i++) {
                const lesson = course[i];
                htmlContent += `
                    <details>
                        <summary>${lesson.Title}</summary>
                        <a href="#${lesson.id}" onclick="display(${i})" class="overview_header">${lesson.Title}</a>
                        <a href="#${lesson.id}" onclick="display(${i})" class="sub">Overview</a>
                        <a href="#${lesson.id}" onclick="display(${i})" class="sub">Video</a>
                        <a href="#${lesson.id}" onclick="display(${i})" class="sub">Examples</a>
                    </details>
                `;
            
            }    
        }

        leftPanel.innerHTML = htmlContent;
       
    }



}

function display(index){
        const lesson=course[index];
        
        let articlesContent=document.getElementById("articles-container");
        let htmlString="";
        
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
        articlesContent.innerHTML=htmlString;
        console.log(htmlString);
}
        




document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

    setThemeButtonText();
    initCourse();
});

