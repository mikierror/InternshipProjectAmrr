# 🛍️ Item Vault – Inventory Manager

A responsive and modern inventory management web application built with **React**, **Tailwind CSS**, and **localStorage** for data persistence. Users can:

- 🧾 View items in a beautiful card layout  
- ➕ Add new items with images and descriptions  
- 🔍 Open item details in a modal with image carousel  
- 🗑️ Delete items from the inventory  
- 🌗 Toggle between Dark and Light mode  

---

## 🚀 Demo

- **GitHub Repo**: [https://github.com/mikierror/InternshipProjectAmrr]
- **Live Demo**: [https://6856229bafb3ac3d0f11ea9d--playful-melomakarona-252b2b.netlify.app/]
---

## 🛠️ Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 📸 SwiperJS (for image carousel)
- 📬 EmailJS (for enquiries)
- 💾 localStorage (for simulating backend)

---

## 📦 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/mikierror/InternshipProjectAmrr.git
cd InternProjectAmrr
2. Install Dependencies

npm install
Tailwind CSS version: v3.4.17

3. Start the React App

npm run dev
Now visit: http://localhost:5173

✨ Features
✅ View items with fallback images
✅ Add item with title, description, image links
✅ Light / Dark mode with localStorage persistence
✅ Responsive layout with Tailwind
✅ Item detail modal with Swiper carousel
✅ Delete items from localStorage
✅ Email enquiry integration with EmailJS

📁 Folder Structure

src/
├── components/
│   ├── ItemCard.jsx
│   ├── ItemModal.jsx
│   └── Carousel.jsx
├── pages/
│   ├── ViewItems.jsx
│   └── AddItems.jsx
├── utils/
│   └── api.js   # uses localStorage to simulate a backend
├── App.jsx
└── main.jsx

💡 Tips
Change fallback image inside ItemCard.jsx

Clear localStorage to reset all items

Easily deployable to Vercel or Netlify

📮 Contact
Made with ❤️ by Suryansh Singh Kaintura
📧 suryanshkaintura07@gmail.com
🔗 LinkedIn | GitHub

📜 License
This project is licensed under the MIT License.