import "./FoodList.css";
import FoodCard from "../../../components/food-card/FoodCard";
import foods from "../../../data/foods";

import { useNavigate } from "react-router-dom";

function FoodList() {
  const navigate = useNavigate();
  const handleBrowseAll = () => {
    navigate("/foods");
  };

  return (
    <section className="popular-foods">
      <div className="popular-foods__header">
        <div>
          <h2>Popular Foods</h2>

          <p>
            Discover some popular choices for your next meal.
          </p>
        </div>

        <button
          className="popular-foods__browse-button"
          onClick={handleBrowseAll}
        >
          Browse All Foods →
        </button>
      </div>

      <div className="popular-foods__grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodList;