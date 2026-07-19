let courseLabel = "MySQL";

let course = [
  {
    id: "mysql-introduction",
    Title: "MySQL Introduction",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "MySQL is a free, open-source relational database management system (RDBMS). It stores data in tables — rows and columns — just like a spreadsheet. Tables are linked together using foreign keys. MySQL is one of the most widely used databases in the world and powers applications from small student projects to large platforms like Facebook and Twitter.",
    exampleCode: `-- SQL is the language used to talk to MySQL
-- Statements end with a semicolon (;)

-- Show all databases on the server:
SHOW DATABASES;

-- Create a new database:
CREATE DATABASE webstart;

-- Select (use) a database:
USE webstart;

-- Show all tables in the current database:
SHOW TABLES;`
  },
  {
    id: "mysql-installation",
    Title: "MySQL Installation",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Download MySQL Community Server free from mysql.com. During installation, set a root password — remember it, you will need it to connect. MySQL Workbench is the official free visual tool for managing your database with a GUI. Alternatively, XAMPP installs MySQL, Apache, and PHP together in one package — very common for beginners on Windows.",
    exampleCode: `-- After installation, connect via terminal:
mysql -u root -p
-- Enter your password when prompted

-- Or use MySQL Workbench (GUI):
-- File → New Connection → hostname: localhost
-- Port: 3306, Username: root

-- Check your MySQL version:
SELECT VERSION();

-- A successful connection looks like:
-- Welcome to the MySQL monitor.
-- mysql>`
  },
  {
    id: "mysql-create-database",
    Title: "Create Database & Tables",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "A database holds all the tables for one application. A table holds one type of record — for example, one table for users, one for courses. Every column in a table has a data type (INT, VARCHAR, TEXT, DATE, DATETIME) that controls what kind of data it can store. Every table should have a PRIMARY KEY — a unique ID for each row.",
    exampleCode: `-- Create the webstart database:
CREATE DATABASE webstart;
USE webstart;

-- Create the admin table:
CREATE TABLE admin (
  AdminID   INT AUTO_INCREMENT PRIMARY KEY,
  Username  VARCHAR(80)  NOT NULL UNIQUE,
  Password  VARCHAR(255) NOT NULL,
  Email     VARCHAR(150) NOT NULL UNIQUE
);

-- Create the course table:
CREATE TABLE course (
  CourseID    INT AUTO_INCREMENT PRIMARY KEY,
  Title       VARCHAR(200) NOT NULL,
  Description TEXT,
  Category    VARCHAR(80),
  VideoFile   VARCHAR(500),
  PublishDate DATE NOT NULL,
  AdminID     INT,
  FOREIGN KEY (AdminID) REFERENCES admin(AdminID)
);`
  },
  {
    id: "mysql-data-types",
    Title: "MySQL Data Types",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "Choosing the right data type is important — it controls how data is stored, how much space it uses, and what values are allowed. The most common types are INT (whole numbers), VARCHAR (short text with a max length), TEXT (long text), DATE (year-month-day), DATETIME (date plus time), and BOOLEAN (true/false, stored as 1/0 in MySQL).",
    exampleCode: `-- Common MySQL data types:

INT          -- Whole number:        42
TINYINT      -- Small number (0-255): used for boolean (0 or 1)
FLOAT/DOUBLE -- Decimal:             3.14
VARCHAR(100) -- Short text, max 100 chars: 'Hello'
TEXT         -- Long text, no limit:  'A long paragraph...'
DATE         -- Date only:           '2026-07-19'
DATETIME     -- Date + time:         '2026-07-19 14:30:00'
BOOLEAN      -- True/False (1/0)

-- Example table using various types:
CREATE TABLE user (
  UserID    INT AUTO_INCREMENT PRIMARY KEY,
  Name      VARCHAR(100),
  Email     VARCHAR(150),
  JoinDate  DATETIME DEFAULT NOW(),
  Active    TINYINT(1) DEFAULT 1
);`
  },
  {
    id: "mysql-insert",
    Title: "INSERT — Add Data",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "INSERT INTO adds new rows to a table. You list the column names, then the values in the same order. You can insert one row or multiple rows at once. AUTO_INCREMENT columns (like UserID) fill themselves automatically — you do not include them in the INSERT statement.",
    exampleCode: `-- Insert one user:
INSERT INTO user (Name, Email)
VALUES ('Mukundabantu', 'mkbantu56@gmail.com');

-- Insert multiple users at once:
INSERT INTO user (Name, Email) VALUES
  ('Alice', 'alice@email.com'),
  ('Bob',   'bob@email.com'),
  ('Carol', 'carol@email.com');

-- Insert a course (admin must exist first):
INSERT INTO admin (Username, Password, Email)
VALUES ('admin1', 'hashedpassword', 'admin@webstart.rw');

INSERT INTO course (Title, Description, Category, PublishDate, AdminID)
VALUES ('HTML Introduction', 'Learn HTML basics', 'HTML', '2026-07-01', 1);`
  },
  {
    id: "mysql-select",
    Title: "SELECT — Read Data",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "SELECT is the most used SQL statement. It reads data from a table. You can select all columns (*) or specific columns by name. SELECT does not change or delete any data — it only reads. Every time your website loads a page, it runs a SELECT to fetch the content from the database.",
    exampleCode: `-- Select all columns from user table:
SELECT * FROM user;

-- Select specific columns:
SELECT Name, Email FROM user;

-- Select with a condition (WHERE):
SELECT * FROM user WHERE Name = 'Alice';

-- Select a specific course by ID:
SELECT * FROM course WHERE CourseID = 1;

-- Count how many users exist:
SELECT COUNT(*) AS total_users FROM user;

-- Get the most recent 5 courses:
SELECT * FROM course ORDER BY PublishDate DESC LIMIT 5;`
  },
  {
    id: "mysql-where",
    Title: "WHERE — Filter Results",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "The WHERE clause filters rows — it only returns rows that match a condition. You can combine conditions with AND and OR. Use = for exact match, LIKE for pattern matching, IN for a list of values, and BETWEEN for a range. WHERE works with SELECT, UPDATE, and DELETE.",
    exampleCode: `-- Exact match:
SELECT * FROM user WHERE Email = 'alice@email.com';

-- Multiple conditions:
SELECT * FROM course WHERE Category = 'HTML' AND AdminID = 1;

-- LIKE — partial match (% = any characters):
SELECT * FROM user WHERE Name LIKE 'M%'; -- starts with M
SELECT * FROM course WHERE Title LIKE '%Introduction%';

-- IN — match any value in a list:
SELECT * FROM course WHERE Category IN ('HTML', 'CSS', 'JavaScript');

-- BETWEEN — range:
SELECT * FROM course WHERE PublishDate BETWEEN '2026-01-01' AND '2026-12-31';`
  },
  {
    id: "mysql-update",
    Title: "UPDATE — Edit Data",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "UPDATE changes existing rows in a table. Always include a WHERE clause — without it, every row in the table gets updated. Before running an UPDATE, run a SELECT with the same WHERE to check which rows will be affected.",
    exampleCode: `-- Update one user's email:
UPDATE user SET Email = 'new@email.com' WHERE UserID = 1;

-- Update multiple columns at once:
UPDATE course
SET Title = 'HTML Introduction (Updated)', Category = 'HTML'
WHERE CourseID = 1;

-- ALWAYS check before updating:
-- First run this:
SELECT * FROM user WHERE UserID = 1;
-- Then run:
UPDATE user SET Name = 'Mohammed' WHERE UserID = 1;

-- Without WHERE — updates EVERY row (dangerous!):
-- UPDATE user SET Active = 0;  ← do NOT do this accidentally`
  },
  {
    id: "mysql-delete",
    Title: "DELETE — Remove Data",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "DELETE removes rows from a table permanently. Like UPDATE, always use WHERE — without it, all rows are deleted. If the table has foreign key constraints, you may need to delete child records (e.g. course_view rows) before deleting the parent (e.g. the course). Use TRUNCATE to empty a whole table quickly.",
    exampleCode: `-- Delete one user:
DELETE FROM user WHERE UserID = 3;

-- Delete all progress records for a specific course:
DELETE FROM course_view WHERE CourseID = 2;

-- Delete a course (its views must be deleted first if FK exists):
DELETE FROM course_view WHERE CourseID = 1;
DELETE FROM course WHERE CourseID = 1;

-- Check before deleting:
SELECT * FROM user WHERE UserID = 3;
-- Then delete:
DELETE FROM user WHERE UserID = 3;

-- Empty an entire table (no undo!):
TRUNCATE TABLE course_view;`
  },
  {
    id: "mysql-join",
    Title: "JOIN — Combine Tables",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "JOIN combines rows from two or more tables based on a matching column (usually a foreign key). INNER JOIN returns only rows that have a match in both tables. LEFT JOIN returns all rows from the left table plus matched rows from the right (unmatched right rows appear as NULL). JOINs are how you answer questions that span multiple tables.",
    exampleCode: `-- Which student viewed which course?
SELECT u.Name, c.Title, cv.ViewDate
FROM course_view cv
INNER JOIN user   u ON cv.UserID   = u.UserID
INNER JOIN course c ON cv.CourseID = c.CourseID;

-- All users, even those with no course views (LEFT JOIN):
SELECT u.Name, cv.CourseID
FROM user u
LEFT JOIN course_view cv ON u.UserID = cv.UserID;

-- How many times was each course viewed?
SELECT c.Title, COUNT(cv.ViewID) AS views
FROM course c
LEFT JOIN course_view cv ON c.CourseID = cv.CourseID
GROUP BY c.CourseID, c.Title
ORDER BY views DESC;`
  },
  {
    id: "mysql-nodejs",
    Title: "MySQL with Node.js (mysql2)",
    videoSource: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "The mysql2 package connects Node.js to MySQL. You create a connection pool to handle multiple database requests at the same time, then run SQL queries with pool.query(). Using .promise() with async/await makes the code clean and readable. This is how WebStart Phase 2 will read lesson content from the database and save student progress.",
    exampleCode: `// npm install mysql2

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host:     'localhost',
  user:     'root',
  password: 'yourpassword',
  database: 'webstart'
});

// Fetch all courses (async/await):
async function getCourses() {
  const [rows] = await pool.query('SELECT * FROM course');
  return rows;
}

// Save student progress:
async function markDone(userId, courseId) {
  await pool.query(
    'INSERT INTO course_view (UserID, CourseID) VALUES (?, ?)',
    [userId, courseId]
  );
}

// Get a student's completed lessons:
async function getProgress(userId) {
  const [rows] = await pool.query(
    'SELECT CourseID FROM course_view WHERE UserID = ?',
    [userId]
  );
  return rows.map(r => r.CourseID);
}`
  }
];
