import SearchBar from "../../../components/search-bar/SearchBar";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { getRandomFood } from "../../../services/foodService";
import "./Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const pending = useRef(false);
  const handleSurpriseMe = async () => {
    if (pending.current) return;
    pending.current = true;
    setBusy(true);
    setError(null);
    try {
      const food = await getRandomFood();
      if (food) navigate(`/foods/${food.id}`);
      else setError("No food is available right now. Please try again.");
    } catch {
      setError("Unable to choose a food. Please try again.");
    } finally {
      pending.current = false;
      setBusy(false);
    }
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
            disabled={busy}
          >
            {busy ? "Choosing…" : "Surprise Me"}
          </button>

          <button
            className="hero__button hero__button--secondary"
            onClick={handleBrowseFoods}
          >
            Browse All Foods
          </button>
        </div>

        {error && <p role="alert">{error}</p>}

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
