import { motion } from "framer-motion";

export default function AddDocumentModal({ onClose, employeeId, companyId }) {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <h2 className="text-xl font-bold text-primaryBlue mb-4">Add Document</h2>

        <form className="space-y-4">
          {/* Document Type */}
          <div>
            <label className="block mb-1 font-semibold">Document Type</label>
            <select className="w-full border p-2 rounded">
              <option>ID Proof</option>
              <option>Contract</option>
              <option>Other</option>
            </select>
          </div>

          {/* Document Version */}
          <div>
            <label className="block mb-1 font-semibold">Document Version</label>
            <select className="w-full border p-2 rounded">
              <option>v1</option>
              <option>v2</option>
              <option>v3</option>
            </select>
          </div>

          {/* Expiry Date */}
          <div>
            <label className="block mb-1 font-semibold">Expiry Date</label>
            <input
              type="date"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="block mb-1 font-semibold">Upload Document</label>
            <input type="file" className="w-full" />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded bg-primaryBlue text-white hover:bg-blue-900 transition"
            >
              Add
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
