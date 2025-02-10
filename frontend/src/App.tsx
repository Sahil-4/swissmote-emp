import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import AddEvent from "./pages/addEvent.jsx";
import UpdateEvent from "./pages/updateEvent.jsx";
import EventDetails from "./pages/eventDetails.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import GuestLogin from "./pages/guestLogin.jsx";
import "./styles/globals.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/addEvent",
      element: <AddEvent />,
    },
    {
      path: "/updateEvent/:id",
      element: <UpdateEvent />,
    },
    {
      path: "/event/:id",
      element: <EventDetails />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/guestLogin",
      element: <GuestLogin />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
