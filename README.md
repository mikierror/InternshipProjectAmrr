# 🛍️ Item Vault – Inventory Manager

A responsive and modern inventory management web application built with **React**, **Tailwind CSS**, and **localStorage** for data persistence. Users can:

- 🧾 View items in a beautiful card layout  
- ➕ Add new items with images and descriptions  
- 🔍 Open item details in a modal with image carousel  
- 🗑️ Delete items from the inventory  
- 🌗 Toggle between Dark and Light mode  

---

## 🚀 Demo

GitHub Repo: [https://github.com/mikierror/Amr-Internship-Project.git](https://github.com/mikierror/Amr-Internship-Project.git)

Live Demo: *(Add Vercel/Netlify link here once deployed)*

---

## 🛠️ Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 📸 SwiperJS (for image carousel)
- 💾 **localStorage** for item storage (instead of backend or JSON Server)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/mikierror/Amr-Internship-Project.git
cd Amr-Internship-Project
2. Install Dependencies
bash
Copy
Edit
npm install
Tailwind CSS version: v3.4.17

3. Start the React App
bash
Copy
Edit
npm start
Now visit: http://localhost:3000

✨ Features
✅ View items with fallback images if image URL fails
✅ Add new item with title, description, and image links
✅ Light / Dark Mode toggle with localStorage support
✅ Fully responsive layout with Tailwind CSS
✅ Item detail popup modal with SwiperJS carousel
✅ Delete items from localStorage

📁 Folder Structure
css
Copy
Edit
src/
├── components/
│   ├── ItemCard.jsx
│   ├── ItemModal.jsx
│   └── Carousel.jsx
├── pages/
│   ├── ViewItems.jsx
│   └── AddItems.jsx
├── utils/
│   └── api.js     <-- uses localStorage to simulate a backend
├── App.jsx
└── main.jsx
💡 Customization Tips
Change fallback image in ItemCard.jsx or ViewItems.jsx

You can deploy this to Vercel, Netlify, or any static host

To reset the app, just clear localStorage in the browser DevTools

📮 Contact
Made with ❤️ by Suryansh Singh Kaintura
📧 suryanshkaintura07@gmail.com
🔗 LinkedIn | GitHub

📜 License
This project is licensed under the MIT License.


