
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/login";
// import Registration from "./Login/Registration";
// import GlobalStyle from "../styles/globalStyles";



console.log(process.env.REACT_APP_URL_PROJECT)

export default function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="registration" element={<Registration />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}