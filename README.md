# 🛍️ Item Vault – Inventory Manager

A responsive and modern inventory management web application built with **React**, **Tailwind CSS**, and **json-server** for local data handling. Users can:

- 🧾 View items in a beautiful card layout  
- ➕ Add new items with images and descriptions  
- 🔍 Open item details in a modal with image carousel  
- 🗑️ Delete items from the inventory  
- 🌗 Toggle between Dark and Light mode  

---

## 🚀 Demo

---

## 🛠️ Tech Stack

- ⚛️ React
- 💨 Tailwind CSS
- 📦 json-server (for mock backend)
- 📸 SwiperJS (for image carousel)

---

## 📦 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/item-vault.git
cd item-vault
2. Install Dependencies

npm install

3. Start the JSON Server (Mock Backend)
npx json-server --watch db.json --port 5000
Make sure db.json is in the root directory and structured like this:

json
{
  "items": []
}

4. Start the React App

npm start
Now visit: http://localhost:3000

✨ Features
✅ View items with fallback images if image URL fails

✅ Add new item with title, description, and image links

✅ Light / Dark Mode toggle with localStorage support

✅ Smooth responsive design with Tailwind CSS

✅ Item detail popup modal with SwiperJS carousel

✅ Delete items locally and in db.json

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
│   └── api.js
├── App.jsx
└── main.jsx
💡 Customization Tips
Update image fallback URL in ItemCard.jsx if needed

Change db.json port or structure as per your requirement

You can deploy this project to Vercel or Netlify easily

📮 Contact
Made with ❤️ by Suryansh Singh Kaintura
📧 Suryanshkaintura07@gmail.com
🔗 LinkedIn | GitHub

📜 License
This project is licensed under the MIT License.








