import { Link } from "react-router-dom";
import Profile from "./profile.jsx";
import styles from "../styles/header.module.css";
import { useAppContext } from "../Context/useAppContext.js";

const Header = () => {
  const { user } = useAppContext();

  return (
    <header className={styles.header}>
      <Link to={"/"}>Event Management App</Link>

      <nav>
        {!user ? (
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
