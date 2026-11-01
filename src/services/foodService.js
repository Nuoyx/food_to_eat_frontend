import foods from "../data/foods";

const FILTER_KEYS = [
  "cuisine",
  "food_types",
  "main_ingredients",
  "flavor_profiles",
];

// Mock backend
export async function getFoods(queryString) {
  const params = new URLSearchParams(queryString);
  const query = (params.get("q") ?? "").trim().toLowerCase();

  return foods.filter((food) =>
    food.name.toLowerCase().includes(query) &&
    FILTER_KEYS.every((key) => {
      const selected = params.getAll(key);
      const values = Array.isArray(food[key]) ? food[key] : [food[key]];

      return selected.length === 0 || selected.some((option) =>
        values.some((value) => value.toLowerCase() === option.toLowerCase())
      );
    })
  );
}
