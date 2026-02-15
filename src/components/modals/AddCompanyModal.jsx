import { motion } from "framer-motion";
import { useState } from "react";
import { createCompany } from "../../services/CompanyService";

export default function AddCompanyModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    registrationNumber: "",
    email: "",
    phone: "",
    address: "",
    industry: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await createCompany(form);
      onSuccess();   // refresh list
      onClose();     // close modal
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg w-[420px]"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
      >
        <h2 className="text-xl font-bold text-primaryBlue mb-4">
          Add Company
        </h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <form className="space-y-3" onSubmit={handleSubmit}>
          {[
            ["name", "Company Name"],
            ["registrationNumber", "Registration Number"],
            ["email", "Email"],
            ["phone", "Phone"],
            ["address", "Address"],
            ["industry", "Industry"],
          ].map(([key, label]) => (
            <input
              key={key}
              name={key}
              placeholder={label}
              value={form[key]}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded dark:bg-gray-700"
            />
          ))}

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-primaryBlue text-white rounded"
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
