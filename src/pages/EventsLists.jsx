import Card from "react-bootstrap/Card";
import { useState } from "react";
import "./EventsList.css";
import { NavLink } from "react-router-dom";
import { data } from "../data";
import "./EventsList.css";
import EventCard from "../components/EventCard";

const EventsList = (props) => {
  const arr = [];
  const d = new Date();
  let year = d.getUTCFullYear();
  let month = d.getMonth() + 1;
  let day = d.getUTCDate();
  let showDay = d.getUTCDate();
  if (day < 10) {
    showDay = "0" + day;
  }
  let currentDay = `${month}/${day}/${year}`;
  let logicDay = `${month}/${showDay}/${year}`;
  data.companies.map((b) => {
    b.events.map((e) => {
      console.log(e.date)
      if (e.date == currentDay) {
        arr.push(e);
        console.log(e)
      }
    });
  });
  arr.map((e) => {
    if (e.date != currentDay) {
      arr.pop();
    }
  });
  console.log(arr);
  //console.log(data.companies[0].events[0].date);
  return (
    <>
      <body className="body">
        <h1 className="event-date">{logicDay}</h1>
        {arr ? (
          <EventCard events={arr[0]} day={currentDay} />
        ) : (
          <h4>No Events Today</h4>
        )}
      </body>
    </>
  );
};

export default EventsList;