import Card from "react-bootstrap/Card";
import "./EventsList.css";
import { NavLink } from "react-router-dom";
import { data } from "../data";
import "./EventsList.css";
import EventCard from "../components/EventCard";

const EventsList = (props) => {

  const d = new Date();
  let year = d.getUTCFullYear();
  let month = d.getMonth() + 1;
  let day = d.getUTCDate();
  if (day < 10) {
    day = "0" + day;
  }
  let currentDay = `${month}/${day}/${year}`;
  return (
    <>
      <body className="body">
        <h1 className="event-date">Upcoming</h1>
        {data.companies ? (
          data.companies.map((e) =>
            e.events.map((i) => <EventCard events={i} />)
          )
        ) : (
          <h4>No Events</h4>
        )}
      </body>
    </>
  );
};

export default EventsList;
