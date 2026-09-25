import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import FoodExplore from './pages/food-explore/FoodExplore'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/foods" element={<FoodExplore />} />
    </Routes>
  )
}

export default App
