import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  DashboardLayout,
  Accounts,
  DashContent,
  Assets,
  Appointment,
  Analytics,
  PatientAdministration,
  Login,
  Register,
  Spinner,
  Investigation,
} from "./LazyRoute";

import ReportPrint from "../ReportPrint";

export const Routes = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/practice" element={<ReportPrint />} />
      <Route path="/" element={<DashboardLayout />}>
        {/* <Route index element={<Registration />} /> */}
        <Route index element={<DashContent />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="assets" element={<Assets />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="analytics" element={<Analytics />} />
        <Route
          path="patient-adminstration"
          element={<PatientAdministration />}
        />
        <Route path="investigation" element={<Investigation />} />
        <Route path="*" element={<Spinner />} />
      </Route>
    </Route>
  )
);
