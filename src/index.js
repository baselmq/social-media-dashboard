import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import LoadingPage from "./pages/Loading";

const root = ReactDOM.createRoot(document.getElementById("root"));

// .*** --------------------dark Mode--------------------- ***
const selectedTheme = localStorage.getItem("selectedTheme");
if (selectedTheme === "dark") {
  document.querySelector("body").classList.add("dark-mode");
}

const loadingMarkup = <LoadingPage />;

// .*** --------------------render--------------------- ***
root.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);
