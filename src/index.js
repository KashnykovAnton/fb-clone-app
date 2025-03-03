import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import LoaderSpin from "./components/LoaderSpin/LoaderSpin";
import { store, persistore } from "./store/store";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={<LoaderSpin />} persistor={persistore}>
      <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </React.StrictMode>
    </PersistGate>
  </Provider>
);
