import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import HomePage from './pages/home/HomePage'
import FoodExplore from './pages/food-explore/FoodExplore'
import FoodDecider from './pages/food-decider/FoodDecider'
import FoodDetail from './pages/food-detail/FoodDetail'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/foods" element={<FoodExplore />} />
        <Route path="/foods/:foodId" element={<FoodDetail />} />
        <Route path="/decide" element={<FoodDecider />} />
      </Routes>
    </>

  )
}

export default App
