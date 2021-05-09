import { Route, Switch } from "react-router";




function CssTemplate(props) {
    const Accordion = props.loadable(() => import("./templates/accordion"), {fallback: <props.Loader/>});
    const BreadCrumb = props.loadable(() => import("./templates/breadcrumb"), {fallback: <props.Loader/>});
    const CssTemplateMenu = props.loadable(() => import("./cssTemplateMenu"), {fallback: <props.Loader/>});

    return <div className="cssTemplate">
        <CssTemplateMenu/>
        <Switch>
            <Route exact path={`/cssTemplate/accordion`}>
                <Accordion/>
            </Route>
            <Route exact path={`/cssTemplate/breadcrumb`}>
                <BreadCrumb/>
            </Route>
        </Switch>
    </div>
}

export default CssTemplate;