import Card from "react-bootstrap/Card";
import "../pages/EventsList.css";

export default function EventCard(events) {
    return (
      <>      
        <Card className="event-card">
        <Card.Body className="event-body">
        <blockquote className="blockquote mb-0">
            <Card.Title className="card-title">
                {events.events.name}
            </Card.Title>
            <span className="fav-icon">
            <img
                src="https://cdn-icons-png.flaticon.com/128/1000/1000621.png"
                style={{ width: "2rem" }}
            />
            </span>
            <Card.Text className="row-2">
                {events.events.date} {events.events.startTime} to {events.events.endTime}
            <br></br>
            <span className="details-card">
                {events.events.link}
            </span>
            </Card.Text>
            <footer className="blockquote-footer row-3">
            <span>
                <img
                src="https://cdn-icons-png.flaticon.com/128/484/484167.png"
                style={{ width: "1.5rem" }}
                />
            </span>{" "}
                {events.events.address}
            </footer>
        </blockquote>
        </Card.Body>
        </Card>
        </>
    );
  }


  