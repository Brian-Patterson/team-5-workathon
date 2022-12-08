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
=======
    return (
        <>
        <body className="body">

    <nav className="benefits-nav">
        <button className="nav-button wic">Today</button>
        <button className="nav-button fs">Tomorrow</button>
        <button className="nav-button sa">This Week</button>
    </nav>

        <h1 className="event-date">12/09/2022 </h1>
    <NavLink to="/events/details" className="events-link" style={{textDecoration: "none"}} >
    <Card className="event-card">
      <Card.Body className="event-body">
        <blockquote className="blockquote mb-0">
          <Card.Title className="card-title">Marin Food Bank Food Drive </Card.Title>
          <span className="fav-icon"><img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" style={{width: "2rem"}}/></span>
          <Card.Text className="row-2">
            12/9/2022 6:00 AM to 4:00PM 
            <br></br>
            <span className="details-card" id="red-text">http://marinfoodbank.org/events</span>
          </Card.Text>
          <footer className="blockquote-footer row-3">
            <span><img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" style={{width: "1.5rem"}}/></span> 1612 Lincoln St, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </NavLink>

    <Card className="event-card">
      <Card.Body className="event-body">
        <blockquote className="blockquote mb-0">
          <Card.Title>Mission Food Hub Meal Service </Card.Title>
          <span className="fav-icon"><img src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png" style={{width: "2rem"}}/></span>
          <Card.Text className="row-2">
            12/9/2022 9:00 AM to 9:45 AM 
            <br></br>
            <span className="details-card" id="red-text">Mission Food Hub will be distrubuting Grab&Go meals provided by Second Harvest.</span>
          </Card.Text>
          <footer className="blockquote-footer row-3">
          <span><img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" style={{width: "1.5rem"}}/></span> 1923 Jackson St, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>

    <h1 className="event-date" style={{marginTop: "2rem"}}>12/10/2022</h1>

    <Card className = "event-card">
      <Card.Body className="event-body">
        <blockquote className="blockquote mb-0">
          <Card.Title>Alta Plaza Park Meal Service: SE corner </Card.Title>
          <span className="fav-icon"><img src="https://cdn-icons-png.flaticon.com/128/833/833472.png" style={{width: "2rem"}}/></span>
          <Card.Text className="row-2">
            12/10/2022 6:00 AM to 4:00 PM
            <br></br>
            <span className="details-card" id="red-text">Alta Plaza Parks & Recreation will be distrubting Grab&Go meals provided by Feed America </span>
          </Card.Text>
          <footer className="blockquote-footer row-3">
          <span><img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" style={{width: "1.5rem"}}/></span> 3749 27th, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card> 

    <Card className = "event-card">
      <Card.Body className="event-body">
        <blockquote className="blockquote mb-0">
          <Card.Title>Marin Food Bank Food Drive </Card.Title>
          <span className="fav-icon"><img src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png" style={{width: "2rem"}}/></span>
          <Card.Text className="row-2">
            12/10/2022 6:00 AM to 4:00 PM
            <br></br>
            <span className="details-card" id="red-text">http://marinfoodbank.org/events</span>
          </Card.Text>
          <footer className="blockquote-footer row-3">
          <span><img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" style={{width: "1.5rem"}}/></span> 2039 35th, CA San Francisco 94016
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </body>
   
        </>
    )
}

export default EventsList

