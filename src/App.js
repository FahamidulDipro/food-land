import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./components/Search/Search";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
      <Search></Search>
    </div>
  );
}

export default App;
