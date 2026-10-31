import "./FoodExplore.css";
import SearchBar from "../../components/search-bar/SearchBar";
import FoodFilters from "./food-explore-components/FoodFilter";
import FoodResults from "./food-explore-components/FoodResults";

function FoodExplore() {
  return (
    <main className="food-explore">
      <h1>Explore All Foods</h1>

      <SearchBar />

      <section className="food-explore__browser">
        <FoodFilters />
        <FoodResults />
      </section>
    </main>
  );
}

export default FoodExplore;