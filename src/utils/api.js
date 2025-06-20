// Get items from localStorage
export const getItems = async () => {
  const items = JSON.parse(localStorage.getItem("items")) || [];
  return items;
};

// Save a new item to localStorage
export const saveItem = async (item) => {
  const items = await getItems();
  const newItem = {
    ...item,
    id: Date.now() 
  };
  items.push(newItem);
  localStorage.setItem("items", JSON.stringify(items));
  return true;
};

// Delete an item from localStorage
export const deleteItem = async (id) => {
  try {
    const items = await getItems();
    const filtered = items.filter(item => item.id !== id);
    localStorage.setItem("items", JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error("Delete failed:", error);
    return false;
  }
};


