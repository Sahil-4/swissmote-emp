import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import { useAppContext } from "../Context/useAppContext.js";
import styles from "../styles/authForm.module.css";

const Signup = () => {
  const usernameInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const { signup } = useAppContext();

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameInput.current?.value;
    const password = passwordInput.current?.value;

    if (!username || !password) return;

    signup(username, password);
  };

  return (
    <>
      <Header />
      <section>
        <form onSubmit={handleSignUp} className={styles.authForm}>
          <input type="text" placeholder="Username" ref={usernameInput} required={true} />
          <input type="password" placeholder="Password" ref={passwordInput} required={true} />
          <button type="submit">Sign up</button>
          <div>
            <Link to={"/login"}>Login</Link>
            &nbsp;|&nbsp;
            <Link to={"/guestLogin"}>Guest Login</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signup;
