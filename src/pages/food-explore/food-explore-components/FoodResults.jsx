import FoodCard from "../../../components/food-card/FoodCard";

function FoodResults({ foods }) {
  return (
    <section className="food-results">
      <div className="popular-foods__header">
          <p className="food-results__count" role="status">
            {foods.length} {foods.length === 1 ? "food" : "foods"} found
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

      {foods.length === 0 && (
        <div className="food-results__empty">
          <h2>No foods found</h2>
          <p>Try another food name.</p>
        </div>
      )}

      <div className="popular-foods__grid">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodResults;

