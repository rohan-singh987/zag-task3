"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "./Store";

// Wraping up Application under redux-state using Provider
const Prvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Prvider;
