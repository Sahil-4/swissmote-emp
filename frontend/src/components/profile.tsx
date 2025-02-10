import { useState } from "react";
import styles from "../styles/header.module.css";
import { useAppContext } from "../Context/useAppContext";

const Profile = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { user, logout } = useAppContext();

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.profileCard}>
      {!isOpen ? (
        <div className="_pointer_" onClick={open}>
          {user?.username.charAt(0).toUpperCase()}
        </div>
      ) : (
        <>
          <div className={styles.wrapper} onClick={close}></div>
          <div className={styles.profile}>
            <span>{user?.username}</span>
            &nbsp;
            <button onClick={logout}>Logout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
