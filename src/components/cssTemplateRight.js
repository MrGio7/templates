import { Route } from "react-router";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import { useEffect } from "react";

function CssTemplateRight() {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const Accordion = <div className="container">
        <h1>Accordion</h1>
        <h2>Build vertically collapsing accordions in combination with our Collapse JavaScript plugin.</h2>
        <h3>How it works</h3>
        <h4>The accordion uses collapse internally to make it collapsible. To render an accordion that’s expanded, add the .open class on the .accordion.</h4>
        <h3>Example</h3>
        <div className="example">
        <pre>
            <code className="language-css">
                {`.cssTemplate{
    width: 100%;
    height: 100vh;
    background-color: $black;
    display: flex;
    flex-direction: row;

    .leftContainer{
        width: max-content;
        height: 100vh;
        overflow: hidden;
        padding: 2vh 0;
        border-right: 0.5rem solid $purple3;
        display: flex;
        align-items: center;

        ul{
            width: 100%;
            display: flex;
            flex-direction: column;

            li, a{
                text-decoration: none;
                font-size: 1.8vw;
                padding: 1vh 2vw 1vh 1vw;
                cursor: pointer;
                color:white;
            }
        }
    }

    .rightContainer{
        display: flex;
        flex-direction: column;

        .container{
            .example{
                .code{
                    white-space:pre-wrap;
                }
            }
        }
    }
}`}
            </code>
        </pre>
        </div>
    </div>

    return <div className="rightContainer">
        <Route exact path="/cssTemplate/accordion">
            {Accordion}
        </Route>
    </div>
}

export default CssTemplateRight;