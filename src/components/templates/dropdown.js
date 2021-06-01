import { useEffect } from "react";
import Prism from "prismjs";

function Dropdown() {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return <div className="dropdownTemplate">
        <h1>Dropdown</h1>
        <p>Toggle contextual overlays for displaying lists of links.</p>
        <h2>Example</h2>
        <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position: relative;. Dropdowns can be triggered from button elements to better fit your potential needs. The examples shown here use semantic ul elements.</p>
        <div className="dropdownExample">
            <button type="button">Dropdown</button>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
        <pre>
        <code className="language-html">
            {`<div className="dropdownExample">
    <button type="button">Dropdown</button>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
</div>`}
        </code>
    </pre>
    <pre>
      <code className="language-css">
          {`.dropdownExample{
    display: flex;
    position:relative;
    align-items: center;
    justify-content: center;

    button{
        color:white;
        background-color: $purple3;
        width: 8rem;

        &:hover{
            + ul {
                display: block;
                position: absolute;
                top:1.3rem;
                background-color: black;
            }
        }
    }

    ul{
        display: none;
        margin: 0px;
        z-index: 1000;
        width: 8rem;

        li{
            margin: .5rem;
        }
    }
}`}
      </code>
  </pre>
    </div>
};

export default Dropdown;