import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import foodData from "../data/foodData";
import FoodCard from "../components/FoodCard";

const Menu = () => {
  const { searchQuery } = useContext(SearchContext);

  const filteredFood = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-orange-500">Menu</h2>

      {filteredFood.length === 0 ? (
        <p className="text-gray-500">No matching items found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredFood.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
