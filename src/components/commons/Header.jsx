import { FiSettings } from "react-icons/fi";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-primaryBlue text-white px-6 py-4 flex justify-between items-center shadow">
      <div className="flex items-center gap-2">
        <FiSettings size={22} />
        <span className="font-bold">Settings</span>
      </div>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-primaryBlue px-4 py-1 rounded font-semibold"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}
