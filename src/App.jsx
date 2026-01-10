import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import CompanyDetails from "./pages/CompanyDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/company/:id" element={<CompanyDetails />} />
    </Routes>
  );
}
