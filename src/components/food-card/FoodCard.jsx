function FoodCard({ food }) {
  const handleClick = () => {
    console.log("Selected food:", food.name);
  };

  return (
    <article
      className="food-card"
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="food-card__image-container">
        <img
          className="food-card__image"
          src={food.image}
          alt={food.name}
        />

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
        <h3>{food.name}</h3>

        <p>{food.category}</p>
      </div>
    </article>
  );
}

export default FoodCard;