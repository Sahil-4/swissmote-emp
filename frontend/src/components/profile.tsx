import { useState } from "react";
import styles from "../styles/header.module.css";

const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const open = () => {
    console.log("opening");
    setIsOpen(true);
  };

  const close = () => {
    console.log("closing");
    setIsOpen(false);
  };

  return (
    <div className={styles.profileCard}>
      {!isOpen ? (
        <div className="_pointer_" onClick={open}>
          A
        </div>
      ) : (
        <>
          <div className={styles.wrapper} onClick={close}></div>
          <div className={styles.profile}>
            <span>Username</span>
            &nbsp;
            <button>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
