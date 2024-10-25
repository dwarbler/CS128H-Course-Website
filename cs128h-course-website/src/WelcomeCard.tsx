import courseLogo from "./assets/logo.png"

export default function WelcomeCard(): JSX.Element {
    return (
        <div className="welcomeCard">
            <img className="logo" src={courseLogo} alt="CS128H Logo Image"></img>
            <h2>Welcome to CS128H</h2>
            <h3>For Student, By Students</h3>
        </div>
    )
}
