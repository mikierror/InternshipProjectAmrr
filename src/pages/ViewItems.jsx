import { useEffect, useState } from "react";
import { getItems, deleteItem } from "../utils/api";
import ItemModal from "../components/ItemModal";
import ItemCard from "../components/ItemCard";

export default function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Delete item from localStorage and update UI
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item?");
    if (!confirmed) return;

    const ok = await deleteItem(id);
    if (ok) {
      setItems((prev) => prev.filter((item) => item.id !== id));
    } else {
      alert("❌ Failed to delete item.");
    }
  };

  // ✅ Load items from localStorage
  useEffect(() => {
    const loadItems = async () => {
      try {
        const data = await getItems();
        setItems(data);
      } catch (err) {
        setError("❌ Failed to load items.");
      } finally {
        setLoading(false);
      }
    };
    loadItems();
  }, []);

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition">
      <div className="max-w-7xl mx-auto py-6 px-5">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          📦 View Inventory
        </h1>

        {loading && (
          <p className="text-center text-gray-500 dark:text-gray-300">Loading items...</p>
        )}

        {error && (
          <p className="text-center text-red-500 font-medium">{error}</p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400">No items found.</p>
        )}

        {!loading && !error && items.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={{
                  ...item,
                  coverImage: item.coverImage || "https://placehold.co/300x200?text=No+Image"
                }}
                onClick={setSelected}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
