import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import AddDocumentModal from "../components/modals/AddDocumentModal.jsx";
import { searchEmployeesByCompanyId } from "../services/EmployeeService.jsx";
import { getCompanyById } from "../services/CompanyService";

export default function CompanyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [company, setCompany] = useState(null);
  const [loadingCompany, setLoadingCompany] = useState(true);
  const [companyError, setCompanyError] = useState(null);

  const [employees, setEmployees] = useState([]);
  const [loadingEmployees, setLoadingEmployees] = useState(true);
  const [employeeError, setEmployeeError] = useState(null);

  // Fetch company details
  useEffect(() => {
    async function fetchCompany() {
      try {
        setLoadingCompany(true);
        const data = await getCompanyById(id);
        setCompany(data);
      } catch (err) {
        setCompanyError(err.message);
      } finally {
        setLoadingCompany(false);
      }
    }

    fetchCompany();
  }, [id]);

  // Fetch employees
  useEffect(() => {
    async function fetchEmployees() {
      try {
        setLoadingEmployees(true);

        const data = await searchEmployeesByCompanyId({
          companyId: Number(id),
        });

        setEmployees(data.content || []);
      } catch (err) {
        setEmployeeError(err.message);
      } finally {
        setLoadingEmployees(false);
      }
    }

    fetchEmployees();
  }, [id]);

  return (
    <div className="space-y-6 p-6">

      {/* Company Info */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        {loadingCompany && <p>Loading company...</p>}
        {companyError && (
          <p className="text-red-500">{companyError}</p>
        )}

        {!loadingCompany && !companyError && company && (
          <>
            <h2 className="text-2xl font-bold text-primaryBlue">
              {company.name}
            </h2>

            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <p><strong>Registration:</strong> {company.registrationNumber}</p>
              <p><strong>Status:</strong> {company.status}</p>
              <p><strong>Email:</strong> {company.email}</p>
              <p><strong>Phone:</strong> {company.phone}</p>
              <p><strong>Industry:</strong> {company.industry}</p>
              <p><strong>Employees:</strong> {company.employeeCount}</p>
              <p className="md:col-span-2">
                <strong>Address:</strong> {company.address}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Documents Section (Waiting for API) */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">
            Documents
          </h3>

          <button
            onClick={() => setShowModal(true)}
            className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition"
          >
            Add Document
          </button>
        </div>

        <p className="text-gray-500">
          Documents API wiring pending...
        </p>
      </div>

      {/* Employees Section */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold text-primaryBlue">
            Employees
          </h3>

          <button className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition">
            Add Employee
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Employee Code</th>
              <th className="p-2 text-left">Department</th>
              <th className="p-2 text-left">Position</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-left">Contact</th>
            </tr>
          </thead>

          <tbody>
            {loadingEmployees && (
              <tr>
                <td colSpan="6" className="p-2">
                  Loading...
                </td>
              </tr>
            )}

            {employeeError && (
              <tr>
                <td colSpan="6" className="p-2 text-red-500">
                  {employeeError}
                </td>
              </tr>
            )}

            {!loadingEmployees &&
              !employeeError &&
              employees.map((emp) => (
                <tr
                  key={emp.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td
                    className="p-2 text-primaryBlue cursor-pointer hover:underline"
                    onClick={() =>
                      navigate(`/company/${id}/employee/${emp.employeeCode}`)
                    }
                  >
                    {emp.name}
                  </td>

                  <td className="p-2">{emp.employeeCode}</td>
                  <td className="p-2">{emp.department}</td>
                  <td className="p-2">{emp.position}</td>
                  <td className="p-2">{emp.status}</td>
                  <td className="p-2">
                    {emp.phone || emp.email}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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
