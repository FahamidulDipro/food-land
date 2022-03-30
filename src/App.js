import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./components/Search/Search";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Navigation from "./components/Navigation/Navigation";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
