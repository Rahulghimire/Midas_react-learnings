import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/LoadingStates/Spinner";
import { Routes } from "./route/Routes";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

// import { Provider } from "react-redux";

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
