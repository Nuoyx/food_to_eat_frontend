import "./FoodExplore.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getFoods } from "../../services/foodService";
import SearchBar from "../../components/search-bar/SearchBar";
import FoodFilters from "./food-explore-components/FoodFilter";
import FoodResults from "./food-explore-components/FoodResults";

function FoodExplore() {
  const [searchParams] = useSearchParams();
  const queryString = searchParams.toString();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    let active = true;

    const loadFoods = async () => {
      const result = await getFoods(queryString);
      if (active) {
        setFoods(result);
      }
    };

    loadFoods();

    return () => {
      active = false;
    };
  }, [queryString]);

  return (
    <main className="food-explore">
      <h1>Explore All Foods</h1>

      <SearchBar />

      <section className="food-explore__browser">
        <FoodFilters />
        <FoodResults foods={foods} />
      </section>
    </main>
  );
}

export default FoodExplore;
