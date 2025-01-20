import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
//bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "./context/CartContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <CartContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </CartContextProvider>
);
