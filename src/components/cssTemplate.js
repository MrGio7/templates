import { Route, Switch } from "react-router";




function CssTemplate(props) {
    const Accordion = props.loadable(() => import("./templates/accordion"), {fallback: <props.Loader/>});
    const CssTemplateLeft = props.loadable(() => import("./cssTemplateLeft"), {fallback: <props.Loader/>});

    return <div className="cssTemplate">
        <CssTemplateLeft/>
        <Switch>
            <Route exact path={`/cssTemplate/accordion`}>
                <Accordion/>
            </Route>
        </Switch>
    </div>
}

export default CssTemplate;