import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">Crowdfunding</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/campaigns">Campaigns</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
