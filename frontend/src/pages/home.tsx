import Header from "../components/header.jsx";
import Filter from "../components/filter.jsx";

const Home = () => {
  return (
    <>
      <Header />
      <section>
        <Filter />
        <main>
          {/* list of all events */}
        </main>
      </section>
    </>
  );
};

export default Home;
