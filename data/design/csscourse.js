let course = [
  {
  id: "css-introduction",
    Title: "CSS Introduction",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "CSS (Cascading Style Sheets) styles HTML elements. It controls layout, colors, fonts, and responsive design.",
    exampleCode: `/* External CSS */
<link rel="stylesheet" href="styles.css">

/* Internal CSS */
<style>
  body { background-color: lightblue; }
</style>

/* Inline CSS */
<p style="color: red;">Red text</p>`
  },
  {
  id: "css-syntax",
    Title: "CSS Syntax",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "CSS rules consist of a selector and declaration block. Each declaration has a property and value.",
    exampleCode: `h1 {
  color: blue;
  font-size: 32px;
  margin: 10px;
}`
  },
  {
  id: "css-selectors",
    Title: "CSS Selectors",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Selectors target HTML elements for styling. Types include element, class, id, and attribute selectors.",
    exampleCode: `/* Element selector */
p { color: black; }

/* Class selector */
.highlight { background-color: yellow; }

/* ID selector */
#main { font-size: 20px; }

/* Attribute selector */
input[type="text"] { border: 1px solid gray; }`
  },
  {
  id: "css-comments",
    Title: "CSS Comments",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Comments are ignored by browsers and are used to document CSS code.",
    exampleCode: `/* Single line comment */

/* Multi-line comment
   spans multiple lines
   for explanation */`
  },
  {
  id: "css-colors",
    Title: "CSS Colors",
    videoSource: "https://www.youtube.com/embed/y-UxeZUrs3k",
    description: "Colors can be specified by name, RGB, HEX, HSL, or HSV.",
    exampleCode: `/* Named color */
color: red;

/* RGB */
color: rgb(255, 0, 0);

/* HEX */
color: #ff0000;

/* HSL */
color: hsl(0, 100%, 50%);`
  },
  {
  id: "css-backgrounds",
    Title: "CSS Backgrounds",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Background properties control the background color and image of an element.",
    exampleCode: `body {
  background-color: lightblue;
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}`
  },
  {
  id: "css-borders",
    Title: "CSS Borders",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Borders define the edge of an element with style, width, and color.",
    exampleCode: `/* All borders */
border: 2px solid black;

/* Individual borders */
border-top: 1px dotted red;
border-right: 3px dashed blue;
border-bottom: 2px solid green;
border-left: 1px double purple;

/* Border radius */
border-radius: 10px;`
  },
  {
  id: "css-margins",
    Title: "CSS Margins",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Margins create space outside an element, between the element and other elements.",
    exampleCode: `/* All sides */
margin: 20px;

/* Vertical and horizontal */
margin: 10px 20px;

/* Top, right, bottom, left */
margin: 10px 20px 30px 40px;

/* Individual sides */
margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

/* Auto centers horizontally */
margin: 0 auto;`
  },
  {
  id: "css-padding",
    Title: "CSS Padding",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Padding creates space inside an element, between content and border.",
    exampleCode: `/* All sides */
padding: 20px;

/* Vertical and horizontal */
padding: 10px 20px;

/* Top, right, bottom, left */
padding: 10px 20px 30px 40px;

/* Individual sides */
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;`
  },
  {
  id: "css-box-model",
    Title: "CSS Box Model",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "The box model consists of content, padding, border, and margin layers.",
    exampleCode: `/* Total width includes padding, border, margin */
div {
  width: 100px;
  padding: 10px;
  border: 5px solid;
  margin: 15px;
  /* Total: 100 + 20 + 10 + 30 = 160px */
}

/* box-sizing: border-box includes padding/border in width */
div { box-sizing: border-box; }`
  },
  {
  id: "css-width-and-height",
    Title: "CSS Width and Height",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Width and height set element dimensions in pixels, percentages, or other units.",
    exampleCode: `/* Fixed size */
div { width: 300px; height: 200px; }

/* Percentage of parent */
div { width: 50%; height: 100%; }

/* Responsive size */
div { width: 100%; max-width: 500px; }

/* Min and max */
div { min-width: 200px; max-width: 800px; }`
  },
  {
  id: "css-text",
    Title: "CSS Text",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Text properties control font, size, color, alignment, and spacing.",
    exampleCode: `p {
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  text-decoration: underline;
  line-height: 1.6;
  letter-spacing: 2px;
}`
  },
  {
  id: "css-fonts",
    Title: "CSS Fonts",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Font selection includes system fonts and web fonts imported via @font-face or Google Fonts.",
    exampleCode: `/* System fonts */
font-family: Arial, sans-serif;
font-family: Georgia, serif;
font-family: Courier, monospace;

/* Web font import */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700');
body { font-family: 'Roboto', sans-serif; }

/* Font weight */
font-weight: normal;      /* 400 */
font-weight: bold;        /* 700 */
font-weight: 300;         /* light */`
  },
  {
  id: "css-links",
    Title: "CSS Links",
    videoSource: "https://www.youtube.com/embed/fQqdu9_IB5A",
    description: "Links have four pseudo-class states that can be styled separately.",
    exampleCode: `a:link    { color: blue; }      /* unvisited link */
a:visited { color: purple; }   /* visited link */
a:hover   { color: red; }      /* mouse over */
a:active  { color: orange; }   /* being clicked */

/* Remove underline */
a { text-decoration: none; }

/* Add underline on hover */
a:hover { text-decoration: underline; }`
  },
  {
  id: "css-lists",
    Title: "CSS Lists",
    videoSource: "https://www.youtube.com/embed/2CCO4fqR9qI",
    description: "List style properties customize bullet points and numbering.",
    exampleCode: `/* Unordered list bullet styles */
ul { list-style-type: disc; }    /* filled circle */
ul { list-style-type: circle; }  /* empty circle */
ul { list-style-type: square; }  /* square */
ul { list-style-type: none; }    /* no bullet */

/* Ordered list number styles */
ol { list-style-type: decimal; }     /* 1, 2, 3... */
ol { list-style-type: upper-roman; } /* I, II, III... */

/* Custom image */
ul { list-style-image: url('bullet.jpg'); }`
  },
  {
  id: "css-display",
    Title: "CSS Display",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Display property controls how an element is rendered (block, inline, inline-block, flex, grid, none).",
    exampleCode: `/* Block: takes full width, starts new line */
display: block;

/* Inline: flows within text, ignores width/height */
display: inline;

/* Inline-block: flows but respects width/height */
display: inline-block;

/* Flex: flexible box layout */
display: flex;

display: grid;

/* None: hidden from page */
display: none;`
  },
  {
  id: "css-positioning",
    Title: "CSS Positioning",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Position property controls element placement (static, relative, absolute, fixed, sticky).",
    exampleCode: `/* Default, follows document flow */
position: static;

/* Relative to normal position */
position: relative;
top: 10px; left: 20px;

/* Absolute to nearest positioned parent */
position: absolute;
top: 50px; left: 100px;

/* Fixed to viewport */
position: fixed;
top: 0; right: 0;

/* Sticky between relative and fixed */
position: sticky;
top: 0;`
  },
  {
  id: "css-overflow",
    Title: "CSS Overflow",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Overflow property controls content that exceeds the element boundaries.",
    exampleCode: `/* Content overflows (default) */
overflow: visible;

/* Hide overflowing content */
overflow: hidden;

/* Add scrollbars */
overflow: auto;
overflow-x: scroll;
overflow-y: hidden;

/* Content without scrollbars */
overflow: clip;`
  },
  {
  id: "css-float",
    Title: "CSS Float",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Float property wraps text around floated elements. Mostly replaced by flexbox/grid.",
    exampleCode: `img {
  float: left;
  margin-right: 10px;
}

/* Clear floats */
.clear {
  clear: both;
}

/* Clearfix with ::after */
.container::after {
  content: "";
  display: table;
  clear: both;
}`
  },
  {
  id: "css-flexbox",
    Title: "CSS Flexbox",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Flexbox is a layout model that aligns and distributes space among items in a container.",
    exampleCode: `.container {
  display: flex;
  justify-content: center;    /* horizontal alignment */
  align-items: center;        /* vertical alignment */
  gap: 10px;                  /* space between items */
}

.item {
  flex: 1;                    /* grow equally */
  flex-basis: 200px;          /* base size */
  align-self: flex-start;     /* override parent alignment */
}`
  },
  {
  id: "css-grid",
    Title: "CSS Grid",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "CSS Grid creates a 2D layout with rows and columns.",
    exampleCode: `.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* three columns */
  grid-template-rows: 100px auto;      /* two rows */
  gap: 10px;
}

.item {
  grid-column: 1 / 3;  /* spans 2 columns */
  grid-row: 1 / 2;     /* spans 1 row */
}`
  },
  {
  id: "css-alignment",
    Title: "CSS Alignment",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Text and item alignment properties for precise positioning.",
    exampleCode: `/* Text alignment */
text-align: left;
text-align: center;
text-align: right;
text-align: justify;

/* Vertical alignment (inline/inline-block) */
vertical-align: top;
vertical-align: middle;
vertical-align: bottom;

/* Flexbox alignment */
justify-content: center;    /* horizontal */
align-items: center;        /* vertical */`
  },
  {
  id: "css-opacity",
    Title: "CSS Opacity",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Opacity controls transparency of an element from 0 (invisible) to 1 (opaque).",
    exampleCode: `/* Transparent */
opacity: 0.5;   /* 50% transparent */

/* With background */
background-color: rgba(255, 0, 0, 0.5);

/* Transparent on hover */
img:hover {
  opacity: 0.7;
}`
  },
  {
  id: "css-transforms",
    Title: "CSS Transforms",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Transform property rotates, scales, skews, or translates elements in 2D or 3D.",
    exampleCode: `/* 2D transforms */
transform: rotate(45deg);
transform: scale(1.5);
transform: translateX(50px) translateY(20px);
transform: skewX(10deg);

/* Multiple transforms */
transform: rotate(45deg) scale(1.2) translate(10px);

/* 3D transforms */
transform: rotateX(45deg);
transform: perspective(1000px) rotateY(20deg);`
  },
  {
  id: "css-transitions",
    Title: "CSS Transitions",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Transitions smoothly animate CSS property changes over time.",
    exampleCode: `button {
  background-color: blue;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: red;
}

/* Multiple properties */
transition: all 0.5s ease-in-out;

/* Specific properties */
transition: background-color 0.3s, transform 0.5s;`
  },
  {
  id: "css-animations",
    Title: "CSS Animations",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Animations create complex motion using keyframes, independent of user interaction.",
    exampleCode: `@keyframes slide {
  0%   { left: 0; }
  50%  { left: 200px; }
  100% { left: 0; }
}

div {
  animation: slide 3s ease-in-out infinite;
  /* animation-delay: 1s; */
  /* animation-direction: alternate; */
}`
  },
  {
  id: "css-media-queries",
    Title: "CSS Media Queries",
    videoSource: "https://www.youtube.com/embed/-2CnrBUfAUQ",
    description: "Media queries apply styles based on device characteristics like screen size.",
    exampleCode: `/* Desktop */
body { font-size: 16px; }

/* Tablet */
@media (max-width: 768px) {
  body { font-size: 14px; }
  .sidebar { display: none; }
}

/* Mobile */
@media (max-width: 480px) {
  body { font-size: 12px; }
  .container { width: 100%; }
}`
  },
  {
  id: "css-responsive-design",
    Title: "CSS Responsive Design",
    videoSource: "https://www.youtube.com/embed/-2CnrBUfAUQ",
    description: "Responsive design makes websites look good on all screen sizes and devices.",
    exampleCode: `/* Flexible images */
img { max-width: 100%; height: auto; }

/* Flexible layout */
.container { max-width: 1200px; margin: 0 auto; }

/* Responsive text */
h1 { font-size: clamp(24px, 5vw, 48px); }

/* Flexible grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}`
  },
  {
  id: "css-variables",
    Title: "CSS Variables",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "CSS custom properties (variables) store reusable values.",
    exampleCode: `/* Define variables */
:root {
  --primary-color: #3498db;
  --spacing: 10px;
  --font-size: 16px;
}

/* Use variables */
body {
  color: var(--primary-color);
  font-size: var(--font-size);
  margin: var(--spacing);
}

/* Fallback */
color: var(--primary-color, blue);`
  },
  {
  id: "css-pseudoclasses",
    Title: "CSS Pseudo-classes",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Pseudo-classes target elements in specific states or positions.",
    exampleCode: `/* State pseudo-classes */
a:hover    { color: red; }
a:active   { color: orange; }
input:focus { border-color: blue; }
input:disabled { opacity: 0.5; }

/* Structural pseudo-classes */
li:first-child { font-weight: bold; }
li:last-child  { margin-bottom: 0; }
li:nth-child(2n) { background: #f0f0f0; }

/* Other pseudo-classes */
p:not(.highlight) { color: gray; }`
  },
  {
  id: "css-pseudoelements",
    Title: "CSS Pseudo-elements",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Pseudo-elements style specific parts of elements or insert content.",
    exampleCode: `/* Style first letter */
p::first-letter { font-size: 200%; font-weight: bold; }

/* Style first line */
p::first-line { text-transform: uppercase; }

/* Insert content */
p::before { content: ">> "; }
p::after  { content: " <<"; }

/* Text selection */
p::selection { background-color: yellow; }`
  },
  {
  id: "css-gradients",
    Title: "CSS Gradients",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Gradients create smooth color transitions as backgrounds.",
    exampleCode: `/* Linear gradient */
background: linear-gradient(90deg, red, blue);
background: linear-gradient(45deg, red 0%, green 50%, blue 100%);

/* Radial gradient */
background: radial-gradient(circle, red, blue);
background: radial-gradient(ellipse at 50% 50%, red 0%, blue 100%);

/* Conic gradient */
background: conic-gradient(red, yellow, green, blue, red);`
  },
  {
  id: "css-filters",
    Title: "CSS Filters",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Filters apply visual effects like blur, brightness, and saturation.",
    exampleCode: `img {
  filter: blur(5px);
  filter: brightness(150%);
  filter: contrast(200%);
  filter: grayscale(100%);
  filter: hue-rotate(90deg);
  filter: invert(100%);
  filter: saturate(200%);
  filter: sepia(100%);
}

/* Multiple filters */
filter: brightness(120%) contrast(110%);`
  },
  {
  id: "css-box-shadow",
    Title: "CSS Box Shadow",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Box shadow adds shadows around an element.",
    exampleCode: `/* Simple shadow */
box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);

/* Multiple shadows */
box-shadow: 
  2px 2px 5px rgba(0, 0, 0, 0.2),
  4px 4px 10px rgba(0, 0, 0, 0.3);

/* Inset shadow */
box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

/* Elevation effect */
box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);`
  },
  {
  id: "css-text-shadow",
    Title: "CSS Text Shadow",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Text shadow adds shadows to text content.",
    exampleCode: `/* Simple shadow */
text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

/* Multiple shadows */
text-shadow: 
  2px 2px 4px rgba(0, 0, 0, 0.5),
  -2px -2px 4px rgba(255, 255, 255, 0.5);

/* Glowing effect */
text-shadow: 0 0 10px #ff00ff;

/* 3D text effect */
text-shadow: 
  1px 1px 0px #000,
  2px 2px 0px #000,
  3px 3px 0px #000;`
  },
  {
  id: "css-print-styles",
    Title: "CSS Print Styles",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Print media queries optimize styles for printing.",
    exampleCode: `@media print {
  body { font-size: 12pt; color: black; }
  nav { display: none; }
  a::after { content: " (" attr(href) ")"; }
  .no-print { display: none; }
  page-break-after: always;
}`
  },
  {
  id: "css-columns",
    Title: "CSS Columns",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Column properties create multi-column layouts for text.",
    exampleCode: `/* Number of columns */
column-count: 3;

/* Column width */
column-width: 250px;

/* Gap between columns */
column-gap: 20px;

/* Divider line */
column-rule: 1px solid #ccc;

/* Prevent breaking */
column-span: all;`
  },
  {
  id: "css-shape-outside",
    Title: "CSS Shape Outside",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Shape-outside wraps text around non-rectangular shapes.",
    exampleCode: `img {
  float: left;
  shape-outside: circle(50%);
  shape-margin: 20px;
}

/* Polygon shape */
shape-outside: polygon(0 0, 100% 0, 100% 75%, 0 100%);`
  },
  {
  id: "css-clipping",
    Title: "CSS Clipping",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Clip-path masks elements to specific shapes.",
    exampleCode: `/* Circle clip */
clip-path: circle(50%);

/* Polygon clip */
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

/* Triangle clip */
clip-path: polygon(50% 0%, 100% 100%, 0% 100%);

/* Inset clip */
clip-path: inset(10% 20% 30% 40%);`
  },
  {
  id: "css-stacking-context",
    Title: "CSS Stacking Context",
    videoSource: "https://www.youtube.com/embed/OXGznpKZ_sA",
    description: "Z-index controls the stacking order of overlapping elements.",
    exampleCode: `/* Higher z-index appears on top */
.box1 { z-index: 1; }
.box2 { z-index: 2; }
.box3 { z-index: 10; }

/* Positioned elements establish context */
position: relative;
z-index: 5;

/* Negative z-index goes behind */
z-index: -1;`
  }
];
