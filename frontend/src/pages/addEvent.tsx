import { useRef } from "react";
import Header from "../components/header.jsx";
import styles from "../styles/addEventForm.module.css";

const AddEvent = () => {
  const addEventFormRef = useRef<HTMLFormElement | null>(null);

  const handleAddEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const event: { [key: string]: string } = {};
    for (let i = 0; i < form.length - 1; i++) {
      const input = form[i] as HTMLInputElement | HTMLTextAreaElement;
      event[input.name] = input.value;
    }

    console.log(event);
  };

  return (
    <>
      <Header />

      <section>
        <form onSubmit={handleAddEvent} ref={addEventFormRef} className={styles.addEventForm}>
          <h1>Events Details</h1>

          <input name="name" type="text" placeholder="Event Name" required={true} />
          <textarea name="description" placeholder="Event Description" required={true} />
          <input name="category" type="text" placeholder="Category" required={true} />
          <input name="time" type="datetime-local" placeholder="" required={true} />
          <textarea name="note" placeholder="Notes" />

          <button type="submit">Post</button>
        </form>
      </section>
    </>
  );
};

export default AddEvent;
