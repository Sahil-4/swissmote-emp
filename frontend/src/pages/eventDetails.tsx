import AttandeesList from "../components/attandeesList.js";
import Header from "../components/header.jsx";
import { EventI } from "../types/index.js";
import styles from "../styles/eventDetails.module.css";
import { useNavigate } from "react-router-dom";

const EventDetails = () => {
  const event: EventI = {
    _id: "some_id_1",
    name: "Some title 1",
    description: "Description of this event goes like this and this",
    time: "2025-02-09T18:31",
    organiser: "",
    category: "",
    note: "",
  };

  const navigate = useNavigate();

  const handleJoin = () => {};

  const handleExit = () => {};

  const handleEdit = () => {
    navigate(`/updateEvent/${event._id}`);
  };

  const handleDelete = () => {};

  return (
    <>
      <Header />
      <section>
        <div className={styles.eventDetailsContainer}>
          <h1>{event.name}</h1>
          <p>{event.time}</p>
          <p>{event.description}</p>
          <div>
            <button onClick={handleJoin}>Join</button>
            <button onClick={handleExit}>Exit</button>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
          <p>{event.note}</p>
        </div>

        <AttandeesList />
      </section>
    </>
  );
};

export default EventDetails;
