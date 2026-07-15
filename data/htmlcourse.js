let course = [
  {
    id: "introduction",
    Title: "HTML Introduction",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "HTML (HyperText Markup Language) is the standard language for creating web pages. It describes page structure using elements represented by tags.",
    exampleCode: `<!DOCTYPE html>
<html>
<head><title>Page Title</title></head>
<body>
  <h1>My First Heading</h1>
  <p>My first paragraph.</p>
</body>
</html>`
  },
  {
    id: "editors",
    Title: "HTML Editors",
    videoSource: "https://www.youtube.com/embed/h74pEV8hEFo",
    description: "HTML can be written in any text editor. Popular choices include VS Code, Sublime Text, and Notepad++.",
    exampleCode: ""
  },
  {
    id: "basic",
    Title: "HTML Basic",
    videoSource: "https://www.youtube.com/embed/9qj9WOPDj84",
    description: "Every HTML page follows the same basic skeleton structure.",
    exampleCode: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
  <h1>Heading</h1>
  <p>Paragraph.</p>
</body>
</html>`
  },
  {
    id: "elements",
    Title: "HTML Elements",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "An HTML element has a start tag, content, and an end tag. Some elements are self-closing (void elements).",
    exampleCode: `<tagname>Content goes here</tagname>

<h1>My Heading</h1>
<p>My paragraph.</p>
<br>   <img src="photo.jpg" alt="Photo">`
  },
  {
    id: "attributes",
    Title: "HTML Attributes",
    videoSource: "https://www.youtube.com/embed/8KXmNKgIJzE",
    description: "Attributes provide extra information about elements. They appear in the opening tag as name/value pairs.",
    exampleCode: `<a href="https://example.com">Visit</a>
<img src="photo.jpg" alt="A photo" width="300">
<p style="color:red;">Red text</p>
<input type="text" placeholder="Enter name">`
  },
  {
    id: "headings",
    Title: "HTML Headings",
    videoSource: "https://www.youtube.com/embed/9cOOg1v0Elw",
    description: "HTML has six heading levels, <h1> to <h6>. <h1> is most important, <h6> least.",
    exampleCode: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`
  },
  {
    id: "paragraphs",
    Title: "HTML Paragraphs",
    videoSource: "https://www.youtube.com/embed/DvBhidRatWw",
    description: "The <p> element defines a paragraph. Browsers automatically add space before and after it.",
    exampleCode: `<p>This is a paragraph.</p>
<p>Another paragraph.</p>
<hr>                        <p>Line one.<br>Line two.</p>  <pre>  Preserved
  whitespace</pre>`
  },
  {
    id: "horizontal-lines",
    Title: "HTML Horizontal Lines",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The <hr> tag creates a horizontal line that extends from the current position to the right margin of the page. It is used to visually separate sections of content.",
    exampleCode: `<p>Section one content.</p>
<hr>
<p>Section two content.</p>`
  },
  {
    id: "centering",
    Title: "HTML Centering Content",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The <center> tag places its content in the center of the page or the center of the table cell it is in. It was part of early HTML and is covered in the course notes for historical context.",
    exampleCode: `<center>
  <h2>This heading is centered</h2>
  <p>This paragraph is also centered.</p>
</center>`
  },
  {
    id: "nbsp",
    Title: "HTML Nonbreaking Spaces",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The nonbreaking space entity &nbsp; creates a white space between words. Unlike a regular space, the browser will not break a line at a nonbreaking space — keeping the words together on the same line.",
    exampleCode: `<p>10&nbsp;km</p>
<p>Mr.&nbsp;Smith</p>
<p>Section&nbsp;2.3</p>`
  },
  {
    id: "styles",
    Title: "HTML Styles",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The style attribute adds inline CSS directly to an element.",
    exampleCode: `<p style="color:blue; font-size:20px;">Blue text</p>
<h1 style="background-color:yellow;">Yellow bg</h1>
<p style="text-align:center;">Centered</p>
<p style="font-family:courier;">Courier font</p>`
  },
  {
    id: "formatting",
    Title: "HTML Formatting",
    videoSource: "https://www.youtube.com/embed/ND-ma8lW9UY",
    description: "Formatting elements give text special visual meaning. Prefer semantic tags over purely visual ones.",
    exampleCode: `<b>Bold</b>            <strong>Important</strong>
<i>Italic</i>           <em>Emphasized</em>
<mark>Highlighted</mark>
<small>Small text</small>
<del>Deleted text</del> <ins>Inserted text</ins>
<sub>Subscript</sub>    <sup>Superscript</sup>`
  },
  {
    id: "quotations",
    Title: "HTML Quotations",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "HTML provides specific elements for citing and quoting content.",
    exampleCode: `<blockquote cite="https://source.com">
  Long quoted passage here.
</blockquote>

<p>Einstein said <q>E=mc²</q>.</p>

<p><abbr title="HyperText Markup Language">HTML</abbr></p>

<address>Written by John Doe.</address>

<p><cite>The Scream</cite> by Edvard Munch.</p>`
  },
  {
    id: "comments",
    Title: "HTML Comments",
    videoSource: "https://www.youtube.com/embed/916GWv2Qs08",
    description: "Comments are not displayed by the browser. They document code or temporarily hide content.",
    exampleCode: `<p>Visible paragraph.</p>
`
  },
  {
    id: "colors",
    Title: "HTML Colors",
    videoSource: "https://www.youtube.com/embed/y-UxeZUrs3k",
    description: "Colors can be specified by name, RGB, HEX, or HSL — on text, backgrounds, and borders.",
    exampleCode: `<p style="color:Tomato;">Named color</p>
<p style="color:rgb(255,99,71);">RGB</p>
<p style="color:#ff6347;">HEX</p>
<p style="color:hsl(9,100%,64%);">HSL</p>
<p style="background-color:lightblue;">Background</p>`
  },
  {
    id: "colors-rgb",
    Title: "Colors — RGB & RGBA",
    videoSource: "https://www.youtube.com/embed/y-UxeZUrs3k",
    description: "RGB mixes Red, Green, Blue values (0–255). RGBA adds an alpha (opacity) channel 0.0–1.0.",
    exampleCode: `color: rgb(255, 0, 0);       /* red */
color: rgb(0, 0, 255);       /* blue */
color: rgb(0, 0, 0);         /* black */
color: rgb(255, 255, 255);   /* white */
color: rgba(255, 0, 0, 0.5); /* 50% transparent red */`
  },
  {
    id: "colors-hex",
    Title: "Colors — HEX",
    videoSource: "https://www.youtube.com/embed/y-UxeZUrs3k",
    description: "HEX colors use #RRGGBB — two hex digits per channel (00–ff).",
    exampleCode: `#ff0000  /* red */
#00ff00  /* green */
#0000ff  /* blue */
#000000  /* black */
#ffffff  /* white */
#f00     /* shorthand = #ff0000 */`
  },
  {
    id: "colors-hsl",
    Title: "Colors — HSL & HSLA",
    videoSource: "https://www.youtube.com/embed/y-UxeZUrs3k",
    description: "HSL = Hue (0–360°), Saturation (0–100%), Lightness (0–100%). HSLA adds alpha.",
    exampleCode: `color: hsl(0, 100%, 50%);      /* red */
color: hsl(120, 100%, 50%);    /* green */
color: hsl(240, 100%, 50%);    /* blue */
color: hsla(0, 100%, 50%, 0.3);/* 30% transparent */`
  },
  {
    id: "css",
    Title: "HTML CSS",
    videoSource: "https://www.youtube.com/embed/G3e-cpL7ofc",
    description: "CSS styles HTML. It can be inline, internal (in a <style> tag), or external (linked file).",
    exampleCode: `<p style="color:red;">Red</p>

<style>
  p { color: red; }
</style>

<link rel="stylesheet" href="styles.css">`
  },
  {
    id: "links",
    Title: "HTML Links",
    videoSource: "https://www.youtube.com/embed/8KXmNKgIJzE",
    description: "The <a> tag creates hyperlinks. The href attribute specifies the destination.",
    exampleCode: `<a href="https://example.com">Visit Example</a>
<a href="https://example.com" target="_blank">New tab</a>
<a href="page2.html">Local page</a>
<a href="mailto:me@email.com">Email me</a>
<a href="tel:+1234567890">Call me</a>`
  },
  {
    id: "link-colors",
    Title: "Link Colors",
    videoSource: "https://www.youtube.com/embed/fQqdu9_IB5A",
    description: "Links have four CSS states that can each be styled separately.",
    exampleCode: `a:link    { color: blue; }    /* unvisited */
a:visited { color: purple; }  /* visited */
a:hover   { color: red; }     /* on hover */
a:active  { color: orange; }  /* being clicked */`
  },
  {
    id: "link-bookmarks",
    Title: "Link Bookmarks",
    videoSource: "https://www.youtube.com/embed/8KXmNKgIJzE",
    description: "Bookmark links jump to a specific element on the page using its id.",
    exampleCode: `<h2 id="section2">Section 2</h2>

<a href="#section2">Go to Section 2</a>

<a href="page.html#section2">Go to Section 2</a>`
  },
  {
    id: "images",
    Title: "HTML Images",
    videoSource: "https://www.youtube.com/embed/HIxEsZXk7o8",
    description: "The <img> tag embeds an image. It is a void (self-closing) element.",
    exampleCode: `<img src="photo.jpg" alt="Description" width="500" height="300">`
  },
  {
    id: "image-map",
    Title: "Image Map",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Image maps define clickable areas on an image using <map> and <area>.",
    exampleCode: `<img src="world.jpg" usemap="#worldmap" alt="World">
<map name="worldmap">
  <area shape="rect"   coords="34,44,270,350" href="europe.html" alt="Europe">
  <area shape="circle" coords="90,58,30"       href="africa.html" alt="Africa">
  <area shape="poly"   coords="140,121,181,116,204,160" href="asia.html" alt="Asia">
</map>`
  },
  {
    id: "background-images",
    Title: "Background Images",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Background images are applied with CSS, not <img>.",
    exampleCode: `/* CSS */
body {
  background-image: url('bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}`
  },
  {
    id: "picture-element",
    Title: "The Picture Element",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "<picture> serves different images based on screen size or format support.",
    exampleCode: `<picture>
  <source media="(min-width:768px)" srcset="large.jpg">
  <source media="(min-width:480px)" srcset="medium.jpg">
  <img src="small.jpg" alt="A flower">
</picture>`
  },
  {
    id: "favicon",
    Title: "HTML Favicon",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "A favicon is the small icon shown in the browser tab.",
    exampleCode: `<head>
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>`
  },
  {
    id: "page-title",
    Title: "HTML Page Title",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The <title> in <head> sets the tab title and is important for SEO.",
    exampleCode: `<head>
  <title>My Website — Home</title>
</head>`
  },
  {
    id: "tables",
    Title: "HTML Tables",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "Tables organize data into rows and columns.",
    exampleCode: `<table>
  <tr>
    <th>Name</th><th>Age</th>
  </tr>
  <tr>
    <td>Alice</td><td>25</td>
  </tr>
</table>`
  },
  {
    id: "table-borders",
    Title: "Table Borders",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "",
    exampleCode: `table, th, td {
  border: 1px solid black;
  border-collapse: collapse; /* removes double borders */
}
th, td { border-radius: 4px; }`
  },
  {
    id: "table-sizes",
    Title: "Table Sizes",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "",
    exampleCode: `table        { width: 100%; }
th, td       { height: 50px; }
th:first-child { width: 60%; }
th:last-child  { width: 40%; }`
  },
  {
    id: "table-headers",
    Title: "Table Headers",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "Use <caption> to add a title, and <thead>/<tbody>/<tfoot> for structure.",
    exampleCode: `<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr><th>Month</th><th>Savings</th></tr>
  </thead>
  <tbody>
    <tr><td>January</td><td>$100</td></tr>
  </tbody>
  <tfoot>
    <tr><td>Total</td><td>$100</td></tr>
  </tfoot>
</table>`
  },
  {
    id: "table-padding",
    Title: "Padding & Spacing",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "",
    exampleCode: `th, td { padding: 15px; }           /* space inside cell */
table  { border-spacing: 10px; }    /* space between cells */`
  },
  {
    id: "table-colspan",
    Title: "Colspan & Rowspan",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "",
    exampleCode: `<td colspan="2">Spans 2 columns</td>
<td rowspan="3">Spans 3 rows</td>`
  },
  {
    id: "table-styling",
    Title: "Table Styling",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "",
    exampleCode: `tr:nth-child(even) { background-color: #f2f2f2; } /* zebra stripes */
tr:hover           { background-color: #ddd; }      /* hover highlight */
th, td             { border-bottom: 1px solid #ddd; }/* horizontal lines only */`
  },
  {
    id: "table-colgroup",
    Title: "Table Colgroup",
    videoSource: "https://www.youtube.com/embed/ZUmloybepoA",
    description: "<colgroup> applies styles to entire columns without repeating them on each cell.",
    exampleCode: `<table>
  <colgroup>
    <col span="2" style="background-color:yellow">
    <col style="background-color:pink">
  </colgroup>
  ...
</table>`
  },
  {
    id: "lists",
    Title: "HTML Lists",
    videoSource: "https://www.youtube.com/embed/2CCO4fqR9qI",
    description: "HTML has three list types: unordered (<ul>), ordered (<ol>), and description (<dl>).",
    exampleCode: `<ul><li>Coffee</li><li>Tea</li></ul>
<ol><li>First</li><li>Second</li></ol>`
  },
  {
    id: "unordered-lists",
    Title: "Unordered Lists",
    videoSource: "https://www.youtube.com/embed/2CCO4fqR9qI",
    description: "<ul> creates a bulleted list. Bullet style is controlled by CSS.",
    exampleCode: `ul { list-style-type: disc; }    /* default ● */
ul { list-style-type: circle; }  /* ○ */
ul { list-style-type: square; }  /* ■ */
ul { list-style-type: none; }    /* no bullet */`
  },
  {
    id: "ordered-lists",
    Title: "Ordered Lists",
    videoSource: "https://www.youtube.com/embed/8ZTA8GMwp94",
    description: "<ol> creates a numbered list. Type and start value can be customized.",
    exampleCode: `<ol type="1"> <ol type="A"> <ol type="a"> <ol type="I"> <ol start="5">`
  },
  {
    id: "other-lists",
    Title: "Description Lists",
    videoSource: "https://www.youtube.com/embed/5ol3nDsEHXY",
    description: "<dl> pairs terms (<dt>) with their descriptions (<dd>).",
    exampleCode: `<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>`
  },
  {
    id: "block-inline",
    Title: "Block & Inline Elements",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Block elements start on a new line and take full width. Inline elements stay on the same line.",
    exampleCode: ``
  },
  {
    id: "div",
    Title: "HTML Div",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "<div> is a generic block-level container used to group elements for styling.",
    exampleCode: `<div style="background:lightblue; padding:20px;">
  <h2>Title</h2>
  <p>Paragraph inside a div.</p>
</div>`
  },
  {
    id: "classes",
    Title: "HTML Classes",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The class attribute targets multiple elements with the same CSS style.",
    exampleCode: `<p class="highlight">First</p>
<p class="highlight note">Two classes</p>

.highlight { background-color: yellow; }
.note      { font-style: italic; }`
  },
  {
    id: "id",
    Title: "HTML Id",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The id attribute uniquely identifies a single element on the page.",
    exampleCode: `<h1 id="main-title">Hello</h1>

#main-title { color: navy; }

document.getElementById("main-title").style.color = "red";`
  },
  {
    id: "buttons",
    Title: "HTML Buttons",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "",
    exampleCode: `<button>Click Me</button>
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hi')">Alert</button>
<button disabled>Disabled</button>`
  },
  {
    id: "iframes",
    Title: "HTML Iframes",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "<iframe> embeds another HTML page inside the current one.",
    exampleCode: `<iframe src="https://example.com" width="600" height="400" title="Example"></iframe>
<iframe src="page.html" style="border:none;"></iframe>`
  },
  {
    id: "frames",
    Title: "HTML Frames (Legacy)",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "In older HTML (before HTML5), the <frameset> element was used to divide the browser window into multiple panes, each loading a different HTML page. This is different from <iframe>, which embeds a page inside a page.",
    exampleCode: `<!DOCTYPE html>
<html>
<head><title>Frames Example</title></head>
<frameset rows="25%,75%">
  <frame src="top.html" name="topFrame">
  <frame src="main.html" name="mainFrame">
  <noframes>
    <p>Your browser does not support frames.</p>
  </noframes>
</frameset>
</html>`
  },
  {
    id: "page-backgrounds",
    Title: "HTML Backgrounds",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "HTML originally provided two attributes on the <body> tag (and on table elements) for setting backgrounds: bgcolor for a solid background colour and background for a background image.",
    exampleCode: `<body bgcolor="lightblue">

<body background="bg.jpg">

<table bgcolor="yellow">
  <tr>
    <td bgcolor="pink">Cell with pink background</td>
  </tr>
</table>`
  },
  {
    id: "javascript",
    Title: "HTML JavaScript",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "The <script> tag embeds or links JavaScript.",
    exampleCode: `<script>
  document.getElementById("demo").innerHTML = "Hello!";
</script>

<script src="app.js" defer></script>

<noscript>Enable JavaScript to use this site.</noscript>`
  },
  {
    id: "file-paths",
    Title: "HTML File Paths",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: `<img src="https://example.com/photo.jpg">  <img src="photo.jpg">                       <img src="images/photo.jpg">               <img src="../photo.jpg">                    <img src="/images/photo.jpg">              `
  },
  {
    id: "head",
    Title: "HTML Head",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "<head> holds metadata — not displayed on the page.",
    exampleCode: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Free web tutorials">
  <title>My Page</title>
  <link rel="stylesheet" href="styles.css">
  <script src="app.js" defer></script>
</head>`
  },
  {
    id: "layout",
    Title: "HTML Layout",
    videoSource: "https://www.youtube.com/embed/Bu21yHpRH6k",
    description: "HTML5 semantic elements define page regions. Use CSS Flexbox or Grid to position them.",
    exampleCode: `<header>  — top of page
<nav>     — navigation links
<main>    — main content (one per page)
<section> — thematic grouping
<article> — self-contained content
<aside>   — sidebar
<footer>  — bottom of page`
  },
  {
    id: "responsive",
    Title: "HTML Responsive",
    videoSource: "https://www.youtube.com/embed/-2CnrBUfAUQ",
    description: "Responsive design makes pages look good on all screen sizes.",
    exampleCode: `<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Flexible image */
img { max-width: 100%; height: auto; }

/* Media query */
@media (max-width: 600px) {
  body { font-size: 14px; }
  .col { width: 100%; }
}`
  },
  {
    id: "computercode",
    Title: "HTML Computercode",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: `<code>x = 5;</code>                    <pre><code>x = 5;
y = 10;</code></pre>                 <kbd>Ctrl + C</kbd>                    <samp>Error: file not found</samp>     <var>x</var> = <var>y</var> + 2       `
  },
  {
    id: "semantics",
    Title: "HTML Semantics",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Semantic elements describe their meaning to the browser and developer.",
    exampleCode: `<div id="nav">...</div>

<nav>...</nav>
<article>...</article>
<figure>
  <img src="cat.jpg" alt="Cat">
  <figcaption>A cute cat.</figcaption>
</figure>
<time datetime="2026-05-07">May 7, 2026</time>`
  },
  {
    id: "style-guide",
    Title: "HTML Style Guide",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: ""
  },
  {
    id: "entities",
    Title: "HTML Entities",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Entities display reserved characters that would otherwise be parsed as HTML.",
    exampleCode: `&lt;   → <      &gt;   → >
&amp;   → &      &quot; → "
&nbsp;  → (non-breaking space)
&copy;  → ©      &reg;  → ®
&trade; → ™      &euro; → €`
  },
  {
    id: "symbols",
    Title: "HTML Symbols",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: `&#8704; → ∀   &#8706; → ∂   &#8707; → ∃
&#8364; → €   &#9742; → ☎   &#9824; → ♠
&#9829; → ♥   &#9827; → ♣   &#9830; → ♦`
  },
  {
    id: "emojis",
    Title: "HTML Emojis",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Emojis are Unicode characters. Ensure charset=\"UTF-8\" is set.",
    exampleCode: `<meta charset="UTF-8">
<p>😀</p>            <p>&#128512;</p>      <p>&#x1F600;</p>    `
  },
  {
    id: "charsets",
    Title: "HTML Charsets",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "A charset defines how characters are encoded. Always use UTF-8.",
    exampleCode: `<meta charset="UTF-8">`
  },
  {
    id: "url-encode",
    Title: "HTML URL Encode",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "URLs use ASCII only. Non-ASCII characters are percent-encoded.",
    exampleCode: `Space → %20    ! → %21    # → %23
%     → %25    & → %26    = → %3D
?     → %3F    @ → %40`
  },
  {
    id: "vs-xhtml",
    Title: "HTML vs. XHTML",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "XHTML is HTML written as stricter XML. HTML5 is now the standard.",
    exampleCode: ""
  },
  {
    id: "forms",
    Title: "HTML Forms",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "The <form> element collects user input and sends it to a server.",
    exampleCode: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  <button type="submit">Submit</button>
</form>`
  },
  {
    id: "form-attributes",
    Title: "HTML Form Attributes",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "",
    exampleCode: `<form
  action="/submit"
  method="post"
  autocomplete="on"
  novalidate
  target="_blank"
  enctype="multipart/form-data"
>`
  },
  {
    id: "form-elements",
    Title: "HTML Form Elements",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "Forms contain several element types beyond just <input>. Each has its own purpose:",
    exampleCode: `<input>      various input types
<label>      label for an input
<select>     dropdown list
<textarea>   multi-line text
<button>     clickable button
<fieldset>   groups related inputs
<legend>     caption for fieldset
<datalist>   predefined suggestions for input
<output>     result of a calculation`
  },
  {
    id: "input-types",
    Title: "HTML Input Types",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "",
    exampleCode: `<input type="text">       single-line text
<input type="password">   masked input
<input type="email">      validates email
<input type="number">     numeric
<input type="date">       date picker
<input type="checkbox">   tick box
<input type="radio">      one-of-many choice
<input type="file">       file upload
<input type="range">      slider
<input type="color">      color picker
<input type="submit">     submit button
<input type="reset">      reset button
<input type="hidden">     invisible field
<input type="search">     search box
<input type="url">        validates URL
<input type="tel">        phone number`
  },
  {
    id: "input-attributes",
    Title: "HTML Input Attributes",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "",
    exampleCode: `<input
  value="default"
  placeholder="hint text"
  name="username"
  required
  disabled
  readonly
  maxlength="20"
  min="0" max="100"
  step="5"
  pattern="[A-Za-z]{3}"
  autofocus
  autocomplete="off"
>`
  },
  {
    id: "canvas",
    Title: "Input Form Attributes",
    videoSource: "https://www.youtube.com/embed/vEPMD9SaO_4",
    description: "Inputs outside a <form> tag can still be linked using the form attribute.",
    exampleCode: `<form id="myForm" action="/submit">
  <button type="submit">Submit</button>
</form>
<input type="text" name="extra" form="myForm">`
  },
  {
    id: "svg",
    Title: "HTML Canvas",
    videoSource: "https://www.youtube.com/embed/9qj9WOPDj84",
    description: "<canvas> draws pixel-based graphics via JavaScript.",
    exampleCode: `<canvas id="c" width="400" height="200"></canvas>
<script>
  const ctx = document.getElementById("c").getContext("2d");
  ctx.fillStyle = "red";
  ctx.fillRect(10, 10, 150, 80);   /* rectangle */
  ctx.beginPath();
  ctx.arc(200, 100, 50, 0, 2*Math.PI);
  ctx.stroke();                    /* circle */
</script>`
  },
  {
    id: "media",
    Title: "HTML SVG",
    videoSource: "https://www.youtube.com/embed/qA_-O35O_X4",
    description: "SVG draws vector graphics in XML. Scales perfectly at any size.",
    exampleCode: `<svg width="200" height="200">
  <circle cx="100" cy="100" r="80" fill="green"/>
  <rect x="10" y="10" width="80" height="50" fill="blue"/>
  <line x1="0" y1="0" x2="200" y2="200" stroke="red"/>
  <text x="60" y="110" fill="white">SVG</text>
</svg>`
  },
  {
    id: "video",
    Title: "HTML Media",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "HTML5 supports video and audio natively — no plugins needed.",
    exampleCode: ""
  },
  {
    id: "audio",
    Title: "HTML Video",
    videoSource: "https://www.youtube.com/embed/nGigbThVLqA",
    description: "",
    exampleCode: `<video width="640" height="360" controls poster="thumb.jpg">
  <source src="movie.mp4"  type="video/mp4">
  <source src="movie.webm" type="video/webm">
  Your browser does not support video.
</video>`
  },
  {
    id: "plugins",
    Title: "HTML Audio",
    videoSource: "https://www.youtube.com/embed/nGigbThVLqA",
    description: "",
    exampleCode: `<audio controls>
  <source src="sound.mp3" type="audio/mpeg">
  <source src="sound.ogg" type="audio/ogg">
  Your browser does not support audio.
</audio>`
  },
  {
    id: "youtube",
    Title: "HTML Plug-ins",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "<object> and <embed> embed external content like PDFs.",
    exampleCode: `<object data="file.pdf" type="application/pdf" width="600" height="400">
  <p><a href="file.pdf">Download PDF</a></p>
</object>`
  },
  {
    id: "web-apis",
    Title: "HTML YouTube",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Embed YouTube videos using an <iframe> with the YouTube embed URL.",
    exampleCode: `<iframe
  width="560" height="315"
  src="https://www.youtube.com/embed/VIDEO_ID"
  title="YouTube video"
  allowfullscreen>
</iframe>`
  },
  {
    id: "geolocation",
    Title: "HTML Web APIs",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Web APIs are browser-built-in interfaces accessible via JavaScript.",
    exampleCode: ""
  },
  {
    id: "drag-drop",
    Title: "HTML Geolocation",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: `if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(pos => {
    console.log(pos.coords.latitude, pos.coords.longitude);
  });
}`
  },
  {
    id: "web-storage",
    Title: "HTML Drag and Drop",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "",
    exampleCode: `<div draggable="true" ondragstart="drag(event)" id="item">Drag me</div>
<div ondrop="drop(event)" ondragover="allowDrop(event)">Drop here</div>

function allowDrop(e) { e.preventDefault(); }
function drag(e)      { e.dataTransfer.setData("text", e.target.id); }
function drop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text");
  e.target.appendChild(document.getElementById(id));
}`
  },
  {
    id: "web-workers",
    Title: "HTML Web Storage",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Stores key/value pairs in the browser. Larger and more secure than cookies.",
    exampleCode: `/* localStorage — persists after tab/browser close */
localStorage.setItem("name", "Alice");
localStorage.getItem("name");    /* "Alice" */
localStorage.removeItem("name");

/* sessionStorage — cleared when tab closes */
sessionStorage.setItem("temp", "value");`
  },
  {
    id: "sse",
    Title: "HTML Web Workers",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "Web Workers run JavaScript in a background thread so the UI stays responsive.",
    exampleCode: `/* main.js */
const worker = new Worker("worker.js");
worker.postMessage("start");
worker.onmessage = e => console.log("Result:", e.data);

/* worker.js */
onmessage = e => postMessage(heavyTask());`
  },
  {
    id: "",
    Title: "HTML SSE (Server-Sent Events)",
    videoSource: "https://www.youtube.com/embed/uKup7lkbZEk",
    description: "SSE lets a server push data to the browser over a persistent HTTP connection.",
    exampleCode: `/* Browser */
const source = new EventSource("/events");
source.onmessage = e => console.log("Data:", e.data);

/* Server (Node.js) */
res.setHeader("Content-Type", "text/event-stream");
res.write("data: Hello\n\n");`
  }
];


