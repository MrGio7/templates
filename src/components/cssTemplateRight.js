import { Route, useRouteMatch } from "react-router";
import Prism from "prismjs";
import { useEffect } from "react";
import AccordionTemplate from "./templates/accordion";

function CssTemplateRight() {
    useEffect(() => {
        Prism.highlightAll()
    }, []);

    let match = useRouteMatch();

    const Accordion = <div className="container">
        <h1>Accordion</h1>
        <h2>Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</h2>
        <h3>How it works</h3>
        <h4>The accordion uses collapse internally to make it collapsible. To render an accordion that’s expanded, add the .open class on the .accordion.</h4>
        <h3>Example</h3>
        <div className="example">
        <pre>
            <code className="language-css">
                {AccordionTemplate.css}
            </code>
        </pre>
        <pre>
            <code className="language-html">
                {AccordionTemplate.html}
            </code>
        </pre>
        </div>
    </div>

    return <div className="rightContainer">
        <Route exact path={`${match.path}/accordion`}>
            {Accordion}
        </Route>
    </div>
}

export default CssTemplateRight;