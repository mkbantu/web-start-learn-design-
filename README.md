# WebStart Learning Platform

A free, structured, beginner-friendly web development learning platform built for University of Rwanda Web Design module students. Live at **[web-start-learn-design.vercel.app](https://web-start-learn-design.vercel.app)**.

## About

WebStart gives UR-CST students a single, syllabus-aligned resource covering the full web development learning path — from how the Internet works to building and deploying full-stack applications. All lesson content is free, requires no login, and works on any device including low-cost smartphones.

## Learning Paths

| Path | Courses |
|---|---|
| **Design Path** | HTML · CSS · JavaScript |
| **Server Side Path** | Node.js + Express · MySQL · Full-Stack · fetch API |
| **Hosting Path** | Hosting & Deployment · Vercel · GitHub Pages · Railway · Render |

## Features

- **Data-driven lesson pages** — all lesson content stored as JavaScript arrays, rendered dynamically with no page reload
- **Teacher video slots** — each lesson has a dedicated video area for lecturer-provided recordings (YouTube, Google Drive, or any embeddable URL)
- **9-button page controls** — sidebar toggle, dark/light theme, previous/next lesson, font size, mark done, scroll to top, focus mode
- **Lesson progress tracking** — mark any lesson as done; state saved to localStorage and persists across sessions
- **Fully responsive** — tested down to Galaxy S20 (360px); hamburger nav, sliding sidebar drawer, horizontal page-controls bar on mobile
- **Dark mode** — persistent across all pages via localStorage
- **Student subscription form** — collects name, email, WhatsApp, level, and learning goal
- **No frameworks, no build step** — plain HTML5, CSS3, and Vanilla JavaScript ES6+

## Project Structure

```
WebStart/
├── index.html                    ← Home page
├── html/
│   ├── learnhtml.html            ← HTML course
│   ├── learncss.html             ← CSS course
│   ├── learnjs.html              ← JavaScript course
│   ├── learnnode.html            ← Node.js + Express course
│   ├── learnmysql.html           ← MySQL course
│   ├── learnfullstack.html       ← Full-Stack course
│   ├── learnhosting.html         ← Hosting & Deployment course
│   └── form.html                 ← Student subscription form
├── css/
│   ├── web.css                   ← Shared nav, dark mode, page controls, responsive
│   ├── index.css                 ← Home page styles
│   ├── learnhtml.css             ← Lesson page layout (shared by all learn pages)
│   └── learn*.css                ← Per-course accent colours
├── data/
│   ├── design/                   ← htmlcourse.js · csscourse.js · jscourse.js
│   ├── serverside/               ← nodejscourse.js · mysqlcourse.js · fullstackcourse.js
│   └── hosting/                  ← hostingcourse.js
└── script/
    └── script.js                 ← All client-side logic
```

## Run Locally

No installation required — the project is a pure static website.

```bash
# Clone the repo
git clone https://github.com/mkbantu/web-start-learn-design.git

# Open in browser
open web-start-learn-design/index.html

# Or serve with live-reload (requires Node.js)
npx live-server web-start-learn-design/
```

## Technology

- **HTML5** — semantic structure, `<details>` / `<summary>` for nav dropdowns
- **CSS3** — Flexbox, Grid, custom properties, `@media` queries, no framework
- **Vanilla JavaScript ES6+** — course rendering, localStorage, theme toggle
- **Vercel** — free static hosting, auto-deploys from GitHub on every push

## Planned (Phase 2)

- Admin dashboard for teachers to upload/edit lesson content (stored in MySQL `COURSE` table)
- Server-side progress tracking — `COURSE_VIEW` table replaces localStorage so progress is visible on any device
- Subscription form POST endpoint — student data saved to `USER` table
- Automated lesson delivery via Email and WhatsApp

## Status

Phase 1 (full front-end) is complete and live. Phase 2 (Node.js + MySQL back-end) is designed and planned.

