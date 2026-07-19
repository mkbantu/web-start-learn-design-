let courseLabel = "Node.js";

let course = [
  {
    id: "node-introduction",
    Title: "Node.js Introduction",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "Node.js is a JavaScript runtime built on Chrome's V8 engine. It lets you run JavaScript on the server — outside the browser. Before Node.js, JavaScript could only run in a browser. Now you can use the same language for both the front-end and the back-end of a web application.",
    exampleCode: `// Without Node.js: JS only ran in browsers
// With Node.js: JS runs on a server

// Check your Node.js version in the terminal:
node --version

// Run a JavaScript file:
node myfile.js`
  },
  {
    id: "node-installation",
    Title: "Node.js Installation",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "Download Node.js from nodejs.org. Choose the LTS (Long Term Support) version — it is the most stable. Installing Node.js also installs npm (Node Package Manager) automatically. npm lets you install thousands of free packages (libraries) for your projects.",
    exampleCode: `// After installing, verify in your terminal:
node --version     // e.g. v20.11.0
npm --version      // e.g. 10.2.4

// Create your first Node.js file — hello.js:
console.log("Hello from Node.js!");

// Run it:
node hello.js
// Output: Hello from Node.js!`
  },
  {
    id: "node-modules",
    Title: "Node.js Modules",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "A module is a reusable block of code saved in its own file. Node.js uses the CommonJS module system — you export code from one file using module.exports and import it in another using require(). Node.js also has many built-in modules (fs, path, http, os) that you can use without installing anything.",
    exampleCode: `// math.js — export a function
function add(a, b) { return a + b; }
module.exports = { add };

// app.js — import and use it
const math = require('./math');
console.log(math.add(3, 5)); // 8

// Built-in modules — no install needed:
const os   = require('os');
const path = require('path');
console.log(os.platform());       // win32 / linux / darwin
console.log(path.join('folder', 'file.txt')); // folder/file.txt`
  },
  {
    id: "node-npm",
    Title: "NPM — Node Package Manager",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "npm is the package manager for Node.js. It lets you install libraries written by other developers. Every Node.js project has a package.json file that lists the project name, version, and all its dependencies. Running npm install reads package.json and downloads everything the project needs.",
    exampleCode: `// Initialise a new project (creates package.json):
npm init -y

// Install a package:
npm install express

// Install a dev-only package (not needed in production):
npm install nodemon --save-dev

// package.json after installation:
{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}`
  },
  {
    id: "node-filesystem",
    Title: "Node.js File System (fs)",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "The built-in fs (File System) module lets your Node.js program read files, write files, create folders, and delete files on the computer. There are synchronous (blocking) and asynchronous (non-blocking) versions of each method. Always prefer asynchronous in servers so other requests are not blocked.",
    exampleCode: `const fs = require('fs');

// Write a file (async):
fs.writeFile('note.txt', 'Hello world!', (err) => {
  if (err) throw err;
  console.log('File saved!');
});

// Read a file (async):
fs.readFile('note.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // Hello world!
});

// Delete a file:
fs.unlink('note.txt', (err) => {
  if (err) throw err;
  console.log('File deleted');
});`
  },
  {
    id: "node-http",
    Title: "Node.js HTTP Server",
    videoSource: "https://www.youtube.com/embed/TlB_eWDSMt4",
    description: "The built-in http module lets you create a web server using only Node.js — no extra packages needed. The server listens on a port and responds to every incoming request. This is the foundation of how web servers work. In practice, most developers use Express (built on top of http) because it is much easier to use.",
    exampleCode: `const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Node.js Server!</h1>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});

// Visit http://localhost:3000 in your browser
// You will see: Hello from Node.js Server!`
  },
  {
    id: "express-introduction",
    Title: "Express.js Introduction",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "Express is a minimal and flexible Node.js web application framework. It makes it much easier to create web servers and APIs compared to using the raw http module. Express handles routing (what happens at each URL), middleware (functions that process requests), and responses. It is the most popular back-end framework for Node.js.",
    exampleCode: `// Install Express first:
// npm install express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Welcome to Express!</h1>');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`
  },
  {
    id: "express-routing",
    Title: "Express Routing",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "Routing means defining what your server does when a client visits a specific URL with a specific HTTP method (GET, POST, PUT, DELETE). In Express, each route is a function that takes a request object (req) and a response object (res). You can also use route parameters (:id) to capture values from the URL.",
    exampleCode: `const express = require('express');
const app = express();

// GET routes
app.get('/', (req, res) => res.send('Home Page'));
app.get('/about', (req, res) => res.send('About Page'));

// Route parameter — e.g. /user/123
app.get('/user/:id', (req, res) => {
  res.send('User ID: ' + req.params.id);
});

// Query string — e.g. /search?q=html
app.get('/search', (req, res) => {
  res.send('You searched: ' + req.query.q);
});

app.listen(3000);`
  },
  {
    id: "express-middleware",
    Title: "Express Middleware",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "Middleware are functions that run between receiving a request and sending a response. They can read the request, modify it, log information, check authentication, or end the request early. Every middleware function receives req, res, and next. Calling next() passes the request to the next middleware in the chain.",
    exampleCode: `const express = require('express');
const app = express();

// Parse JSON body (built-in middleware):
app.use(express.json());

// Parse form data (built-in middleware):
app.use(express.urlencoded({ extended: true }));

// Custom logging middleware:
app.use((req, res, next) => {
  console.log(req.method + ' ' + req.url);
  next(); // must call next() to continue
});

app.get('/', (req, res) => res.send('Hello!'));

app.listen(3000);`
  },
  {
    id: "express-post",
    Title: "Express — Handling POST Requests",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "When a form submits or a front-end sends data, it uses a POST request. The data arrives in req.body. You must add express.json() or express.urlencoded() middleware first so Express can parse the body. This is how your subscription form will eventually send student data to the server.",
    exampleCode: `const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handle form submission
app.post('/subscribe', (req, res) => {
  const { name, email, whatsapp } = req.body;
  console.log('New subscriber:', name, email, whatsapp);
  res.json({ message: 'Subscribed!', student: name });
});

app.listen(3000);

// Front-end sends:
// fetch('/subscribe', {
//   method: 'POST',
//   body: JSON.stringify({ name, email, whatsapp }),
//   headers: { 'Content-Type': 'application/json' }
// });`
  },
  {
    id: "express-rest-api",
    Title: "Express REST API",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "A REST API is a set of URL endpoints that a front-end can call to get or send data. Each endpoint corresponds to a resource (users, courses, progress). The HTTP method tells the server what to do: GET = read, POST = create, PUT/PATCH = update, DELETE = remove. The server responds with JSON.",
    exampleCode: `const express = require('express');
const app = express();
app.use(express.json());

let lessons = [
  { id: 1, title: 'HTML Introduction', done: false },
  { id: 2, title: 'CSS Basics', done: false }
];

// GET all lessons
app.get('/api/lessons', (req, res) => {
  res.json(lessons);
});

// POST — mark a lesson done
app.post('/api/progress', (req, res) => {
  const { lessonId, userId } = req.body;
  // In real app: INSERT into course_view table
  res.json({ message: 'Progress saved', lessonId, userId });
});

// DELETE a lesson
app.delete('/api/lessons/:id', (req, res) => {
  lessons = lessons.filter(l => l.id !== +req.params.id);
  res.json({ message: 'Deleted' });
});

app.listen(3000);`
  },
  {
    id: "express-static",
    Title: "Express Static Files",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "express.static() lets your Express server serve HTML, CSS, JavaScript, and image files directly. You point it at a folder, and any file inside becomes accessible by URL. This means your existing WebStart front-end (HTML/CSS/JS files) can be served by your new Node.js + Express backend in Phase 2.",
    exampleCode: `const express = require('express');
const app = express();

// Serve everything in the 'public' folder:
app.use(express.static('public'));

// If public/index.html exists, visiting / serves it
// If public/css/web.css exists, /css/web.css serves it

// You can also serve from a different path:
app.use('/static', express.static('public'));
// Now accessible at: /static/index.html

app.listen(3000, () => {
  console.log('Serving files on http://localhost:3000');
});`
  },
  {
    id: "express-mysql",
    Title: "Express + MySQL (mysql2)",
    videoSource: "https://www.youtube.com/embed/L72fhGm1tfE",
    description: "The mysql2 package connects your Express server to a MySQL database. You create a connection pool (handles multiple requests at the same time), then run SQL queries using pool.query(). This is how your Phase 2 server will read courses from the database and save student progress to the course_view table.",
    exampleCode: `// npm install mysql2

const mysql = require('mysql2');

const pool = mysql.createPool({
  host:     'localhost',
  user:     'root',
  password: 'yourpassword',
  database: 'webstart'
}).promise(); // .promise() lets us use async/await

// Get all courses from the database:
app.get('/api/courses', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM course');
  res.json(rows);
});

// Save student progress:
app.post('/api/progress', async (req, res) => {
  const { userId, courseId } = req.body;
  await pool.query(
    'INSERT INTO course_view (UserID, CourseID) VALUES (?, ?)',
    [userId, courseId]
  );
  res.json({ message: 'Progress saved!' });
});`
  }
];
