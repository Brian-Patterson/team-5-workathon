import SearchBar from "../components/SearchBar";
import "./HomePage.css";
import HomeCard from "../components/HomeCard";
import { data } from "../data";
import Card from 'react-bootstrap/Card';
import {NavLink} from 'react-router-dom';

export default function HomePage(props) {
    console.log(data.companies[0])
    return (
        <>
            {data.companies ? (
                data.companies.map((e, idx) =>
                <NavLink to='/show' className="navlink">

                
                <div className="home-card">
                    <img className="img-placeholder" src="https://t3.ftcdn.net/jpg/03/45/05/92/240_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg" />
                    <body className="body home-card-info">
                        <h2 className="home-bank-name">{e.name}</h2>
                        <h5 id="home-bank-review"><span className="home-review-stars"><img src="https://cdn-icons-png.flaticon.com/128/8138/8138510.png" style={{width: "2rem"}}/><img src="https://cdn-icons-png.flaticon.com/128/8138/8138510.png" style={{width: "2rem"}}/><img src="https://cdn-icons-png.flaticon.com/128/8138/8138510.png" style={{width: "2rem"}}/><img src="https://cdn-icons-png.flaticon.com/128/8138/8138510.png" style={{width: "2rem"}}/></span>Read A Review!</h5>
                        <h5>{e.address}</h5>
                        {/* <HomeCard bank={e} key={idx} /> */}

                    </body>
                </div>
                </NavLink>
                
                )
            ) : (
                <h4>No Banks</h4>
            )}
        </>
    )
}