import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import DashboardPage from "../pages/dashboard/DashboardPage";
import CustomersPage from "../pages/customers/CustomersPage";
import DebtsPage from "../pages/debts/DebtsPage";
import ReportsPage from "../pages/reports/ReportsPage";
import SettingsPage from "../pages/settings/SettingsPage";
import CustomerDetailPage from "../pages/customers/CustomerDetailPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/debts" element={<DebtsPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
<Route path="/customers/:id" element={<CustomerDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


