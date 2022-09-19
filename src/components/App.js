import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./Login/login";
import Registration from "./registration/registration";
import { Products } from "./products/Products.view.js";
import GlobalStyle from "../styles/globalStyles";
import Cart from "./Cart/cart";
import CheckOut from "./CheckOut/checkOut";
import { AuthContext } from "./common/auth.js";
import {Status} from '../services/bookstore.services.js'

//console.log(process.env.REACT_APP_URL_PROJECT)

export default function App() {
  const { dados } = React.useContext(AuthContext);

  useEffect(() => {
    setInterval(() => {
      Status(dados.token)
    }, 30000);
  }, [dados]);
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<Registration />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}