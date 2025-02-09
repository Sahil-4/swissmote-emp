import Header from "../components/header.jsx";
import Filter from "../components/filter.jsx";
import EventsList from "../components/eventsList.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <Filter />
        <EventsList />
      </section>
    </>
  );
};

export default Home;
