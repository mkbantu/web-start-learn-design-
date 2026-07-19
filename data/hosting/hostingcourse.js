let courseLabel = "Hosting";

let course = [
  {
    id: "hosting-introduction",
    Title: "What is Web Hosting?",
    videoSource: "https://www.youtube.com/embed/d3PtE8gQUAw",
    description: "Web hosting means storing your website files on a computer (server) that is connected to the internet 24/7 so that anyone in the world can visit it. Without hosting, your website only works on your own laptop. The hosting server has an IP address, and DNS (Domain Name System) maps your domain name (like webstart.rw) to that IP so visitors can find it by name.",
    exampleCode: `How a hosted website works:

1. You build your website files (HTML, CSS, JS)
2. You upload them to a hosting server
3. The server gets a public IP address (e.g. 76.223.54.15)
4. A domain name (webstart.rw) points to that IP via DNS
5. Visitor types webstart.rw in browser
6. DNS looks up the IP address
7. Browser sends request to that IP
8. Server responds with your HTML file
9. Browser renders the page`
  },
  {
    id: "hosting-static-vs-dynamic",
    Title: "Static vs Dynamic Hosting",
    videoSource: "https://www.youtube.com/embed/d3PtE8gQUAw",
    description: "Static hosting serves only HTML, CSS, and JavaScript files — no server-side code runs. It is fast, cheap (often free), and simple. Dynamic hosting runs a server (Node.js, PHP, Python) that can execute code, connect to a database, and generate pages on demand. Static hosting is perfect for WebStart Phase 1. Dynamic hosting is needed for Phase 2 (admin panel + student tracking).",
    exampleCode: `Static hosting (Phase 1 — current):
  Files: HTML + CSS + JS only
  Server: None (files served directly)
  Database: None (localStorage only)
  Platforms: Vercel, Netlify, GitHub Pages
  Cost: Free

Dynamic hosting (Phase 2 — planned):
  Files: HTML + CSS + JS + Node.js server
  Server: Node.js + Express runs on the host
  Database: MySQL (also on the host or separate)
  Platforms: Railway, Render, VPS (DigitalOcean)
  Cost: Free tier available on Railway/Render`
  },
  {
    id: "hosting-github",
    Title: "GitHub — Version Control",
    videoSource: "https://www.youtube.com/embed/RGOj5yH7evk",
    description: "GitHub is where you store your code online. It uses Git — a version control system that tracks every change you make. Before deploying to any hosting platform, you push your project to a GitHub repository. Most hosting platforms (Vercel, Netlify, Railway) connect directly to GitHub — when you push new code, they automatically redeploy your site.",
    exampleCode: `-- Initial setup (once):
git config --global user.name "Mukundabantu"
git config --global user.email "mkbantu56@gmail.com"

-- Start tracking a project:
cd my-project
git init
git add .
git commit -m "Initial commit"

-- Push to GitHub (after creating repo online):
git remote add origin https://github.com/mkbantu/webstart.git
git push -u origin main

-- Update after making changes:
git add .
git commit -m "Add Node.js backend"
git push`
  },
  {
    id: "hosting-github-pages",
    Title: "GitHub Pages — Free Static Hosting",
    videoSource: "https://www.youtube.com/embed/RGOj5yH7evk",
    description: "GitHub Pages hosts static websites directly from a GitHub repository — completely free. Your site gets a URL like username.github.io/repo-name. Any file in your repository is served publicly. It is ideal for portfolios, project demos, and small static sites. No server configuration needed.",
    exampleCode: `-- Steps to deploy on GitHub Pages:

1. Push your project to a GitHub repository

2. Go to: github.com/username/repo-name
   → Settings → Pages

3. Source: Deploy from a branch
   Branch: main   Folder: / (root)
   Click Save

4. Your site is live at:
   https://username.github.io/repo-name/

-- Limitations:
-- Static files only (no Node.js, no database)
-- All files in the repo are public
-- Custom domain supported (free)
-- HTTPS provided automatically`
  },
  {
    id: "hosting-vercel",
    Title: "Vercel — Static + Serverless",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Vercel is the platform currently hosting WebStart at web-start-learn-design.vercel.app. It is free, connects to GitHub, and automatically redeploys when you push new code. Vercel also supports serverless functions — small pieces of Node.js code that run on demand. This means Phase 2 API endpoints (like POST /api/progress) can also run on Vercel without a full server.",
    exampleCode: `-- Deploy a static site on Vercel:

1. Push code to GitHub

2. Go to vercel.com → Log in with GitHub

3. Click "Add New Project"
   → Import your GitHub repository
   → Framework Preset: Other (for plain HTML/CSS/JS)
   → Click Deploy

4. Live in 30 seconds at:
   https://your-project.vercel.app

-- Auto-deploy on push:
-- Every git push to main triggers a new deployment
-- Preview deployments for every branch

-- For Phase 2 (serverless API):
-- Create /api/progress.js file
-- Vercel runs it as a serverless function`
  },
  {
    id: "hosting-netlify",
    Title: "Netlify — Free Static Hosting",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Netlify is a popular alternative to Vercel for static hosting. It is free, connects to GitHub, and deploys automatically on every push. Netlify also supports forms (you can submit a form without a back-end), redirects, and serverless functions. It is a good choice if you want free form handling without writing a server.",
    exampleCode: `-- Deploy on Netlify:

1. Push code to GitHub

2. Go to app.netlify.com → Log in with GitHub

3. "Add new site" → Import from GitHub
   → Select repository → Deploy site

4. Live at: random-name.netlify.app

-- Netlify Forms (no back-end needed):
-- Add netlify attribute to your <form>:
<form name="subscribe" method="POST" netlify>
  <input name="email" type="email">
  <button type="submit">Subscribe</button>
</form>
-- Netlify captures submissions automatically
-- View them in the Netlify dashboard

-- Custom domain: Settings → Domain management → Add domain`
  },
  {
    id: "hosting-railway",
    Title: "Railway — Full-Stack Hosting",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Railway hosts Node.js servers and MySQL databases together — exactly what WebStart Phase 2 needs. The free tier gives you $5 of usage per month which covers a small project. You connect Railway to GitHub, and it automatically detects that your project uses Node.js (by reading package.json). Railway also provides a free MySQL database you can attach to your project.",
    exampleCode: `-- Deploy Node.js + MySQL on Railway:

1. Push your Node.js project to GitHub
   (must have package.json with a start script)

2. Go to railway.app → New Project
   → Deploy from GitHub repo
   → Railway detects Node.js automatically

3. Add a MySQL database:
   → New → Database → MySQL
   → Railway provides DATABASE_URL automatically

4. Add start script to package.json:
{
  "scripts": {
    "start": "node server.js"
  }
}

5. Set environment variables in Railway dashboard:
   DB_HOST, DB_USER, DB_PASSWORD, DB_NAME

6. Your app is live at:
   https://your-app.up.railway.app`
  },
  {
    id: "hosting-render",
    Title: "Render — Free Full-Stack Hosting",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Render is another free platform for hosting Node.js apps and databases. The free tier for web services spins down after 15 minutes of inactivity (the first request after idle takes ~30 seconds to wake up). Paid plans ($7/month) stay always-on. Render also offers a free PostgreSQL database — PostgreSQL is similar to MySQL but uses slightly different SQL syntax.",
    exampleCode: `-- Deploy on Render:

1. Push project to GitHub

2. Go to render.com → New → Web Service
   → Connect GitHub → Select repo
   → Runtime: Node
   → Build Command: npm install
   → Start Command: node server.js
   → Click Create Web Service

3. Add a free database:
   → New → PostgreSQL (free tier)
   → Copy the connection string

4. Add environment variable in Render:
   DATABASE_URL = (paste connection string)

5. Live at: https://your-app.onrender.com

-- Note: Free tier sleeps after inactivity
-- First request after sleep takes ~30 seconds`
  },
  {
    id: "hosting-domain",
    Title: "Domain Names & DNS",
    videoSource: "https://www.youtube.com/embed/d3PtE8gQUAw",
    description: "A domain name (like webstart.rw) is your website's address. You buy it from a domain registrar (Namecheap, GoDaddy, or the Rwanda registrar RICTA for .rw domains). After buying, you point the domain to your hosting platform by updating DNS records. A CNAME record points your domain to a Vercel/Netlify/Railway URL. An A record points to an IP address.",
    exampleCode: `-- Adding a custom domain to Vercel:

1. Buy domain from Namecheap / RICTA (.rw)

2. In Vercel: Settings → Domains → Add domain
   Enter: webstart.rw → Add

3. Vercel gives you DNS records to add:
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com

   Type: A
   Name: @
   Value: 76.76.21.21

4. Go to your domain registrar → DNS settings
   → Add those records

5. Wait 5-60 minutes for DNS propagation

6. Your site is now live at:
   https://webstart.rw (with HTTPS automatically)`
  },
  {
    id: "hosting-environment-variables",
    Title: "Environment Variables",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Environment variables store sensitive information (database passwords, API keys) outside your code. You never put passwords directly in your JavaScript files because they would be visible on GitHub. On your local machine, you use a .env file (add it to .gitignore). On hosting platforms, you set them in the dashboard. The dotenv package reads .env files in Node.js.",
    exampleCode: `// npm install dotenv

// .env file (LOCAL only — never push to GitHub):
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=mySecretPassword
DB_NAME=webstart
PORT=3000

// .gitignore — exclude .env from git:
.env
node_modules/

// server.js — load .env:
require('dotenv').config();

const pool = mysql.createPool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// On hosting platforms (Vercel, Railway, Render):
// Add DB_HOST, DB_USER, DB_PASSWORD, DB_NAME
// in the dashboard Environment Variables section`
  }
];
