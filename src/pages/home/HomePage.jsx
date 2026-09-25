import "./HomePage.css";
import Header from "../../components/header/Header";
import Hero from "./hero/Hero";
import FoodList from "./food-list-section/FoodList";

function HomePage(){
  
  return (
    <div className="home-page">
      <Header />
      <main className="home">
        <Hero />
        <FoodList /> 
      </main>
    </div>
  );
}

export default HomePage