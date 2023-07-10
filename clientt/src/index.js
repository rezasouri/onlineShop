import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/fontiran.css";
import App from "./App";
import rtl from "jss-rtl";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import { create } from "jss";
import { StylesProvider, jssPreset } from "@mui/styles";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./state";

// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

const store = configureStore({
  // this will configure our store : we pass this to the store property of provider tag below
  reducer: { cart: cartReducer }, // we can have multiple reducers here
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <App />
        </StylesProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

