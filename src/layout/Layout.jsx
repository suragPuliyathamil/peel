import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/commons/Header.jsx";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-offwhite text-black dark:bg-gray-900 dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
