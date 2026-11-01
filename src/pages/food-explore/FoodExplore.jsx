import "./FoodExplore.css";
import { useSearchParams } from "react-router-dom";
import foods from "../../data/foods";
import SearchBar from "../../components/search-bar/SearchBar";
import FoodFilters from "./food-explore-components/FoodFilter";
import FoodResults from "./food-explore-components/FoodResults";

function FoodExplore() {
  const [searchParams] = useSearchParams();
  const query = (searchParams.get("q") ?? "").trim().toLowerCase();

  const matchingFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(query)
  );

  return (
    <main className="food-explore">
      <h1>Explore All Foods</h1>

      <SearchBar />

      <section className="food-explore__browser">
        <FoodFilters />
        <FoodResults foods={matchingFoods} />
      </section>
    </main>
  );
}

export default FoodExplore;
