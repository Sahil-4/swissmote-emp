import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/header.jsx";
import styles from "../styles/authForm.module.css";

const Login = () => {
  const usernameInput = useRef<HTMLInputElement | null>(null);
  const passwordInput = useRef<HTMLInputElement | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameInput.current?.value;
    const password = passwordInput.current?.value;

    if (!username || !password) return;

    //
  };

  return (
    <>
      <Header />
      <section>
        <form onSubmit={handleLogin} className={styles.authForm}>
          <input type="text" placeholder="Username" ref={usernameInput} required={true} />
          <input type="password" placeholder="Password" ref={passwordInput} required={true} />
          <button type="submit">Login</button>
          <div>
            <Link to={"/signup"}>Sign up</Link>
            &nbsp;|&nbsp;
            <Link to={"/guestLogin"}>Guest Login</Link>
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
