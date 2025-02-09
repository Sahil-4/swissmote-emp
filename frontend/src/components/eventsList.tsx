import { EventI } from "../types/index.js";
import styles from "../styles/eventsList.module.css";
import { Link } from "react-router-dom";

const EventItem = ({ event }: { event: EventI }) => {
  const handleJoinEvent = () => {
    console.log(event._id);
  };

  return (
    <div className={styles.eventItem}>
      <h3>{event.title}</h3>
      <p>{event.time}</p>
      <p>{event.description}</p>

      <div className={styles.eventItemControls}>
        <Link to={`/event/:${event._id}`}>View Details</Link>
        <button onClick={handleJoinEvent}>Join</button>
      </div>
    </div>
  );
};

const EventsList = () => {
  const events: EventI[] = [
    {
      _id: "some_id_1",
      title: "Some title 1",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_2",
      title: "Some title 2",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_3",
      title: "Some title 3",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_4",
      title: "Some title 4",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_5",
      title: "Some title 5",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_6",
      title: "Some title 6",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_7",
      title: "Some title 7",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
    {
      _id: "some_id_8",
      title: "Some title 8",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
    },
  ];

  return (
    <main className={styles.eventsListContainer}>
      <h1>Events</h1>

      <div className={styles.eventsList}>
        {events.map((event) => (
          <EventItem event={event} />
        ))}
      </div>
    </main>
  );
};

export default EventsList;
