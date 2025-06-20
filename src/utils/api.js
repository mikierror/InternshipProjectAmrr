// src/utils/api.js

export const saveItem = async (item) => {
  const res = await fetch("http://localhost:3000/items", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
  return res.ok;
};

export const getItems = async () => {
  const res = await fetch("http://localhost:3000/items");
  return await res.json();
};

// utils/api.js
export async function deleteItem(id) {
  try {
    const res = await fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
    });
    return res.ok;
  } catch (error) {
    console.error("Delete failed:", error);
    return false;
  }
}

