let courseLabel = "Full Stack";

let course = [
  {
    id: "fs-introduction",
    Title: "What is Full-Stack Development?",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "A full-stack developer builds both the front-end (what the user sees) and the back-end (the server and database behind it). The front-end is HTML, CSS, and JavaScript running in the browser. The back-end is a server (Node.js + Express) that handles data, and a database (MySQL) that stores it permanently. Full-stack means you can build a complete working web application from scratch, alone.",
    exampleCode: `Full-Stack Web Application Structure:

┌─────────────────────────────────────┐
│           BROWSER (Front-End)        │
│   HTML + CSS + JavaScript            │
│   Sends requests → Receives data     │
└──────────────┬──────────────────────┘
               │  HTTP Request (fetch)
               ▼
┌─────────────────────────────────────┐
│           SERVER (Back-End)          │
│   Node.js + Express                  │
│   Handles routes, logic, auth        │
└──────────────┬──────────────────────┘
               │  SQL Query
               ▼
┌─────────────────────────────────────┐
│           DATABASE                   │
│   MySQL                              │
│   Stores users, courses, progress    │
└─────────────────────────────────────┘`
  },
  {
    id: "fs-how-web-works",
    Title: "How the Web Works (Full-Stack View)",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "Every time a user visits a page or clicks a button, the browser sends an HTTP request to the server. The server processes it — reads from or writes to the database — then sends back a response (HTML, JSON, or a status code). Understanding this request-response cycle is the foundation of full-stack development. Every feature you build follows this same pattern.",
    exampleCode: `Request-Response Cycle:

1. User clicks "Mark Done" on a lesson
   → Browser sends:
     POST /api/progress
     Body: { userId: 5, courseId: 12 }

2. Express server receives the request:
   app.post('/api/progress', async (req, res) => {
     const { userId, courseId } = req.body;
     ...
   })

3. Server queries the database:
   INSERT INTO course_view (UserID, CourseID)
   VALUES (5, 12)

4. Server sends back a response:
   res.json({ message: 'Progress saved!' })

5. Browser receives the response:
   → Button turns green ✓`
  },
  {
    id: "fs-project-setup",
    Title: "Setting Up a Full-Stack Project",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "A full-stack project has two parts in one folder: the front-end (your HTML/CSS/JS files) and the back-end (your Node.js server). You initialise npm, install Express and mysql2, create a server.js entry point, and serve your front-end files from Express using express.static(). This is exactly how WebStart Phase 2 will be structured.",
    exampleCode: `Project folder structure:

webstart/
├── public/              ← Front-end (served by Express)
│   ├── index.html
│   ├── css/
│   ├── html/
│   ├── data/
│   └── script/
├── server.js            ← Express server (entry point)
├── routes/
│   ├── courses.js       ← /api/courses routes
│   └── progress.js      ← /api/progress routes
├── db.js                ← MySQL connection pool
├── .env                 ← Secrets (never push to GitHub)
├── .gitignore
└── package.json

// Terminal setup:
npm init -y
npm install express mysql2 dotenv
npm install nodemon --save-dev`
  },
  {
    id: "fs-express-server",
    Title: "Building the Express Server",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "server.js is the entry point of your back-end. It creates the Express app, registers middleware (body parsers), mounts route files, serves the public folder, and starts listening on a port. Keeping the server file clean by splitting routes into separate files makes the codebase easy to maintain as it grows.",
    exampleCode: `// server.js
require('dotenv').config();
const express  = require('express');
const path     = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve front-end files
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api/courses',  require('./routes/courses'));
app.use('/api/progress', require('./routes/progress'));
app.use('/api/users',    require('./routes/users'));

// All other requests → serve front-end
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));`
  },
  {
    id: "fs-database-connection",
    Title: "Connecting to MySQL",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Create a db.js file that sets up a mysql2 connection pool. A pool reuses database connections instead of opening a new one for every request — much faster and more efficient. Export the pool so every route file can import and use it. Store all credentials in .env so they never appear in your code.",
    exampleCode: `// db.js
require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host:               process.env.DB_HOST,
  user:               process.env.DB_USER,
  password:           process.env.DB_PASSWORD,
  database:           process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit:    10
});

module.exports = pool;

// .env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=webstart
PORT=3000

// Using the pool in a route:
const pool = require('../db');
const [rows] = await pool.query('SELECT * FROM course');`
  },
  {
    id: "fs-rest-api-courses",
    Title: "REST API — Courses",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "The courses route handles everything related to lesson content. GET /api/courses returns all courses from the database so the front-end can render the sidebar and lesson articles — replacing the static JS data files. POST /api/courses (admin only) inserts a new lesson. This is the core of the admin content-management feature planned for WebStart Phase 2.",
    exampleCode: `// routes/courses.js
const express = require('express');
const router  = express.Router();
const pool    = require('../db');

// GET all courses
router.get('/', async (req, res) => {
  const [courses] = await pool.query(
    'SELECT * FROM course ORDER BY PublishDate DESC'
  );
  res.json(courses);
});

// GET one course by ID
router.get('/:id', async (req, res) => {
  const [rows] = await pool.query(
    'SELECT * FROM course WHERE CourseID = ?',
    [req.params.id]
  );
  if (!rows.length) return res.status(404).json({ error: 'Not found' });
  res.json(rows[0]);
});

// POST — admin adds a new course
router.post('/', async (req, res) => {
  const { title, description, category, videoFile, adminId } = req.body;
  const [result] = await pool.query(
    'INSERT INTO course (Title,Description,Category,VideoFile,PublishDate,AdminID) VALUES (?,?,?,?,NOW(),?)',
    [title, description, category, videoFile, adminId]
  );
  res.status(201).json({ id: result.insertId });
});

module.exports = router;`
  },
  {
    id: "fs-rest-api-progress",
    Title: "REST API — Student Progress",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "The progress route saves and retrieves which lessons a student has completed. POST /api/progress is called when a student clicks Mark Done — it inserts a row into course_view. GET /api/progress/:userId returns the list of completed course IDs so the front-end can highlight them. This replaces localStorage with real server-side tracking.",
    exampleCode: `// routes/progress.js
const express = require('express');
const router  = express.Router();
const pool    = require('../db');

// GET — which lessons has this student completed?
router.get('/:userId', async (req, res) => {
  const [rows] = await pool.query(
    'SELECT CourseID FROM course_view WHERE UserID = ?',
    [req.params.userId]
  );
  res.json(rows.map(r => r.CourseID));
});

// POST — mark a lesson as done
router.post('/', async (req, res) => {
  const { userId, courseId } = req.body;
  // Avoid duplicate entries:
  const [existing] = await pool.query(
    'SELECT ViewID FROM course_view WHERE UserID=? AND CourseID=?',
    [userId, courseId]
  );
  if (existing.length) return res.json({ message: 'Already done' });
  await pool.query(
    'INSERT INTO course_view (UserID, CourseID, ViewDate) VALUES (?,?,NOW())',
    [userId, courseId]
  );
  res.status(201).json({ message: 'Progress saved!' });
});

module.exports = router;`
  },
  {
    id: "fs-frontend-fetch",
    Title: "Connecting Front-End to the API",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "The front-end uses the fetch API to communicate with the Express server. Instead of reading from a static JS array, script.js sends a GET request to /api/courses to load lesson content. When a student clicks Mark Done, it sends a POST to /api/progress. The UI updates based on the server's response. This is the bridge that makes the whole full-stack app work.",
    exampleCode: `// In script.js — load courses from the API instead of a static file:
async function initCourse() {
  const res     = await fetch('/api/courses');
  const courses = await res.json();
  buildSidebar(courses);
  display(courses[0]);
}

// Load student progress on startup:
async function loadProgress(userId) {
  const res  = await fetch('/api/progress/' + userId);
  const done = await res.json(); // [3, 7, 12, ...]
  done.forEach(id => markSidebarDone(id));
}

// Mark a lesson done — save to server:
async function markDone(userId, courseId) {
  const res  = await fetch('/api/progress', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ userId, courseId })
  });
  const data = await res.json();
  console.log(data.message); // 'Progress saved!'
}`
  },
  {
    id: "fs-authentication",
    Title: "User Authentication",
    videoSource: "https://www.youtube.com/embed/mbsmsi7l3r4",
    description: "Authentication proves who a user is. The most common approaches are sessions (server stores login state) and JWT (JSON Web Tokens — server sends a signed token the client stores and sends with every request). For the WebStart admin panel, the admin logs in with username + password. The password is hashed using bcrypt before storing — never store plain-text passwords. Every admin-only route checks the token before executing.",
    exampleCode: `// npm install bcrypt jsonwebtoken

const bcrypt = require('bcrypt');
const jwt    = require('jsonwebtoken');

// Register admin (one-time setup):
const hash = await bcrypt.hash('mypassword', 10);
// INSERT INTO admin (Username, Password) VALUES ('admin1', hash)

// Login route:
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await pool.query(
    'SELECT * FROM admin WHERE Username = ?', [username]
  );
  if (!rows.length) return res.status(401).json({ error: 'Not found' });
  const match = await bcrypt.compare(password, rows[0].Password);
  if (!match)  return res.status(401).json({ error: 'Wrong password' });
  const token = jwt.sign({ id: rows[0].AdminID }, process.env.JWT_SECRET);
  res.json({ token });
});

// Middleware to protect admin routes:
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  try { req.admin = jwt.verify(token, process.env.JWT_SECRET); next(); }
  catch { res.status(401).json({ error: 'Unauthorised' }); }
}`
  },
  {
    id: "fs-admin-panel",
    Title: "Admin Panel — Content Management",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "The admin panel is a private web page where the administrator logs in and manages course content. It shows all existing courses in a table, provides a form to add new lessons, and allows editing or deleting existing ones. The front-end sends requests to the protected API routes (with the JWT token in the Authorization header). No code editing or redeployment is needed to update lesson content.",
    exampleCode: `// admin.html front-end — add a new course:
async function addCourse(event) {
  event.preventDefault();
  const token = localStorage.getItem('adminToken');

  const body = {
    title:       document.getElementById('title').value,
    description: document.getElementById('desc').value,
    category:    document.getElementById('category').value,
    videoFile:   document.getElementById('video').value,
    adminId:     1
  };

  const res = await fetch('/api/courses', {
    method:  'POST',
    headers: {
      'Content-Type':  'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(body)
  });

  const data = await res.json();
  if (data.id) alert('Course added! ID: ' + data.id);
}

// Protected route in Express:
router.post('/', auth, async (req, res) => {
  // auth middleware runs first — only admins reach here
  ...
});`
  },
  {
    id: "fs-deploy",
    Title: "Deploying Full-Stack to Railway",
    videoSource: "https://www.youtube.com/embed/NU8xDQzPJTw",
    description: "Railway hosts both your Node.js server and your MySQL database together for free. Push your project to GitHub, connect Railway to the repo, add a MySQL database service, and set your environment variables in the Railway dashboard. Railway reads the start script from package.json, installs dependencies, and your full-stack app is live with a public URL.",
    exampleCode: `// 1. Add start script to package.json:
{
  "scripts": {
    "start": "node server.js",
    "dev":   "nodemon server.js"
  }
}

// 2. Create .gitignore:
node_modules/
.env

// 3. Push to GitHub:
git init
git add .
git commit -m "Full-stack app ready to deploy"
git remote add origin https://github.com/you/webstart.git
git push -u origin main

// 4. Railway dashboard:
//    New Project → Deploy from GitHub → Select repo
//    New → Database → MySQL
//    Variables → Add: DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET

// 5. Run your SQL schema on the Railway MySQL:
//    Railway dashboard → MySQL → Connect → run CREATE TABLE statements

// App goes live at: https://webstart.up.railway.app`
  },
  {
    id: "fs-full-project",
    Title: "Complete Project — WebStart Phase 2",
    videoSource: "https://www.youtube.com/embed/ysEN5RaKOlA",
    description: "Putting it all together: the complete WebStart Phase 2 application. The front-end (HTML/CSS/JS) is served by Express from the public/ folder. The admin logs in, adds courses via the dashboard — they appear instantly for all students. Students visit the site, their UserID is created automatically, and every Mark Done click saves to the database. Their progress is visible from any device.",
    exampleCode: `Complete data flow summary:

ADMIN SIDE:
  Admin → POST /api/login → receives JWT token
  Admin → POST /api/courses (with token) → lesson saved to DB
  Front-end fetches GET /api/courses → renders sidebar + articles

STUDENT SIDE:
  Student visits site → GET /api/users/me → UserID assigned
  Student loads lesson → GET /api/progress/:userId → done lessons highlighted
  Student clicks ✓ → POST /api/progress → saved to course_view table
  Student opens site on phone → same progress shown (from DB, not localStorage)

ADMIN SEES:
  Dashboard shows:
  - Total students subscribed
  - Most completed lessons
  - Last active dates
  All from: SELECT COUNT(*), CourseID FROM course_view GROUP BY CourseID`
  }
];
