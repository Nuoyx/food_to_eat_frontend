import { useSearchParams } from "react-router-dom";
import { getFilterOptions } from "../../../services/foodService";
import { useRemoteData } from "../../../hooks/useRemoteData";
import RequestStatus from "../../../components/request-status/RequestStatus";

const FILTERS = [
  { key: "cuisine", apiKey: "cuisine", name: "Cuisine" },
  { key: "food_types", apiKey: "types", name: "Food types" },
  { key: "main_ingredients", apiKey: "ingredients", name: "Main ingredients" },
  { key: "flavor_profiles", apiKey: "flavor", name: "Flavor profiles" },
];

export default function FoodFilters() {
  const [searchParams, setSearchParams] = useSearchParams();
  const request = useRemoteData(getFilterOptions);
  const toggleFilter = (key, option) => setSearchParams((previous) => {
    const next = new URLSearchParams(previous);
    const selected = key === "cuisine" ? [next.get(key)] : next.getAll(key);
    const updated = selected.includes(option) ? selected.filter((value) => value !== option)
      : key === "cuisine" ? [option] : [...selected, option];
    next.delete(key);
    updated.filter(Boolean).forEach((value) => next.append(key, value));
    next.delete("page");
    return next;
  });
  const resetFilters = () => setSearchParams((previous) => {
    const next = new URLSearchParams(previous);
    FILTERS.forEach(({ key }) => next.delete(key));
    next.delete("page");
    return next;
  });
  return (
    <aside className="food-filters" aria-label="Filter foods">
      <div className="food-filters__header">
        <h2>Filters</h2>
        <button type="button" onClick={resetFilters}
          disabled={!FILTERS.some(({ key }) => searchParams.has(key))}>Reset filters</button>
      </div>
      <RequestStatus {...request} />
      {request.data && <div className="food-filter">
        {FILTERS.map(({ key, apiKey, name }) => (
          <section className="food-filter__group" key={key} aria-labelledby={`filter-${key}`}>
            <h3 id={`filter-${key}`}>{name}</h3>
            <div className="food-filter__options" role="region" aria-labelledby={`filter-${key}`} tabIndex={0}>
              {request.data[apiKey].map((option) => (
                <label className="food-filter__option" key={option}>
                  <input type="checkbox" value={option}
                    checked={key === "cuisine" ? searchParams.get(key) === option : searchParams.getAll(key).includes(option)}
                    onChange={() => toggleFilter(key, option)} />
                  {option}
                </label>
              ))}
            </div>
          </section>
        ))}
      </div>}
    </aside>
  );
}
