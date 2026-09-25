import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import FoodExplore from './pages/food-explore/FoodExplore'
import FoodDecider from './pages/food-decider/FoodDecider'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/foods" element={<FoodExplore />} />
      <Route path="/decide" element={<FoodDecider />} />
    </Routes>
  )
}

export default App
