import { Route, Switch, useRouteMatch } from "react-router";
import loadable from '@loadable/component';

// Components
import Loader from "./loader";
const Accordion = loadable(() => import("./templates/accordion"), {fallback: <Loader/>});
const CssTemplateLeft = loadable(() => import("./cssTemplateLeft"), {fallback: <Loader/>});

function CssTemplate() {
    let match = useRouteMatch();

    return <div className="cssTemplate">
        <CssTemplateLeft/>
        <Switch>
            <Route path={`${match.path}/accordion`}>
                <Accordion/>
            </Route>
        </Switch>
    </div>
}

export default CssTemplate;