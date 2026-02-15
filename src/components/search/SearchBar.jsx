export default function SearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex space-x-2 mt-6">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Company name..."
        className="flex-1 p-3 rounded-md border bg-searchGray text-black placeholder-placeholderGray focus:outline-none focus:ring-2 focus:ring-primaryBlue dark:bg-black dark:text-white dark:border-gray-700"
      />
      <button
        onClick={onSearch}
        className="bg-primaryBlue text-white font-bold px-4 py-2 rounded hover:bg-blue-900 transition"
      >
        Search
      </button>
    </div>
  );
}
