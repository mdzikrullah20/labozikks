export default function CategorySidebar({
  categories,
  selectedCategory,
  setSelectedCategory
}: any) {
  return (
    <aside className="bg-white border p-6 rounded-lg">
      <h3 className="font-bold mb-4">Categories</h3>

      {categories.map((cat: any) => (
        <button
          key={cat.name}
          onClick={() => setSelectedCategory(cat.name)}
          className={`w-full text-left px-3 py-2 rounded-lg ${
            selectedCategory === cat.name
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-gray-50"
          }`}
        >
          {cat.name}
        </button>
      ))}
    </aside>
  );
}
