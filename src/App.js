import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Pages/Products/Products";
import Services from "./Components/Pages/Services/Services";
import SignUp from "./Components/Pages/SignUp/SignUp";

import Header from "./Components/Shear/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
