import courseLogo from "./assets/logo.png"

function WelcomeCard() {
    return (
        <div className="welcomeCard">
            <img className="logo" src={courseLogo} alt="CS128H Logo Image"></img>
            <h2>Welcome to CS128H</h2>
            <button>Access the Site</button>
        </div>
    )
}

export default WelcomeCard;
