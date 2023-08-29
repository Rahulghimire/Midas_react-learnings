import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner";
import { Routes } from "./Dashboard/MainRoute";

function App() {
  return <RouterProvider router={Routes} fallbackElement={<Spinner />} />;
}

export default App;
