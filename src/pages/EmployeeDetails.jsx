import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

export default function EmployeeDetails() {
  const { empId } = useParams();

  // Static mock data (replace with API later)
  const employee = {
    empId,
    name: "Alice Johnson",
    contact: "9999999999",
    email: "alice@company.com",
    designation: "Senior Engineer",
    photo:
      "https://via.placeholder.com/120", // replace later
    documents: [
      {
        id: 1,
        name: "ID Proof",
        expiry: "2030-12-31",
      },
      {
        id: 2,
        name: "Training Certificate",
        expiry: "2026-05-20",
      },
    ],
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="p-6"
    >
      {/* SECTION 1: Employee Metadata */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6 flex gap-6">
        <img
          src={employee.photo}
          alt="Employee"
          className="w-32 h-32 rounded object-cover border"
        />

        <div>
          <h1 className="text-2xl font-bold text-primaryBlue mb-2">
            {employee.name}
          </h1>

          <p>
            <span className="font-semibold">Employee ID:</span>{" "}
            {employee.empId}
          </p>
          <p>
            <span className="font-semibold">Designation:</span>{" "}
            {employee.designation}
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            {employee.email}
          </p>
          <p>
            <span className="font-semibold">Contact:</span>{" "}
            {employee.contact}
          </p>
        </div>
      </div>

      {/* SECTION 2: Documents Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-primaryBlue">
            Employee Documents
          </h2>

          <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition">
            Add Document
          </button>
        </div>

        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700 text-left">
              <th className="p-2">Document Name</th>
              <th className="p-2">Expiry Date</th>
              <th className="p-2">View</th>
            </tr>
          </thead>

          <tbody>
            {employee.documents.map((doc) => (
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

            {employee.documents.length === 0 && (
              <tr>
                <td
                  colSpan="3"
                  className="p-4 text-center text-gray-500"
                >
                  No documents available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
