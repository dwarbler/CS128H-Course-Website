import courseLogo from "../assets/logo.png"

export default function Navbar(): JSX.Element {
    return (
        <nav className="navBar">
            <img className="logo" src={courseLogo} alt="CS128H Logo"></img>
            <div className="links">
                <a href="">Home</a>
                <a href="">Course Info</a>
                <a href="">Lectures</a>
                <a href="">Grades</a>
                <a href="">Staff</a>
            </div>
        </nav>
    )
}