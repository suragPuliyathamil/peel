export default function DashboardCard({ title, description, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition"
    >
      <h2 className="text-xl font-bold text-primaryBlue">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
}
