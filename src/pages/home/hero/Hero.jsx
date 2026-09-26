import SearchBar from "../../../components/search-bar/SearchBar";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const handleSurpriseMe = () => {
    console.log("Surprise me");
  };

  const handleBrowseFoods = () => {
    navigate("/foods");
  };

  const handleHelpMeDecide = () => {
    navigate("/decide");
  };

  return (
    <section className="hero">
      <div className="hero__content">
        <h1>What do you want to eat?</h1>

        <p className="hero__subtitle">
          Find something delicious for your next meal.
        </p>

        <SearchBar />

        <div className="hero__actions">
          <button
            className="hero__button hero__button--primary"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>

          <button
            className="hero__button hero__button--secondary"
            onClick={handleBrowseFoods}
          >
            Browse Foods
          </button>
        </div>

        <div className="hero__decision">
          <p>Still not sure what you want?</p>

          <button
            className="hero__decision-button"
            onClick={handleHelpMeDecide}
          >
            Help Me Decide
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;