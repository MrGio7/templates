import jsLogo from "../assets/images/jsLogo.png";
import cssLogo from "../assets/images/cssLogo.png";
import { Link } from "react-router-dom";

function Home() {
    return <div className="home">
        <Link to="/"><img src={jsLogo} className="jsLogo" alt="javascript" /></Link>
        <Link to="/cssTemplate"><img src={cssLogo} className="cssLogo" alt="css" /></Link>
    </div>
}

export default Home;