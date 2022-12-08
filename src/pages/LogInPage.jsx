import { NavLink } from 'react-router-dom';
import "./LogInPage.css"

export default function LogInPage(props) {
    return (
        <div className="login-page">
            <div className="img-container-login">
                <img src="https://i.imgur.com/dkMmErl.png" alt="logo" />
            </div>
            <div className="slogan">
                Find Food Banks Near You
            </div>
            <div className="login-fields monstserrat-font">
            <div className="login-text-entry">
                    linda.herrera@gmail.com
                </div>
                <div className="login-text-entry">
                    * * * * * * * *
                </div>
                <NavLink to="/home" className="login-page-btn">
                    <div className="login-button">
                        Log In
                    </div>
                </NavLink>
            </div>
            <div className="monstserrat-font-italics">
                Forgot your password?
            </div>
        </div>
    )
}