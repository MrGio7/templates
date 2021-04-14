import jsLogo from "../assets/images/jsLogo.png";
import cssLogo from "../assets/images/cssLogo.png";

function Home() {
    return <div className="home">
        <img src={jsLogo} className="jsLogo" alt="javascript" />
        <img src={cssLogo} className="cssLogo" alt="css" />
    </div>
}

export default Home;