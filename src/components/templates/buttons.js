import { useEffect } from "react";
import Prism from "prismjs";

function Buttons() {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return <div className="buttonsTemplate">
        <h1>Buttons</h1>
        <p>Use custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.</p>
        <h2>Example</h2>
        <p>includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.</p>
        <div className="buttonsExample">
            <button type="button" className="btn" id="customBTN">
                Example
            </button>
        </div>
        <pre>
            <code className="language-html">
            {`<button type="button" className="btn" id="customBTN">
    Example
</button>`}
        </code>
        </pre>
        <pre>
            <code className="language-css">
          {`.btn {
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

#customBTN {
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
}
#customBTN:hover {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
}
#customBTN:focus {
  color: #fff;
  background-color: #0b5ed7;
  border-color: #0a58ca;
  box-shadow: 0 0 0 0.25rem rgba(49, 132, 253, 0.5);
}`}
      </code>
        </pre>
    </div>
};

export default Buttons;