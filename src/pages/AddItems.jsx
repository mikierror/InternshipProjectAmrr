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
      images: form.images.split(",").map((img) => img.trim())
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
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-10">
      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-xl p-8 w-full max-w-xl">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">🛒 Add New Item</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {["name", "type", "coverImage", "images"].map((field) => (
            <input
              key={field}
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
            />
          ))}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            required
            rows="4"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400"
          />
          <button type="submit" className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow">
            ➕ Submit Item
          </button>
          {status && <p className="text-center mt-3 font-medium text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
}