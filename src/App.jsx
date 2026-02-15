import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import CompanyDetails from "./pages/CompanyDetails";
import EmployeeDetails from "./pages/EmployeeDetails";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/company/:id" element={<CompanyDetails />} />
         <Route
          path="/company/:id/employee/:empId"
          element={<EmployeeDetails />}
        />
      </Route>
    </Routes>
  );
}
