import SearchBar from "../components/SearchBar";
import "./HomePage.css";
import HomeCard from "../components/HomeCard";
import { data } from "../data";

export default function HomePage(props) {
    return (
        <>
            {data.companies ? (
                data.companies.map((e, idx) => <HomeCard bank={e} key={idx} />)
            ) : (
                <h4>No Banks</h4>
            )}
        </>
    )
}