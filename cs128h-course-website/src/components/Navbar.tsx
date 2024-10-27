import courseLogo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
    return (
        <nav className="navBar">
            <img className="logo" src={courseLogo} alt="CS128H Logo"></img>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/CourseInfo">Course Info</Link>
                <Link to="/Lectures">Lectures</Link>
                <Link to="/Grades">Grades</Link>
                <Link to="/Staff">Staff</Link>
            </div>
        </nav>
    )
}