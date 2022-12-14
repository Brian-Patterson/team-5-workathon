import Card from 'react-bootstrap/Card'
import {NavLink} from 'react-router-dom'

export default function FavoritesPage(props) {
    return (
        <>
            <body className='body'>

        <nav className="benefits-nav">
            <button className="nav-button wic">Date</button>
            <button className="nav-button fs">Distence</button>
            <button className="nav-button sa">Event Type</button>
        </nav>

    <NavLink to="/events/details" className="events-link" style={{textDecoration: "none"}} >
    <div className="event-card">
      <div className="event-body">
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
      </div>
    </div>
    </NavLink>

    <div className = "event-card">
      <div className="event-body">
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
      </div>
    </div> 
            </body>
        </>
    )
}