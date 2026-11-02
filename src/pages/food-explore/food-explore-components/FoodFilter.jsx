import { useSearchParams } from "react-router-dom";

const FILTERS = [
  {
    key: "cuisine",
    name: "Cuisine",
    options: ["Italian", "Japanese", "Mexican"],
  },
  {
    key: "food_types",
    name: "Food types",
    options: [
      "Main Dish",
      "Side Dish",
      "Dessert",
      "Snack",
      "Drink",
    ],
  },
  {
    key: "main_ingredients",
    name: "Main ingredients",
    options: ["Beef", "Chicken", "Egg", "Pork", "Rice", "Salmon"],
  },
  {
    key: "flavor_profiles",
    name: "Flavor profiles",
    options: [
      "Sweet",
      "Savory",
      "Spicy",
      "Tangy",
      "Umami",
    ],
  },
];

function FoodFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const toggleFilter = (key, option) => {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      const selected = next.getAll(key);
      const updated = selected.includes(option)
        ? selected.filter((value) => value !== option)
        : [...selected, option];

      next.delete(key);
      updated.forEach((value) => next.append(key, value));
      next.delete("q");
      next.delete("page");
      return next;
    });
  };

  const resetFilters = () => {
    setSearchParams((previous) => {
      const next = new URLSearchParams(previous);
      FILTERS.forEach(({ key }) => next.delete(key));
      next.delete("q");
      next.delete("page");
      return next;
    });
  };

  const hasFilters = FILTERS.some(
    ({ key }) => searchParams.getAll(key).length > 0
  );

  return (
    <aside className="food-filters" aria-label="Filter foods">
      <div className="food-filters__header">
        <h2>Filters</h2>

        <button type="button" onClick={resetFilters} disabled={!hasFilters}>
          Reset filters
        </button>
      </div>

      <div className="food-filter">
        {FILTERS.map((filter) => (
          <section
            className="food-filter__group"
            key={filter.key}
            aria-labelledby={`filter-${filter.key}`}
          >
            <h3 id={`filter-${filter.key}`}>{filter.name}</h3>
            <div
              className="food-filter__options"
              role="region"
              aria-labelledby={`filter-${filter.key}`}
              tabIndex={0}
            >
            {filter.options.map((option) => (
              <label className="food-filter__option" key={option}>
                <input
                  type="checkbox"
                  value={option}
                  checked={searchParams.getAll(filter.key).includes(option)}
                  onChange={() => toggleFilter(filter.key, option)}
                />
                {option}
              </label>
            ))}
            </div>
          </section>
        ))}

      </div>
    </aside>
  );
}

export default FoodFilters;
