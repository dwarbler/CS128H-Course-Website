import courseLogo from "./assets/logo.png"

function WelcomeCard() {
    return (
        <div className="welcomeCard">
            <img src={courseLogo} alt="CS128H Logo Image"></img>
            <h2>Welcome to CS128H</h2>
            <h3>For Students, by Students</h3>
        </div>
    )
}

export default WelcomeCard;
