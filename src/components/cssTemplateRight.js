import { Route } from "react-router";

function CssTemplateRight() {

    const Accordion = <div className="container">
        <h1>Accordion</h1>
        <h2>Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</h2>
        <h3>How it works</h3>
        <h4>The accordion uses collapse internally to make it collapsible. To render an accordion that’s expanded, add the .open class on the .accordion.</h4>
        <h3>Example</h3>
        <div className="example">
            <div className="code">
                
            </div>
        </div>
    </div>

    return <div className="rightContainer">
        <Route exact path="/cssTemplate/accordion">
            {Accordion}
        </Route>
    </div>
}

export default CssTemplateRight;