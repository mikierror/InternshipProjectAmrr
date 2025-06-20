import { useState } from "react";
import { saveItem } from "../utils/api";

export default function AddItem() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    coverImage: "",
    images: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      images: form.images.split(",").map((i) => i.trim())
    };

    const ok = await saveItem(payload);
    if (ok) {
      setStatus("✅ Item added successfully!");
      setForm({ name: "", type: "", description: "", coverImage: "", images: "" });
    } else {
      setStatus("❌ Failed to add item.");
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-8 overflow-auto">

      <div className="bg-white dark:bg-gray-900/80 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl p-8 w-full max-w-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-6">
          🛒 Add New Item
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {[
            { label: "Item Name", name: "name" },
            { label: "Item Type", name: "type" },
            { label: "Cover Image URL", name: "coverImage" },
            { label: "Other Images (comma-separated)", name: "images" }
          ].map((field) => (
            <input
              key={field.name}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder={field.label}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          ))}

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          />

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition"
          >
            ➕ Submit Item
          </button>

          {status && (
            <p
              className={`text-center mt-3 font-medium ${
                status.startsWith("✅") ? "text-green-600" : "text-red-500"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
