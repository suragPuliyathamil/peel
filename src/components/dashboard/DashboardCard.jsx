export default function DashboardCard({ title, description }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition dark:bg-gray-800 dark:text-white">
      <h2 className="text-xl font-bold mb-2 text-primaryBlue">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </div>
  );
}
