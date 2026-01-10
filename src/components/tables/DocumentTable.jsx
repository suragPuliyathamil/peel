export default function DocumentTable({ title, documents, onAdd }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-primaryBlue">{title}</h3>
        <button
          onClick={onAdd}
          className="bg-primaryBlue text-white px-4 py-2 rounded hover:bg-blue-900 transition"
        >
          Add Document
        </button>
      </div>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="p-2 text-left">Document Name</th>
            <th className="p-2 text-left">Expiry Date</th>
            <th className="p-2 text-left">View</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr
              key={doc.id}
              className="border-b dark:border-gray-700"
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
        </tbody>
      </table>
    </div>
  );
}
