import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/commons/Header.jsx";
import SearchBar from "../components/search/SearchBar.jsx";
import DashboardCard from "../components/dashboard/DashboardCard.jsx";

export default function Dashboard() {
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const companies = [
    { id: 1, name: "Company A", revenue: "$1M" },
    { id: 2, name: "Company B", revenue: "$2M" },
    { id: 3, name: "Company C", revenue: "$3M" },
  ];

  return (
    <div className="min-h-screen p-6 bg-offwhite text-black dark:bg-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <SearchBar />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {companies.map((company) => (
          <div
            key={company.id}
            onClick={() => navigate(`/company/${company.id}`)}
            className="cursor-pointer"
          >
            <DashboardCard
              title={company.name}
              description={`Revenue: ${company.revenue}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
