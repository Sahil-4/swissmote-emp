import { EventI } from "../types/index.js";
import styles from "../styles/eventsList.module.css";
import { Link } from "react-router-dom";

const EventItem = ({ event }: { event: EventI }) => {
  const handleJoinEvent = () => {
    console.log(event._id);
  };

  return (
    <div className={styles.eventItem}>
      <h3>{event.name}</h3>
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
      name: "Some title 1",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_2",
      name: "Some title 2",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_3",
      name: "Some title 3",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_4",
      name: "Some title 4",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_5",
      name: "Some title 5",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_6",
      name: "Some title 6",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_7",
      name: "Some title 7",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
    {
      _id: "some_id_8",
      name: "Some title 8",
      description: "Description of this event goes like this and this",
      time: "2025-02-09T18:31",
      category: "cat",
      organiser: "user1",
      note: "",
    },
  ];

  return (
    <main className={styles.eventsListContainer}>
      <h1>Events</h1>

      <div className={styles.eventsList}>
        {events.map((event) => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>
    </main>
  );
};

export default EventsList;
