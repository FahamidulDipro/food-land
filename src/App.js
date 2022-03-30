import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";
import MealDetail from "./components/MealDetail/MealDetail";
import Meal from "./components/Meal/Meal";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:mealId" element={<MealDetail></MealDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/meal" element={<Meal></Meal>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
