import { Link } from "react-router-dom";
import Ticket from "./../images/movie_tickets.jpg";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h2>Find an Anime to watch tonight!</h2>
        <hr />
        <Link to="/animes">
          <img src={Ticket} alt="Anime tickets"></img>
        </Link>
      </div>
    </>
  );
};

export default Home;
