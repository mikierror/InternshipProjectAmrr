import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ViewItems from './pages/ViewItems';
import AddItem from './pages/AddItems';

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const location= useLocation()
  let {pathname}=location

  
  
  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300">
      
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow px-4 md:px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="font-bold text-lg">{pathname === "/add" ? "🛍️ Add Items" : "📦View Items"}</div>
        <div className="flex gap-3 items-center  font-medium ">
          <NavLink to="/" className="hover:underline ">View Items</NavLink>
          <NavLink to="/add" className="hover:underline ">Add Item</NavLink>
          <button
            onClick={() => setDark(!dark)}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded"
          >
            {dark ? '☀ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="">
        <Routes>
          <Route path="/" element={<ViewItems />} />
          <Route path="/add" element={<AddItem />} />
        </Routes>
      </main>
    </div>
  );
}
