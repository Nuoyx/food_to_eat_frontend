const FILTERS = [
  {
    name: "Category",
    options: [
      "Main Dish",
      "Side Dish",
      "Dessert",
      "Snack",
      "Drink",
    ],
  },
  {
    name: "Meal",
    options: [
      "Breakfast",
      "Lunch",
      "Dinner",
    ],
  },
  {
    name: "Dietary",
    options: [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
    ],
  },
  {
    name: "Flavor",
    options: [
      "Sweet",
      "Savory",
      "Spicy",
    ],
  },
];

function FoodFilters() {
  return (
    <aside className="food-filters">
      <div className="food-filters__header">
        <h2>Filters</h2>

        <button type="button">
          Clear All
        </button>
      </div>

      <div className="food-filter">
        {FILTERS.map((filter) => (
          <section className="food-filter__group" key={filter.name}>
            <h3>{filter.name}</h3>
            {filter.options.map((option) => (
              <label className="food-filter__option" key={option}>
                <input type="checkbox" value={option} />
                {option}
              </label>
            ))}
          </section>
        ))}

      </div>
    </aside>
  );
}

export default FoodFilters;
