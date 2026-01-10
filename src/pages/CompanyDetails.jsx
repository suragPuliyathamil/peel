import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/commons/Header.jsx";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Example static data
  const companyData = {
    name: `Company ${id}`,
    contact: "contact@company.com",
    address: "123 Street, City",
    documents: [
      { id: 1, name: "Certificate A", expiry: "2026-12-31" },
      { id: 2, name: "Certificate B", expiry: "2025-06-30" },
    ],
    employees: [
      { id: 1, name: "Alice", empId: "EMP001", contact: "1111111111" },
      { id: 2, name: "Bob", empId: "EMP002", contact: "2222222222" },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="p-6"
    >
    {
    <div className="min-h-screen p-6 bg-offwhite text-black dark:bg-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Section 1: Company Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-6">
        <h2 className="text-2xl font-bold mb-4 text-primaryBlue">
          {companyData.name}
        </h2>
        <p>
          <span className="font-semibold">Contact:</span> {companyData.contact}
        </p>
        <p>
          <span className="font-semibold">Address:</span> {companyData.address}
        </p>
      </div>

      {/* Section 2: Documents Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">Documents</h3>
          <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition">
            Add Document
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-300 dark:border-gray-700">
              <th className="p-2">Certificate Name</th>
              <th className="p-2">Expiry Date</th>
              <th className="p-2">View Certificate</th>
            </tr>
          </thead>
          <tbody>
            {companyData.documents.map((doc) => (
              <tr
                key={doc.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.expiry}</td>
                <td className="p-2">
                  <button className="text-primaryBlue hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3: Employees Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">Employees</h3>
          <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition">
            Add Employee
          </button>
        </div>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-300 dark:border-gray-700">
              <th className="p-2">Employee Name</th>
              <th className="p-2">Employee ID</th>
              <th className="p-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {companyData.employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td
                  className="p-2 text-primaryBlue cursor-pointer hover:underline"
                  onClick={() => navigate(`/employee/${emp.empId}`)}
                >
                  {emp.name}
                </td>
                <td className="p-2">{emp.empId}</td>
                <td className="p-2">{emp.contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>}
    </motion.div>
  );
}
