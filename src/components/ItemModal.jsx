import Carousel from './Carousel';

export default function ItemModal({ item, onClose }) {
  const handleEnquire = () => {
    alert("✅ Enquiry sent to support@example.com");
  };
  console.log(item);
  

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-white rounded-3xl p-6 shadow-2xl animate-fadeIn">

        {/* Close Button */}
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
            className="w-full py-3 mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold rounded-xl transition"
          >
            📩 Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
