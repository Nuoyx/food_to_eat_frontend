import "./FoodList.css";
import FoodCard from "../../../components/food-card/FoodCard";
import { getPopularFoods } from "../../../services/foodService";
import { useRemoteData } from "../../../hooks/useRemoteData";
import RequestStatus from "../../../components/request-status/RequestStatus";

import { useNavigate } from "react-router-dom";

function FoodList() {
  const request = useRemoteData(getPopularFoods);
  const foods = request.data || [];
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

      <RequestStatus {...request} />
      <div className="popular-foods__grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodList;
