import React, { useEffect, useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
import Cart from "./component/Cart";
import Login from "./component/Login"; // Import the Login component
import Signup from "./component/Signup";
import ForgotPassword from "./component/ForgotPassword";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import productList from "./component/data";

const App = () => {
  const [productId, setProudctId] = useState("");
  const [cartAllProduct, setCartAllProduct] = useState([]);

  useEffect(() => {
    const filteredObject = productList.filter(
      (product) => product.id === productId
    );
    setCartAllProduct([...cartAllProduct, ...filteredObject]);
  }, [productId]);

  return (
    <BrowserRouter>
      <Header cartAllProduct={cartAllProduct} />
      <Routes>
        <Route
          path="/"
          element={<Home setProductId={setProudctId} />}
        />
        <Route
          path="/cart"
          element={<Cart cartAllProduct={cartAllProduct} setCartAllProduct={setCartAllProduct} />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
