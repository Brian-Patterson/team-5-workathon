import "../Header.css";
import { useNavigate } from "react-router-dom";

export default function ShowHeader() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    };

    return (
        <div className="green header-data">
            <div onClick={handleClick} className="backbtn">
                <img src="https://i.imgur.com/rIP5ZaN.png" alt="back button" />
            </div>
            <h1>Pantry Details</h1>
        </div>
    )
}