import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Homw</Link>
        </li>
        <li>
          <Link to="/User">Books</Link>
        </li>
      </ul>
    </nav>

    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
