import { lazy } from "react";

export const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout"));
export const Accounts = lazy(() => import("../components/Accounts"));
export const DashContent = lazy(() => import("../Dashboard/DashContent"));
