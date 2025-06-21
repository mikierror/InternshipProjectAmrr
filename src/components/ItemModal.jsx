import { useState } from 'react';
import emailjs from 'emailjs-com';
import Carousel from './Carousel';

export default function ItemModal({ item, onClose }) {
  const [sending, setSending] = useState(false);

  const handleEnquire = () => {
    setSending(true);

    const templateParams = {
      item_name: item.name,
      item_type: item.type,
      message: `User enquired about ${item.name}`,
      user_email: "suryanshkaintura07@gmail.com",
      title: "Item Enquiry",
      time: new Date().toLocaleString(),
      name: "AMRR Website Enquiry",
      email: "noreply@amrr.com"
    };
    ;
    emailjs
      .send(
        'service_qxvg36n',
        'template_z6zi51q',
        templateParams,
        '5IZTa2iX7dgTavTqx'
      )
      .then((response) => {
        alert("✅ Enquiry sent successfully!");
        setSending(false);
      })
      .catch((err) => {
        alert("❌ Failed to send enquiry. Please try again.");
        console.error(err);
        setSending(false);
      });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-3xl p-6 shadow-2xl animate-fadeIn">


        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl text-gray-500 dark:text-gray-400 hover:text-red-500 transition"
        >
          &times;
        </button>

        {/* Content */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-bold">{item.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{item.type}</p>
          </div>

          <p className="text-base leading-relaxed">{item.description}</p>

          <Carousel images={[item.coverImage, ...(item.images || [])]} />

          <button
            onClick={handleEnquire}
            disabled={sending}
            className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition disabled:opacity-50"
          >
            {sending ? "📨 Sending..." : "📩 Enquire Now"}
          </button>
        </div>
      </div>
    </div>
  );
}
