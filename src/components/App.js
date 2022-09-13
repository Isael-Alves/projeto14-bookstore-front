import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Registration from "./Login/Registration";
import GlobalStyle from "../styles/globalStyles";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}