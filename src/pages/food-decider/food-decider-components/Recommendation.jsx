import { Link } from "react-router-dom";
import FoodImage from "../../../components/food-image/FoodImage";

export default function Recommendation({ food, onAccept, onReject, disabled }) {
  return <section className="decider-recommendation">
    <p className="decider-recommendation__eyebrow">We found something for you</p>
    <h2>How about {food.name}?</h2>
    <div className="decider-recommendation__card">
      <FoodImage key={food.image_url} src={food.image_url} alt={food.name} />
      <div><h3>{food.name}</h3><p>{food.description}</p>
        <Link to={`/foods/${food.id}`}>View food details</Link>
      </div>
    </div>
    <div className="decider-recommendation__actions">
      <button type="button" disabled={disabled} onClick={onAccept}>Choose this food</button>
      <button type="button" disabled={disabled} onClick={onReject}>Try another food</button>
    </div>
  </section>;
}
