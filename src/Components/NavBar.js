import logo from "./img/React-icon.png";

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" width="40px" />
            <h3 className="logo-color">ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
}
