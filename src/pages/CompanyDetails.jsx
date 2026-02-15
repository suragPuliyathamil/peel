import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddDocumentModal from "../components/modals/AddDocumentModal.jsx";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

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
    <div className="space-y-6 p-6">
      {/* Section 1: Company Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-primaryBlue">{companyData.name}</h2>
        <p><strong>Contact:</strong> {companyData.contact}</p>
        <p><strong>Address:</strong> {companyData.address}</p>
      </div>

      {/* Section 2: Company Documents Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">Documents</h3>
          <button
            onClick={() => setShowModal(true)}
            className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Add Document
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="p-2 text-left">Certificate Name</th>
              <th className="p-2 text-left">Expiry Date</th>
              <th className="p-2 text-left">View</th>
            </tr>
          </thead>
          <tbody>
            {companyData.documents.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.expiry}</td>
                <td className="p-2">
                  <button className="text-primaryBlue hover:underline">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3: Employees Table */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">Employees</h3>
          <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition">
            Add Employee
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="p-2 text-left">Employee Name</th>
              <th className="p-2 text-left">Employee ID</th>
              <th className="p-2 text-left">Contact</th>
            </tr>
          </thead>
          <tbody>
            {companyData.employees.map((emp) => (
              <tr key={emp.empId} className="border-b border-gray-200 dark:border-gray-700">
                <td
                  className="p-2 text-primaryBlue cursor-pointer hover:underline"
                  onClick={() => navigate(`/company/${id}/employee/${emp.empId}`)}
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

      {/* Add Document Modal for Company */}
      <AnimatePresence>
        {showModal && (
          <AddDocumentModal
            onClose={() => setShowModal(false)}
            companyId={id}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
