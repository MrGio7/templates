import { Route, Switch } from "react-router";

function CssTemplate(props) {
    const Accordion = props.loadable(() => import("./templates/accordion"), {fallback: <props.Loader/>});
    const BreadCrumb = props.loadable(() => import("./templates/breadcrumb"), {fallback: <props.Loader/>});
    const Burger = props.loadable(() => import("./templates/burger"), {fallback: <props.Loader/>});
    const Buttons = props.loadable(() => import("./templates/buttons"), {fallback: <props.Loader/>});
    const Carousel = props.loadable(() => import("./templates/carousel"), {fallback: <props.Loader/>});
    const Dropdown = props.loadable(() => import("./templates/dropdown"), {fallback: <props.Loader/>});
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
            <Route exact path={`/cssTemplate/burger`}>
                <Burger/>
            </Route>
            <Route exact path={`/cssTemplate/buttons`}>
                <Buttons/>
            </Route>
            <Route exact path={`/cssTemplate/carousel`}>
                <Carousel/>
            </Route>
            <Route exact path={`/cssTemplate/dropdown`}>
                <Dropdown/>
            </Route>
        </Switch>
    </div>
}

export default CssTemplate;