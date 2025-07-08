import categories from "../data/categories";

const CategoryFilter = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-orange-500">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-white shadow-md rounded-lg flex flex-col items-center p-4 hover:shadow-lg cursor-pointer"
          >
            <img src={cat.image} alt={cat.name} className="w-20 h-20 mb-4" />
            <h3 className="text-lg font-semibold">{cat.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
