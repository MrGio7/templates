import { Link } from "react-router-dom";

function CssTemplateLeft() {
    return <div className="leftContainer">
        <ul>
            <Link to="/">Home</Link>
            <Link to="/cssTemplate/accordion">Accordion</Link>
            <li>Alerts</li>
            <li>Breadcrumb</li>
            <li>Burger</li>
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

export default CssTemplateLeft;