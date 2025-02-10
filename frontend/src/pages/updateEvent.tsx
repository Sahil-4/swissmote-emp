import { useState } from "react";
import Header from "../components/header.jsx";
import styles from "../styles/addEventForm.module.css";
import { EventI } from "../types/index.js";

const UpdateEvent = () => {
  const [event, setEvent] = useState<EventI>({
    _id: "some_id_1",
    name: "Some title 1",
    description: "Description of this event goes like this and this",
    time: "2025-02-09T18:31",
    category: "cat",
    organiser: "user1",
    note: "",
  });

  const handleUpdateEvent = () => {
    console.log(event);
  };

  return (
    <>
      <Header />

      <section>
        <form onSubmit={handleUpdateEvent} className={styles.addEventForm}>
          <h1>Update Event</h1>

          <input name="name" type="text" disabled={true} placeholder="Event Name" required={true} value={event.name} />
          <textarea
            name="description"
            placeholder="Event Description"
            required={true}
            value={event.description}
            onChange={(e) => {
              setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <input
            name="category"
            type="text"
            placeholder="Category"
            required={true}
            value={event.category}
            onChange={(e) => {
              setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <input
            name="time"
            type="datetime-local"
            placeholder=""
            required={true}
            value={event.time}
            onChange={(e) => {
              setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />
          <textarea
            name="note"
            placeholder="Notes"
            value={event.note}
            onChange={(e) => {
              setEvent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
            }}
          />

          <button type="submit">Post</button>
        </form>
      </section>
    </>
  );
};

export default UpdateEvent;
