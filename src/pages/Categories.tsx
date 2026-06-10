import { categories } from "../utlils/constants/categories";

const Categories = () => {
  return (
       <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Popular Categories
      </h1>
      <div className="border-b border-gray-200 mb-8"></div>


      <div className="grid  md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex items-center gap-6 bg-blue-50 rounded-2xl px-6 py-5 hover:shadow-md transition-all cursor-pointer"
          >
            <img
              src={category.image_url}
              alt={category.name}
              className="w-32 h-32 object-contain rounded-lg"
            />

          <div>
            <h3 className="text-2xl font-bold text-gray-900">{category.name}</h3>
            <p className="text-gray-500 mt-2">{category.items} Items Available</p>
          
          
          </div>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Categories;