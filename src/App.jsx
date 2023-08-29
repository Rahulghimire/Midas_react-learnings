import { Suspense, lazy } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes } from "./Dashboard/MainRoute";
// const AsyncLogin = lazy(() => import("./components/Login"));
// const AsyncHome = lazy(() => import("./Pages/Home"));

// const AsyncPractice = lazy(() => import("./components/Practice"));

function App() {
  return (
    // <Suspense fallback={<Spinner />}>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<AsyncLogin />} />
    //       {/* <Route path="/home" element={<AsyncHome />} /> */}
    //       <Route path="/practice" element={<AsyncPractice />} />
    //       <Route
    //         path="*"
    //         element={
    //           <h1 className="text-center text-info">Page not Found!!</h1>
    //         }
    //       />
    //     </Routes>
    //   </Router>
    // </Suspense>

    <Suspense fallback={<Spinner />}>
      <RouterProvider router={Routes} />
    </Suspense>
  );
}

export default App;
