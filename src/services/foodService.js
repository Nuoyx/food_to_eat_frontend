import { apiRequest } from "./api.js";

// Curated database IDs: Margherita Pizza, Tonkotsu Ramen, Salmon Sushi Rolls, Tacos al Pastor.
const POPULAR_FOOD_IDS = [246, 51, 62, 276];

export function getFoodById(id, { signal } = {}) {
  return apiRequest(`/food/foods/${encodeURIComponent(id)}`, { signal });
}

export async function getPopularFoods({ signal } = {}) {
  const foods = await Promise.all(POPULAR_FOOD_IDS.map((id) => getFoodById(id, { signal })));
  return foods.filter(Boolean);
}

export function getRandomFood({ signal } = {}) {
  return apiRequest("/recommendation/random", { signal });
}

export function getFilterOptions({ signal } = {}) {
  return apiRequest("/categories", { signal });
}

export function getFoods(queryString, { signal } = {}) {
  const source = new URLSearchParams(queryString);
  const params = new URLSearchParams();
  const name = source.get("q")?.trim();
  if (name) params.set("name", name);
  if (source.get("cuisine")) params.set("cuisine", source.get("cuisine"));
  for (const [key, field] of Object.entries({
    food_types: "types", main_ingredients: "ingredients", flavor_profiles: "flavor",
  })) {
    source.getAll(key).forEach((value) => params.append(field, value));
  }
  const page = Number(source.get("page") || 1);
  params.set("page", Number.isSafeInteger(page) && page > 0 ? page : 1);
  params.set("pageSize", "12");
  return apiRequest(`/food?${params}`, { signal });
}
