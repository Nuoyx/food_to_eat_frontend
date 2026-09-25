function Recommendation({ food, onRestart }) {
  return (
    <section className="decider-recommendation">
      <p className="decider-recommendation__eyebrow">
        We found something for you
      </p>
      <h1>How about {food.name}?</h1>

      <div className="decider-recommendation__card">
        <img src={food.image} alt={food.name} />

        <div>
          <h2>{food.name}</h2>
          <p>{food.description}</p>
        </div>
      </div>

      <div className="decider-recommendation__actions">
        <button type="button">
          Explore {food.name}
        </button>

        <button
          type="button"
          onClick={onRestart}
        >
          Try Again
        </button>
      </div>
    </section>
  )
}


export default Recommendation