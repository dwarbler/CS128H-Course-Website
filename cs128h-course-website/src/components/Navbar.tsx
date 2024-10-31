import courseLogo from "../assets/logo.png"
import { Link } from "react-router-dom"

export default function Navbar(): JSX.Element {
    /**
     * Returns the JSX corresponding to the navbar at the top
     * of the site.
     * 
     * This utilizes the React BrowserRouter setup in main.tsx
     * 
     * @returns JSX With React Router Links to site subpages
     */
    return (
        <nav className="navBar">
            <img className="logo" src={courseLogo} alt="CS128H Logo"></img>
            <div className="links">
                <Link to="/">home()</Link>
                <Link to="/CourseInfo">course_info()</Link>
                <Link to="/Lectures">lectures()</Link>
                <Link to="/Grades">grades()</Link>
                <Link to="/Staff">staff()</Link>
            </div>
        </nav>
    )
}