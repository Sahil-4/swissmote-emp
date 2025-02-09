import { Link } from "react-router-dom";
import Profile from "./profile.jsx";
import styles from "../styles/header.module.css";

const Header = () => {
  const authenticated = true;

  return (
    <header className={styles.header}>
      <span>Event Management App</span>

      <nav>
        {!authenticated ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <>
            <Link to={"/addEvent"}>Add Event</Link>
            <Profile />
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
