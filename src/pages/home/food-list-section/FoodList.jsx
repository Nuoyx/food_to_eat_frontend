import "./FoodList.css";
import FoodCard from "./food-card/FoodCard";

const popularFoods = [
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

function FoodList() {
  const handleBrowseAll = () => {
    console.log("Browse all foods");
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
        {popularFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </section>
  );
}

export default FoodList;