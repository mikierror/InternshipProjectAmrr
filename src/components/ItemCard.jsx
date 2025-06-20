export default function ItemCard({ item, onClick, onDelete }) {
    return (
        <div className="relative bg-white dark:bg-gray-800/70 border border-gray-200 dark:border-gray-700 rounded-3xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer backdrop-blur-sm">

            {/* 🗑️ Delete Button */}
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onDelete(item.id);
                }}
                className="absolute top-3 right-3 z-10 text-white bg-red-500 hover:bg-red-600 px-2 py-1 text-xs font-semibold rounded-md shadow"
                title="Delete item"
            >
                🗑️ Delete
            </button>

            {/* Card Body */}
            <div onClick={() => onClick(item)}>
                <div className="relative">
                    <img
                        src={item.coverImage || "https://source.unsplash.com/300x200/?product"}
                        alt={item.name}
                        className="w-full h-52 object-cover transition-transform duration-300"
                        onError={(e) => {
                            e.target.onerror = null; // prevents infinite loop
                            e.target.src = "https://source.unsplash.com/300x200/?product,notfound";
                        }}
                    />

                    <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                        {item.type}
                    </div>
                </div>

                <div className="p-4">
                    <p className="text-xl font-bold text-gray-800 dark:text-white truncate">
                        {item.name}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        Tap to view details →
                    </p>
                </div>
            </div>
        </div>
    );
}
