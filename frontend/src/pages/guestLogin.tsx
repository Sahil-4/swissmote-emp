import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import styles from "../styles/authForm.module.css";

const GuestLogin = () => {
  const usernameInput = useRef<HTMLInputElement | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameInput.current?.value;

    if (!username) return;

    //
  };

  return (
    <>
      <Header />
      <section>
        <form onSubmit={handleLogin} className={styles.authForm}>
          <input type="text" placeholder="Username" ref={usernameInput} required={true} />
          <button type="submit">Login as Guest</button>
          <div>
            <Link to={"/login"}>Login</Link>
            &nbsp;|&nbsp;
            <Link to={"/signup"}>Sign up</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default GuestLogin;
