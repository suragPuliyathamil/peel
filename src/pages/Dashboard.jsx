import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { searchCompanies } from "../services/CompanyService";
import AddCompanyModal from "../components/modals/AddCompanyModal";

export default function Dashboard() {
  const navigate = useNavigate();
  const [companies, setCompanies] = useState([]);
  const [showAddCompany, setShowAddCompany] = useState(false);

  const fetchCompanies = async () => {
    const data = await searchCompanies({ name: "" });
    setCompanies(data.content || []);
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-primaryBlue">
          Companies
        </h1>

        <button
          onClick={() => setShowAddCompany(true)}
          className="bg-primaryBlue text-white px-4 py-2 rounded"
        >
          + Add Company
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => navigate(`/company/${company.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg"
          >
            <h2 className="text-xl font-bold text-primaryBlue">
              {company.name}
            </h2>
            <p>Industry: {company.industry}</p>
            <p>Status: {company.status}</p>
            <p>Employees: {company.employeeCount}</p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {showAddCompany && (
          <AddCompanyModal
            onClose={() => setShowAddCompany(false)}
            onSuccess={fetchCompanies}
          />
        )}
      </AnimatePresence>
    </>
  );
}
