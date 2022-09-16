import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthProvider } from './components/common/auth.js'

ReactDOM.render(<AuthProvider><App /></AuthProvider>, document.querySelector(".root"));
