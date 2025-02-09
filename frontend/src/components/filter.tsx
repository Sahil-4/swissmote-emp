import { useRef } from "react";
import styles from "../styles/filterBar.module.css";

const Filter = () => {
  const categoryInputRef = useRef<HTMLInputElement | null>(null);
  const timeInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilter = () => {
    const category = categoryInputRef.current?.value;
    const time = timeInputRef.current?.value;

    console.log({ category, time });

    // 
  };

  return (
    <div className={styles.filterBar}>
      <input name="category" type="text" placeholder="Category" ref={categoryInputRef} />
      <input name="time" type="datetime-local" ref={timeInputRef} />
      <button onClick={handleFilter}>Filter</button>
    </div>
  );
};

export default Filter;
