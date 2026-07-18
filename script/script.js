let currentIndex = 0;
let fontLevel = 1; // 0 = small, 1 = normal, 2 = large

/* ── Sidebar toggle ── */
function expandPanel() {
    const leftpanel = document.getElementById("leftPanel");
    if (!leftpanel) return;
    leftpanel.style.display = leftpanel.style.display === "none" ? "" : "none";
}

/* ── Theme ── */
function setThemeButtonText() {
    const btn = document.getElementById("themeButton");
    if (!btn) return;
    btn.textContent = document.body.classList.contains("dark-mode") ? "Light" : "Dark";
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
    setThemeButtonText();
}

/* ── Lesson navigation ── */
function prevLesson() {
    if (typeof course === 'undefined' || currentIndex <= 0) return;
    display(currentIndex - 1);
}

function nextLesson() {
    if (typeof course === 'undefined' || currentIndex >= course.length - 1) return;
    display(currentIndex + 1);
}

function updateNavButtons() {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    if (!prevBtn || !nextBtn || typeof course === 'undefined') return;
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= course.length - 1;
}

/* ── Mark done ── */
function markDone() {
    if (typeof course === 'undefined') return;
    const key = "done_" + course[currentIndex].id;
    const isDone = localStorage.getItem(key) === "true";
    localStorage.setItem(key, String(!isDone));
    updateMarkDoneBtn();
}

function updateMarkDoneBtn() {
    const btn = document.getElementById("markDoneBtn");
    if (!btn || typeof course === 'undefined') return;
    const isDone = localStorage.getItem("done_" + course[currentIndex].id) === "true";
    btn.classList.toggle("done", isDone);
    btn.title = isDone ? "Completed!" : "Mark Done";
    btn.textContent = isDone ? "✓" : "✓";
}

/* ── Font size ── */
function increaseFontSize() {
    if (fontLevel < 2) { fontLevel++; applyFontSize(); }
}

function decreaseFontSize() {
    if (fontLevel > 0) { fontLevel--; applyFontSize(); }
}

function applyFontSize() {
    const c = document.getElementById("articles-container");
    if (!c) return;
    c.classList.remove("font-sm", "font-lg");
    if (fontLevel === 0) c.classList.add("font-sm");
    if (fontLevel === 2) c.classList.add("font-lg");
}

/* ── Focus mode ── */
function toggleFocus() {
    const mainEl = document.querySelector("main");
    if (!mainEl) return;
    mainEl.classList.toggle("focus-mode");
    const btn = document.getElementById("focusBtn");
    if (btn) btn.textContent = mainEl.classList.contains("focus-mode") ? "✕" : "⛶";
}

/* ── Scroll to top ── */
function scrollToTop() {
    const c = document.getElementById("articles-container");
    if (c) c.scrollTop = 0;
}

/* ── Course init ── */
function initCourse() {
    const leftPanel = document.getElementById("leftPanel");
    if (leftPanel) {
        let htmlContent = "<h2 class='panel-title'><span class='panel-icon'>HTML</span> Tutorial</h2>";
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

    if (typeof course !== 'undefined' && Array.isArray(course) && course.length > 0) {
        display(0);
    }
}

/* ── Display lesson ── */
function display(index) {
    const lesson = course[index];
    currentIndex = index;

    let articlesContent = document.getElementById("articles-container");
    let htmlString = `<article id="${lesson.id}">`;

    htmlString += `<h2>${lesson.Title}</h2>`;

    if (lesson.videoSource) {
        htmlString += `<div class="media-row">
            <div class="video-wrapper">
                <iframe src="${lesson.videoSource}" title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen loading="lazy"></iframe>
            </div>
            <div class="codepen-wrapper">
                <iframe src="https://codepen.io/trial/embed/PNaGbb?default-tab=html,result&editable=true"
                    loading="lazy" allowfullscreen></iframe>
            </div>
        </div>`;
    }

    if (lesson.description) {
        htmlString += `<p>${lesson.description}</p>`;
    }

    if (lesson.exampleCode) {
        const escaped = lesson.exampleCode
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        htmlString += `<pre><code>${escaped}</code></pre>`;
    }

    htmlString += `</article>`;
    articlesContent.innerHTML = htmlString;

    updateNavButtons();
    updateMarkDoneBtn();
    scrollToTop();
}

/* ── Boot ── */
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    setThemeButtonText();
    initCourse();
});
