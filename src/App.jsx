import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Dashboard from "./pages/Dashboard";
import CompanyDetails from "./pages/CompanyDetails";
import EmployeeDetails from "./pages/EmployeeDetails";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/company/:companyId" element={<CompanyDetails />} />
        <Route path="/employee/:empId" element={<EmployeeDetails />} />
      </Routes>
    </AnimatePresence>
  );
}
