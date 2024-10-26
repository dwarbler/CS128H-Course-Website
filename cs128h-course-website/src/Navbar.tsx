import { useState } from "react"

export default function Navbar(): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    
    return (
        <nav className="navBar">
            <div className={`links ${isOpen ? "active" : ""}`}>
                <a href="">Home</a>
                <a href="">Course Info</a>
                <a href="">Lectures</a>
                <a href="">Grades</a>
                <a href="">Staff</a>
            </div>
            <div className="burger" onClick={toggleMenu}>☰</div>
        </nav>
    )
}