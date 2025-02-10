import { jwtDecode as decode } from "jwt-decode";
import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface UserT {
  _id: string;
  username: string;
  token: string;
}

interface AppContextI {
  error: string | null;
  loading: boolean;
  user: UserT | null;
  login: (username: string, password: string) => void;
  signup: (username: string, password: string) => void;
  guestLogin: (username: string) => void;
  logout: () => void;
}

const initialValue: AppContextI = {
  error: null,
  loading: false,
  user: null,
  login: () => null,
  signup: () => null,
  guestLogin: () => null,
  logout: () => null,
};

const AppContext = createContext<AppContextI>(initialValue);

export const AppProvider = ({ children }: PropsWithChildren) => {
  const API_BASE_URI = import.meta.env.VITE_BASE_URL;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [user, setUser] = useState<UserT | null>(null);

  const login = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const URL = `${API_BASE_URI}/api/v1/users/login`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      };

      const response = await fetch(URL, options);
      const { success = false, message = "", data = null } = await response.json();

      if (!success) {
        setError(message);
      } else {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (username: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const URL = `${API_BASE_URI}/api/v1/users/signup`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      };

      const response = await fetch(URL, options);
      const { success = false, message = "", data = null } = await response.json();

      if (!success) {
        setError(message);
      } else {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const guestLogin = async (username: string) => {
    try {
      setLoading(true);
      setError(null);
      const URL = `${API_BASE_URI}/api/v1/users/guest`;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      };

      const response = await fetch(URL, options);
      const { success = false, message = "", data = null } = await response.json();

      if (!success) {
        setError(message);
      } else {
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    if (user) return;
    const data = localStorage.getItem("user");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, [user]);

  useEffect(() => {
    if (!user) return;
    const payload = decode(user.token);
    if (payload.exp! < Date.now() / 1000) logout();
  }, [user]);

  return (
    <AppContext.Provider value={{ user, loading, error, login, signup, guestLogin, logout }}>{children}</AppContext.Provider>
  );
};

export { AppContext };
export type { UserT, AppContextI };
