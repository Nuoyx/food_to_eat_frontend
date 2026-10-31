import { Link } from "react-router-dom";
import FoodImage from "../food-image/FoodImage";

function FoodCard({ food }) {
  return (
    <article className="food-card">
      <div className="food-card__image-container">
        <Link to={`/foods/${food.id}`} aria-label={`View ${food.name} details`}>
          <FoodImage
            className="food-card__image"
            src={food.image}
            alt={food.name}
          />
        </Link>

        <button
          className="food-card__favorite"
          onClick={(event) => {
            event.stopPropagation();
            console.log("Favorite:", food.name);
          }}
          aria-label={`Favorite ${food.name}`}
        >
          ♡
        </button>
      </div>

      <div className="food-card__content">
        <Link className="food-card__details-link" to={`/foods/${food.id}`}>
          <h3>{food.name}</h3>
          <p>{food.category}</p>
        </Link>
      </div>
    </article>
  );
}

export default FoodCard;