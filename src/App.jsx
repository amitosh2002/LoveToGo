import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SHow from "./Component/SHow";
import Navbar from "./Component/Navbar";
import Explore from "./Component/Explore";
import Routers from "./Router/Routers";
import SingleProduct from "./Component/SingleProduct";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<SHow />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/detail/:id" element={<SingleProduct />}></Route>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
