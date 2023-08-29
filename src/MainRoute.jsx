import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { DashboardLayout, Registration } from "./Dashboard/LazyRoute";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Registration />} />
      </Route>
    </Route>
  )
);
