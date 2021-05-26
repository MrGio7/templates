function Dropdown() {
    return <div className="dropdownTemplate">
        <h1>Dropdown</h1>
        <p>Toggle contextual overlays for displaying lists of links.</p>
        <h2>Example</h2>
        <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within .dropdown, or another element that declares position: relative;. Dropdowns can be triggered from button elements to better fit your potential needs. The examples shown here use semantic ul elements.</p>
        <div className="dropdownExample">
            <button type="button">Dropdown</button>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    </div>
};

export default Dropdown;