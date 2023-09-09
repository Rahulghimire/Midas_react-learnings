import { lazy } from "react";

export const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout"));
export const Accounts = lazy(() => import("../components/Accounts"));
export const Analytics = lazy(() => import("../components/Analytics"));
export const Appointment = lazy(() => import("../components/Appointment"));
export const Assets = lazy(() => import("../components/Assets"));
export const DashContent = lazy(() => import("../Dashboard/DashContent"));
export const PatientAdministration = lazy(() =>
  import("../components/PatientAdministration")
);

export const BasicInformation = lazy(() =>
  import("../components/PatientAdministration/BasicInformation")
);

export const OtherInformation = lazy(() =>
  import("../components/PatientAdministration/OtherInformation")
);
