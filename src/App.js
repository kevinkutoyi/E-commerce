import "./App.css";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

import { Routes, Route } from "react-router-dom";
// import { Switch, Route } from "react-router-dom";
// import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Products from "./Component/Products";
import Product from "./Component/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Switch> */}
        <Route exact path="/" Component={Home} />
        <Route exact path="/products" Component={Products} />
        <Route exact path="/products/:id" Component={Product} />
        {/* <Switch/> */}
      </Routes>
      <Home />
    </div>
  );
}

export default App;
