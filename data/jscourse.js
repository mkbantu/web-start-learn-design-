let course = [
  {
    id: "js-introduction",
    Title: "JavaScript Introduction",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "JavaScript is a programming language that makes web pages interactive. It runs in browsers and can also run on servers.",
    exampleCode: `<!-- Inline JavaScript -->
<button onclick="alert('Hello!')">Click me</button>

<!-- Internal JavaScript -->
<script>
  console.log('Hello, World!');
  let name = 'Alice';
  alert('Welcome, ' + name);
</script>

<!-- External JavaScript -->
<script src="app.js"></script>`
  },
  {
    id: "js-syntax",
    Title: "JavaScript Syntax",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "JavaScript syntax defines how JavaScript code is written and executed.",
    exampleCode: `// Variables
let message = 'Hello';
const PI = 3.14159;
var x = 10;  // old style

// Statements
console.log('This is executed');

// Operators
let sum = 5 + 3;
let name = 'John';

// Comments
// Single line comment
/* Multi-line
   comment */`
  },
  {
    id: "js-statements",
    Title: "JavaScript Statements",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Statements are executable instructions that perform actions.",
    exampleCode: `// Variable declaration
let x = 5;

// Expression statement
x = x + 1;

// Function call
console.log(x);

// Conditional
if (x > 5) {
  console.log('Greater');
}

// Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}`
  },
  {
    id: "js-comments",
    Title: "JavaScript Comments",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Comments explain code and are ignored by JavaScript engines.",
    exampleCode: `// Single-line comment

/* Multi-line comment
   explaining code
   in multiple lines */

// TODO: Add validation
// FIXME: Fix performance issue`
  },
  {
    id: "js-variables",
    Title: "JavaScript Variables",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Variables store data values. Use let or const (avoid var).",
    exampleCode: `// let - block-scoped, can be reassigned
let age = 25;
age = 26;

// const - block-scoped, cannot be reassigned
const PI = 3.14159;

// var - function-scoped (avoid)
var name = 'John';

// Multiple declarations
let x = 1, y = 2, z = 3;

// Without declaration (creates global)
message = 'Hello'; // Bad practice`
  },
  {
    id: "js-data-types",
    Title: "JavaScript Data Types",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Data types define what kind of data a variable can hold.",
    exampleCode: `// String
let text = 'Hello';
let name = "World";

// Number (integer and decimal)
let age = 25;
let price = 19.99;

// Boolean
let isOpen = true;
let isClosed = false;

// Undefined
let x;

// Null
let obj = null;

// Object
let person = { name: 'Alice', age: 30 };

// Array
let colors = ['red', 'green', 'blue'];`
  },
  {
    id: "js-operators",
    Title: "JavaScript Operators",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Operators perform operations on variables and values.",
    exampleCode: `// Arithmetic
let sum = 10 + 5;   // 15
let diff = 10 - 5;  // 5
let product = 10 * 5; // 50
let quotient = 10 / 5; // 2
let remainder = 10 % 3; // 1
let power = 2 ** 3; // 8

// Comparison
10 > 5;      // true
10 < 5;      // false
10 == 10;    // true
10 === '10'; // false (strict)

// Logical
true && false;  // false
true || false;  // true
!true;          // false`
  },
  {
    id: "js-string-methods",
    Title: "JavaScript String Methods",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Strings have built-in methods for manipulation.",
    exampleCode: `let text = 'Hello World';

text.length;              // 11
text.toUpperCase();       // 'HELLO WORLD'
text.toLowerCase();       // 'hello world'
text.indexOf('World');    // 6
text.slice(0, 5);         // 'Hello'
text.substring(0, 5);     // 'Hello'
text.replace('World', 'JavaScript');
text.split(' ');          // ['Hello', 'World']
text.trim();              // removes whitespace
text.includes('World');   // true
text.startsWith('Hello'); // true
text.endsWith('World');   // true`
  },
  {
    id: "js-template-literals",
    Title: "JavaScript Template Literals",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Template literals use backticks and allow string interpolation.",
    exampleCode: `// Template literal with expressions
const name = 'Alice';
const age = 30;

const message = \`Hello, \${name}!\`;
const info = \`\${name} is \${age} years old\`;

// Multi-line strings
const text = \`
  Line 1
  Line 2
  Line 3
\`;

// Expressions in templates
const result = \`2 + 2 = \${2 + 2}\`;`
  },
  {
    id: "js-numbers",
    Title: "JavaScript Numbers",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Numbers can be integers, decimals, or special values like Infinity and NaN.",
    exampleCode: `// Integer and decimal
let x = 42;
let y = 3.14;

// Scientific notation
let big = 1e6;   // 1,000,000
let small = 1e-6; // 0.000001

// Special values
let inf = Infinity;
let negInf = -Infinity;
let notNum = NaN;   // Not-a-Number

// Number methods
let num = 3.14159;
num.toFixed(2);     // '3.14'
num.toExponential(2); // '3.14e+0'
Number.isInteger(42); // true
Number.isNaN(NaN);    // true`
  },
  {
    id: "js-math-object",
    Title: "JavaScript Math Object",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "The Math object provides mathematical functions and constants.",
    exampleCode: `// Constants
Math.PI;        // 3.14159...
Math.E;         // 2.71828...

// Methods
Math.abs(-5);           // 5
Math.round(4.6);        // 5
Math.floor(4.9);        // 4
Math.ceil(4.1);         // 5
Math.pow(2, 3);         // 8
Math.sqrt(16);          // 4
Math.max(3, 7, 2);      // 7
Math.min(3, 7, 2);      // 2
Math.random();          // 0 to 1
Math.sin(Math.PI / 2);  // 1
Math.cos(0);            // 1`
  },
  {
    id: "js-arrays",
    Title: "JavaScript Arrays",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Arrays store multiple values in a single variable.",
    exampleCode: `// Array creation
let arr = [1, 2, 3, 4, 5];
let mixed = [1, 'hello', true, null];

// Access elements
arr[0];       // 1
arr.length;   // 5

// Modify elements
arr[0] = 10;

// Array methods
arr.push(6);           // add to end
arr.pop();             // remove from end
arr.unshift(0);        // add to start
arr.shift();           // remove from start
arr.includes(3);       // true
arr.indexOf(2);        // 1
arr.slice(1, 3);       // [2, 3]
arr.splice(1, 1, 99);  // remove and insert
arr.join('-');         // '1-2-3'
arr.reverse();         // reverses array`
  },
  {
    id: "js-array-methods",
    Title: "JavaScript Array Methods",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Array methods for iteration and transformation.",
    exampleCode: `let numbers = [1, 2, 3, 4, 5];

// forEach - iterate
numbers.forEach(n => console.log(n));

// map - transform
let doubled = numbers.map(n => n * 2); // [2,4,6,8,10]

// filter - select
let evens = numbers.filter(n => n % 2 === 0); // [2,4]

// reduce - aggregate
let sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - first match
numbers.find(n => n > 3); // 4

// some - any match
numbers.some(n => n > 3); // true

// every - all match
numbers.every(n => n > 0); // true

// sort
let sorted = numbers.sort((a, b) => a - b);`
  },
  {
    id: "js-objects",
    Title: "JavaScript Objects",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Objects store key-value pairs representing entities.",
    exampleCode: `// Object literal
let person = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
  address: {
    city: 'New York',
    zip: '10001'
  }
};

// Access properties
person.name;           // 'Alice'
person['age'];         // 30
person.address.city;   // 'New York'

// Modify properties
person.age = 31;
person.job = 'Engineer'; // add new

// Delete property
delete person.job;

// Check property
'name' in person;      // true
person.hasOwnProperty('name'); // true`
  },
  {
    id: "js-functions",
    Title: "JavaScript Functions",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Functions are reusable blocks of code.",
    exampleCode: `// Function declaration
function greet(name) {
  return 'Hello, ' + name;
}

// Function expression
const add = function(a, b) {
  return a + b;
};

// Arrow function
const multiply = (a, b) => {
  return a * b;
};

// Concise arrow function
const square = x => x * x;

// Default parameters
function welcome(name = 'Guest') {
  return 'Welcome, ' + name;
}

// Function call
greet('Alice');        // 'Hello, Alice'
add(2, 3);            // 5
multiply(4, 5);       // 20`
  },
  {
    id: "js-conditionals",
    Title: "JavaScript Conditionals",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Conditionals execute code based on conditions.",
    exampleCode: `// if statement
if (age > 18) {
  console.log('Adult');
}

// if-else
if (score > 80) {
  console.log('A');
} else {
  console.log('B');
}

// if-else if-else
if (score > 90) {
  console.log('A');
} else if (score > 80) {
  console.log('B');
} else {
  console.log('C');
}

// Ternary operator
const status = age > 18 ? 'Adult' : 'Minor';

// Switch statement
switch (day) {
  case 'Monday': console.log('Start of week'); break;
  case 'Friday': console.log('Almost weekend'); break;
  default: console.log('Midweek');
}`
  },
  {
    id: "js-loops",
    Title: "JavaScript Loops",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Loops repeat code blocks while conditions are true.",
    exampleCode: `// for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop
let x = 0;
while (x < 5) {
  console.log(x);
  x++;
}

// do-while loop
let y = 0;
do {
  console.log(y);
  y++;
} while (y < 5);

// for-of loop (arrays)
for (const num of [1, 2, 3]) {
  console.log(num);
}

// for-in loop (objects)
for (const key in person) {
  console.log(key, person[key]);
}

// break and continue
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // skip
  if (i === 4) break;    // exit
}`
  },
  {
    id: "js-error-handling",
    Title: "JavaScript Error Handling",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Error handling manages exceptions gracefully.",
    exampleCode: `// try-catch
try {
  riskyFunction();
} catch (error) {
  console.log('Error:', error.message);
}

// try-catch-finally
try {
  openFile();
} catch (e) {
  console.log('Error:', e);
} finally {
  closeFile(); // always runs
}

// throw error
function validate(age) {
  if (age < 0) {
    throw new Error('Age cannot be negative');
  }
}

// Custom error
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}`
  },
  {
    id: "js-classes",
    Title: "JavaScript Classes",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Classes are blueprints for creating objects with properties and methods.",
    exampleCode: `// Class definition
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return \`Hello, I'm \${this.name}\`;
  }

  static info() {
    return 'Person class';
  }
}

// Create instance
const person1 = new Person('Alice', 30);
person1.greet(); // 'Hello, I'm Alice'

// Inheritance
class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  work() {
    return \`\${this.name} is working as \${this.jobTitle}\`;
  }
}`
  },
  {
    id: "js-scope",
    Title: "JavaScript Scope",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Scope determines where variables are accessible.",
    exampleCode: `// Global scope
var global = 'global';

function myFunction() {
  // Function scope
  var local = 'local';
  let blockScoped = 'block';
  
  if (true) {
    // Block scope
    let innerBlock = 'inner';
    console.log(blockScoped); // accessible
  }
  
  console.log(innerBlock); // Error: not defined
}

// Closure
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
counter(); // 1
counter(); // 2`
  },
  {
    id: "js-hoisting",
    Title: "JavaScript Hoisting",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Hoisting moves declarations to the top of their scope.",
    exampleCode: `// Function declarations are hoisted
greet(); // works

function greet() {
  console.log('Hello!');
}

// var declarations are hoisted (undefined)
console.log(x); // undefined
var x = 5;
console.log(x); // 5

// let and const not hoisted (temporal dead zone)
console.log(y); // ReferenceError
let y = 10;

// Function expressions not hoisted
add(2, 3); // TypeError
const add = function(a, b) {
  return a + b;
};`
  },
  {
    id: "js-callbacks",
    Title: "JavaScript Callbacks",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Callbacks are functions passed as arguments to other functions.",
    exampleCode: `// Simple callback
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback();
}

greet('Alice', function() {
  console.log('Nice to meet you!');
});

// Callback with setTimeout
setTimeout(function() {
  console.log('After 2 seconds');
}, 2000);

// Array callback methods
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(num) {
  console.log(num * 2);
});

// Callback hell (nested callbacks)
getData(function(data) {
  processData(data, function(result) {
    displayResult(result, function() {
      console.log('Done');
    });
  });
});`
  },
  {
    id: "js-promises",
    Title: "JavaScript Promises",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Promises handle asynchronous operations better than callbacks.",
    exampleCode: `// Create promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;
    if (success) {
      resolve('Success!');
    } else {
      reject('Failed!');
    }
  }, 1000);
});

// Consume promise
promise
  .then(result => console.log(result))
  .catch(error => console.log(error))
  .finally(() => console.log('Done'));

// Promise chaining
fetch('/api/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Multiple promises
Promise.all([p1, p2, p3])
  .then(results => console.log(results));`
  },
  {
    id: "js-async-await",
    Title: "JavaScript Async/Await",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Async/await makes asynchronous code look synchronous.",
    exampleCode: `// Async function
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call async function
fetchData().then(data => console.log(data));

// Using await in loop
async function processItems() {
  const items = ['a', 'b', 'c'];
  for (const item of items) {
    const result = await processItem(item);
    console.log(result);
  }
}

// Multiple awaits
async function getMultiple() {
  const user = await getUser();
  const posts = await getPosts(user.id);
  return { user, posts };
}`
  },
  {
    id: "js-dom-manipulation",
    Title: "JavaScript DOM Manipulation",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "DOM methods interact with HTML elements.",
    exampleCode: `// Select elements
document.getElementById('myId');
document.querySelector('.myClass');
document.querySelectorAll('p');

// Change content
element.textContent = 'New text';
element.innerHTML = '<p>New HTML</p>';

// Change attributes
element.setAttribute('class', 'new-class');
element.className = 'new-class';
element.id = 'newId';

// Change styles
element.style.color = 'red';
element.style.backgroundColor = 'blue';

// Create and add elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello';
document.body.appendChild(newDiv);
element.insertBefore(newDiv, element.firstChild);

// Remove elements
element.remove();
element.removeChild(child);`
  },
  {
    id: "js-events",
    Title: "JavaScript Events",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Events are user interactions with the page.",
    exampleCode: `// Add event listener
button.addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log(event.target);
});

// Remove event listener
function handleClick() { console.log('Click'); }
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Common events
element.addEventListener('mouseenter', () => {});
element.addEventListener('mouseleave', () => {});
element.addEventListener('mousemove', (e) => {
  console.log(e.clientX, e.clientY);
});

input.addEventListener('input', (e) => {
  console.log(e.target.value);
});

input.addEventListener('change', (e) => {
  console.log('Value changed to:', e.target.value);
});

// Event delegation
document.addEventListener('click', (e) => {
  if (e.target.matches('.btn')) {
    console.log('Button clicked');
  }
});`
  },
  {
    id: "js-arrow-functions",
    Title: "JavaScript Arrow Functions",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Arrow functions are concise function syntax with lexical this.",
    exampleCode: `// Arrow function basics
const add = (a, b) => {
  return a + b;
};

// Concise body (implicit return)
const multiply = (a, b) => a * b;

// Single parameter (omit parentheses)
const square = x => x * x;

// No parameters
const random = () => Math.random();

// Multi-line body
const process = (x) => {
  const doubled = x * 2;
  return doubled + 1;
};

// Lexical 'this'
const person = {
  name: 'Alice',
  greet: function() {
    const arrow = () => {
      console.log(this.name); // 'Alice'
    };
    arrow();
  }
};`
  },
  {
    id: "js-destructuring",
    Title: "JavaScript Destructuring",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Destructuring extracts values from arrays and objects.",
    exampleCode: `// Array destructuring
const [a, b, c] = [1, 2, 3];
const [first, ...rest] = [1, 2, 3, 4];

// Object destructuring
const { name, age } = { name: 'Alice', age: 30 };
const { name: fullName } = { name: 'Alice' };

// Nested destructuring
const { address: { city } } = {
  address: { city: 'NYC', zip: '10001' }
};

// Default values
const { status = 'active' } = {};

// Function parameter destructuring
function display({ name, age }) {
  console.log(name, age);
}

display({ name: 'Alice', age: 30 });

// Rest operator
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]`
  },
  {
    id: "js-spread-operator",
    Title: "JavaScript Spread Operator",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Spread operator expands arrays or objects.",
    exampleCode: `// Spread array
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
// arr2 = [1, 2, 3, 4, 5]

// Spread object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
// obj2 = { a: 1, b: 2, c: 3 }

// Combine arrays
const combined = [...arr1, ...arr2];

// Function arguments
const numbers = [2, 3, 1];
Math.max(...numbers); // 3

// Copy array
const copy = [...arr1]; // shallow copy

// Copy object
const objCopy = { ...obj1 };

// Merge objects
const merged = { ...obj1, ...obj2, c: 4 };`
  },
  {
    id: "js-rest-parameters",
    Title: "JavaScript Rest Parameters",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Rest parameters capture remaining arguments as an array.",
    exampleCode: `// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // 10

// Mix regular and rest params
function greet(greeting, ...names) {
  names.forEach(name => {
    console.log(greeting + ', ' + name);
  });
}

greet('Hello', 'Alice', 'Bob', 'Charlie');

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];

// Rest in object destructuring
const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
// rest = { c: 3, d: 4 }`
  },
  {
    id: "js-filter,-map,-reduce",
    Title: "JavaScript Filter, Map, Reduce",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Functional array methods for transformation and aggregation.",
    exampleCode: `const numbers = [1, 2, 3, 4, 5];

// Filter - select items
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4]

// Map - transform items
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Reduce - aggregate
const sum = numbers.reduce((acc, n) => acc + n, 0);
// 15

// Chaining
const result = numbers
  .filter(n => n > 2)
  .map(n => n * 2)
  .reduce((a, b) => a + b);
// (3 + 4 + 5) * 2 = 24

// Complex reduce
const grouped = items.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item);
  return acc;
}, {});`
  },
  {
    id: "js-json",
    Title: "JavaScript JSON",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "JSON is a lightweight data format for data exchange.",
    exampleCode: `// Object to JSON string
const person = { name: 'Alice', age: 30 };
const json = JSON.stringify(person);
// '{"name":"Alice","age":30}'

// JSON string to object
const jsonStr = '{"name":"Bob","age":25}';
const obj = JSON.parse(jsonStr);

// Stringify options
JSON.stringify(person, null, 2); // pretty print
JSON.stringify(person, ['name']); // only name property

// Parse with reviver
const dateJson = '{"date":"2024-01-15"}';
const withDate = JSON.parse(dateJson, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});

// Arrays in JSON
const arr = [1, 2, { id: 1, name: 'item' }];
const jsonArr = JSON.stringify(arr);`
  },
  {
    id: "js-fetch-api",
    Title: "JavaScript Fetch API",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Fetch API makes HTTP requests and handles responses.",
    exampleCode: `// GET request
fetch('/api/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// POST request
fetch('/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ name: 'Alice', age: 30 })
})
  .then(response => response.json())
  .then(data => console.log(data));

// With async/await
async function getUsers() {
  const response = await fetch('/api/users');
  const data = await response.json();
  return data;
}

// Check response status
fetch('/api/data')
  .then(response => {
    if (!response.ok) throw new Error('Network error');
    return response.json();
  });`
  },
  {
    id: "js-local-storage",
    Title: "JavaScript Local Storage",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Local storage persists data in the browser.",
    exampleCode: `// Store data
localStorage.setItem('username', 'Alice');
localStorage.setItem('user', JSON.stringify({ id: 1, name: 'Alice' }));

// Retrieve data
const username = localStorage.getItem('username');
const user = JSON.parse(localStorage.getItem('user'));

// Check if key exists
if (localStorage.getItem('token')) {
  console.log('User is logged in');
}

// Remove item
localStorage.removeItem('username');

// Clear all
localStorage.clear();

// Get all keys
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  console.log(key, localStorage.getItem(key));
}

// Listen for storage changes
window.addEventListener('storage', (e) => {
  console.log(\`\${e.key} changed to \${e.newValue}\`);
});`
  },
  {
    id: "js-regular-expressions",
    Title: "JavaScript Regular Expressions",
    videoSource: "https://www.youtube.com/embed/W6NZfCO5tTE",
    description: "Regular expressions pattern match and manipulate strings.",
    exampleCode: `// Create regex
const pattern = /hello/i;  // case-insensitive
const pattern2 = new RegExp('hello', 'i');

// Test if matches
/email/.test('my@email.com');     // true

// Find matches
'hello world hello'.match(/hello/g); // ['hello', 'hello']

// Replace
'hello world'.replace(/world/, 'JavaScript');

// Common patterns
/^[a-z]+$/;           // lowercase letters only
/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i; // email
/^\\d{3}-\\d{3}-\\d{4}$/; // phone: 123-456-7890

// Character classes
/[abc]/;      // a, b, or c
/[a-z]/;      // a-z
/\\d/;        // digit
/\\w/;        // word char
/\\s/;        // whitespace

// Quantifiers
/a+/;         // one or more
/a*/;         // zero or more
/a?/;         // zero or one
/a{3}/;       // exactly 3
/a{2,4}/;     // 2 to 4`
  }
];
