import FoodCard from "../../../components/food-card/FoodCard";


const foodList = [
  {
    id: 1,
    name: "Pizza",
    category: "Italian",
    image: "/images/foods/pizza.jpg",
  },
  {
    id: 2,
    name: "Ramen",
    category: "Japanese",
    image: "/images/foods/ramen.jpg",
  },
  {
    id: 3,
    name: "Tacos",
    category: "Mexican",
    image: "/images/foods/tacos.jpg",
  },
  {
    id: 4,
    name: "Sushi",
    category: "Japanese",
    image: "/images/foods/sushi.jpg",
  },
];

function FoodResults() {
  return (
    <section className="food-results">
      <div className="popular-foods__header">
          <p className="food-results__count">
            {foodList.length} foods found
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
        {foodList.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodResults;


