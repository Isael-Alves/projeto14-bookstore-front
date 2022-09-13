import ReactDOM from "react-dom";
import App from "./components/App";
import dotenv from 'dotenv';
//REACT_APP_URL_PROJECT
dotenv.config();

ReactDOM.render(<App />, document.querySelector(".root"));
