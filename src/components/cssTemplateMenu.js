import { Link } from "react-router-dom";

function CssTemplateMenu() {
    return <div className="leftContainer">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/cssTemplate/accordion">Accordion</Link>
            <Link to="/cssTemplate/breadcrumb">Breadcrumb</Link>
            <Link to="/cssTemplate/burger">Burger</Link>
            <li>Buttons</li>
            <li>Collapse</li>
            <li>Dropdown</li>
            <li>NavBar</li>
            <li>Pagination</li>
            <li>Popover</li>
            <li>Progress</li>
            <li>Scrollspy</li>
            <li>Spinners</li>
        </ul>
    </div>
}

export default CssTemplateMenu;