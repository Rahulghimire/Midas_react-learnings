import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/LoadingStates/Spinner";
import { Routes } from "./route/Routes";

function App() {
  return (
    <RouterProvider
      router={Routes}
      fallbackElement={<Spinner />}
      future={{ v7_startTransition: true }}
    />
  );
}

export default App;
