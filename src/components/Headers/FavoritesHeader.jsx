import "../Header.css";
import { useNavigate } from "react-router-dom";

export default function FavoritesHeader() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(-1);
    };

    return (
        <div className="red header-data">
            <div onClick={handleClick} className="backbtn">
                <img src="https://i.imgur.com/rIP5ZaN.png" alt="back button" />
            </div>
            <h1>Favorites</h1>
        </div>
    )
}