import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/search/SearchBar";
import { searchCompanies } from "../services/companyService";

export default function Dashboard() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCompanies = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await searchCompanies({
        name: search, // empty → all companies
      });

      setCompanies(data.content || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial load → all companies
  useEffect(() => {
    fetchCompanies();
  }, []);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={fetchCompanies}
      />

      {loading && <p className="mt-6">Loading...</p>}
      {error && <p className="mt-6 text-red-500">{error}</p>}

      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => navigate(`/company/${company.id}`)}
            className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
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
    </>
  );
}
