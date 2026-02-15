import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AddDocumentModal from "../components/modals/AddDocumentModal.jsx";

export default function EmployeeDetails() {
  const { id, empId } = useParams(); // company id + employee id
  const [showModal, setShowModal] = useState(false);

  // Example employee data (static)
  const employee = {
    name: "Alice Johnson",
    empId,
    contact: "111-222-3333",
    role: "Software Engineer",
    photo: "https://via.placeholder.com/120",
    documents: [
      { id: 1, name: "ID Proof", expiry: "2026-12-31" },
      { id: 2, name: "Contract", expiry: "2025-06-30" },
    ],
  };

  return (
    <div className="min-h-screen p-6 bg-offwhite text-black dark:bg-gray-900 dark:text-white space-y-6">
      {/* Section 1: Employee Metadata */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow flex items-center gap-6">
        <img
          src={employee.photo}
          alt={employee.name}
          className="w-24 h-24 rounded-full object-cover"
        />
        <div>
          <h2 className="text-2xl font-bold text-primaryBlue">{employee.name}</h2>
          <p><strong>ID:</strong> {employee.empId}</p>
          <p><strong>Contact:</strong> {employee.contact}</p>
          <p><strong>Role:</strong> {employee.role}</p>
        </div>
      </div>

      {/* Section 2: Documents Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
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
              <th className="p-2 text-left">Document Name</th>
              <th className="p-2 text-left">Expiry Date</th>
            </tr>
          </thead>
          <tbody>
            {employee.documents.map((doc) => (
              <tr key={doc.id} className="border-b border-gray-200 dark:border-gray-700">
                <td className="p-2">{doc.name}</td>
                <td className="p-2">{doc.expiry}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Document Modal */}
      <AnimatePresence>
        {showModal && (
          <AddDocumentModal
            onClose={() => setShowModal(false)}
            employeeId={empId}
            companyId={id}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
