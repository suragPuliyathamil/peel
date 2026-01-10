import { FiSettings } from "react-icons/fi";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <div className="flex justify-between items-center p-4 bg-primaryBlue text-white rounded-b-md shadow-md">
      {/* Left */}
      <div className="flex items-center space-x-2">
        <FiSettings size={24} className="cursor-pointer hover:text-gray-300" />
        <span className="font-bold">Settings</span>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-2">
        <span>{darkMode ? "Dark Mode" : "Light Mode"}</span>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors"
        >
          <div
            className={`bg-primaryBlue w-4 h-4 rounded-full shadow-md transform transition-transform ${
              darkMode ? "translate-x-6" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
