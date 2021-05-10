import { useEffect } from "react";
import Prism from "prismjs";

function Burger() {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    return <div className="burgerTemplate">
        <h1>Burger</h1>
        <p>The hamburger menu, is the button in websites and apps that typically opens up into a side menu or navigation drawer.</p>
        <h2>Example</h2>
        <p>Click the burger to expand/collapse the burger content.</p>
        <div className="burgerExample">
            <input type="checkbox" id="toggle" className="burger" />
            <label className="bar1" htmlFor="toggle" />
            <label className="bar2" htmlFor="toggle" />
            <label className="bar3" htmlFor="toggle" />
        </div>
        <pre>
        <code className="language-html">
            {`<div class="burgerExample">
    <input type="checkbox" id="toggle" class="burger" />
    <label class="bar1" For="toggle" />
    <label class="bar2" For="toggle" />
    <label class="bar3" For="toggle" />
</div>`}
        </code>
    </pre>
    <pre>
      <code className="language-css">
          {`.burgerExample {
  width: 5vh;
  height: 5vh;
  margin: 1vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.burgerExample label {
  width: 100%;
  height: 25%;
  background-color: white;
  transition: 0.4s;
}
.burgerExample #toggle {
  display: none;
}
.burgerExample #toggle:checked ~ .bar1 {
  transform: translateY(1.85vh) rotate(45deg);
}
.burgerExample #toggle:checked ~ .bar2 {
  opacity: 0;
}
.burgerExample #toggle:checked ~ .bar3 {
  transform: translateY(-1.85vh) rotate(-45deg);
}`}
      </code>
  </pre>
    </div>
};

export default Burger;