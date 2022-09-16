import UserContext from "../context/UserContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
import Registration from "./registration/registration";
import GlobalStyle from "../styles/globalStyles";
import { useState } from "react";


//console.log(process.env.REACT_APP_URL_PROJECT)

export default function App() {

  const [user, setUser] = useState({});

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/sign-up" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}