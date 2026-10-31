import { Link, useParams } from "react-router-dom";
import FoodImage from "../../components/food-image/FoodImage";
import foods from "../../data/foods";
import "./FoodDetail.css";

function FoodDetail() {
  const { foodId } = useParams();
  const food = foods.find((item) => String(item.id) === foodId);

  if (!food) {
    return (
      <>
        <main className="food-detail">
          <section className="food-detail__not-found">
            <h1>Food not found</h1>
            <p>That food may have been removed or the link may be incorrect.</p>
            <Link className="food-detail__back-link" to="/foods">
              Browse all foods
            </Link>
          </section>
        </main>
      </>
    );
  }

  const restaurantSearch = new URLSearchParams({
    q: `restaurants serving ${food.name} near me`,
  });
  const recipeSearch = new URLSearchParams({
    q: `${food.name} recipe`,
  });

  return (
    <>
      <main className="food-detail">
        <Link className="food-detail__back-link" to="/foods">
          ← Back to foods
        </Link>

        <article className="food-detail__card">
          <FoodImage
            className="food-detail__image"
            src={food.image}
            alt={food.name}
          />
          <div className="food-detail__content">
            <p className="food-detail__category">{food.category} cuisine</p>
            <h1>{food.name}</h1>
            <p className="food-detail__description">{food.description}</p>

            <section className="food-detail__searches" aria-label="Explore more">
              <h2>Explore {food.name}</h2>
              <div className="food-detail__actions">
                <a
                  className="food-detail__action"
                  href={`https://www.google.com/search?${restaurantSearch}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find restaurants near me
                  <span aria-hidden="true">↗</span>
                </a>
                <a
                  className="food-detail__action food-detail__action--secondary"
                  href={`https://www.google.com/search?${recipeSearch}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Search for a recipe
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}

export default FoodDetail;
