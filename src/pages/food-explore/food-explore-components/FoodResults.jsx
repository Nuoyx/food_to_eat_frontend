import FoodCard from "../../../components/food-card/FoodCard";
import foods from "../../../data/foods";

function FoodResults() {
  return (
    <section className="food-results">
      <div className="popular-foods__header">
          <p className="food-results__count">
            {foods.length} foods found
          </p>
          <label className="food-results__sort">
            Sort:
            <select defaultValue="popular">
              <option value="popular">Popular</option> 
              <option value="name-asc">A → Z</option> 
              <option value="name-desc">Z → A</option> 
              <option value="recent">Recently Added</option>
            </select>
          </label>
      </div>

      <div className="popular-foods__grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodResults;

