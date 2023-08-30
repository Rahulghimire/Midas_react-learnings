import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DashboardLayout, Accounts, DashContent } from "./LazyRoute";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DashboardLayout />}>
        {/* <Route index element={<Registration />} /> */}
        <Route index element={<DashContent />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Route>
    </Route>
  )
);
