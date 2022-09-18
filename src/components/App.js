import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Registration from "./registration/registration";
import { Products } from "./products/Products.view.js";
import GlobalStyle from "../styles/globalStyles";
import Cart from "./Cart/cart";
import CheckOut from "./CheckOut/checkOut";



//console.log(process.env.REACT_APP_URL_PROJECT)

export default function App() {


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