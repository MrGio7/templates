import React from "react";
import Prism from "prismjs";
import { useEffect } from "react";

function Accordion() {
  useEffect(() => {
      Prism.highlightAll()
  }, []);
  
  return <div className="accordionTemplate">
  <h1>Accordion</h1>
  <h2>Example</h2>
  <p>Click the accordions below to expand/collapse the accordion content.</p>
  <div className="example">
    <div class="accordion">

      <div class="option">
        <input type="checkbox" id="toggle1" class="toggle" />
       <label class="title" for="toggle1">Well, hello there
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div class="option">
        <input type="checkbox" id="toggle2" class="toggle" />
        <label class="title" for="toggle2">
          I am here to assist you
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div class="option">
        <input type="checkbox" id="toggle3" class="toggle" />
        <label class="title" for="toggle3">
          Let's get started
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

    </div>
    <pre>
        <code className="language-html">
            {`<div class="container">
    <h1>CSS Only Accordion</h1>

    <div class="accordion">

      <div class="option">
        <input type="checkbox" id="toggle1" class="toggle" />
       <label class="title" for="toggle1">Well, hello there
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div class="option">
        <input type="checkbox" id="toggle2" class="toggle" />
        <label class="title" for="toggle2">
          I am here to assist you
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

      <div class="option">
        <input type="checkbox" id="toggle3" class="toggle" />
        <label class="title" for="toggle3">
          Let's get started
        </label>
        <div class="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>

    </div>
  </div>`}
        </code>
    </pre>
    <pre>
      <code className="language-css">
          {`$font-color: #7A7572;

* {
box-sizing: border-box;
max-width: 100%;
}

html, body {
height: 100%;
margin: 0;
padding: 0.25em;
width: 100%;
font: 16px 'Roboto';
background-color: #eee;
color: $font-color;
}
h1 {
text-align: center;
margin: 1.5em 0 0;
font-size: 3em;
letter-spacing: 1px;
text-shadow: 0 1px 2px #666;
}

.accordion {
margin: 3em auto;
max-width: 30em;
}

.toggle {
display: none;
}

.option {
position: relative;
margin-bottom: 1em;
}

.title,
.content {
backface-visibility: hidden;
transform: translateZ(0);
transition: all 0.2s;
}

.title {
background: #fff;
padding: 1em;
display: block;
color: $font-color;
font-weight: bold;
}
.title:after, .title:before {
content: '';
position: absolute;
right: 1.25em;
top: 1.25em;
width: 2px;
height: 0.75em;
background-color: $font-color;
transition: all 0.2s;
}
.title:after {
transform: rotate(90deg);
}

.content {
max-height: 0;
overflow: hidden;
background-color: #fff;
p {
    margin: 0;
    padding: 0.5em 1em 1em;
    font-size: 0.9em;
    line-height: 1.5;
}
}

.toggle:checked {
& + .title,
& + .title + .content {
    box-shadow: 3px 3px 6px #ddd, -3px 3px 6px #ddd;
}
& + .title + .content {
    max-height: 500px;
}
& + .title:before {
    transform: rotate(90deg) !important;
}
}`}
      </code>
  </pre>
  </div>
</div>
}

export default Accordion;