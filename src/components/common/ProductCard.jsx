import React from "react";


const ProductCard = ({ product, onClick }) => {
  return (
    <div className="bg-blue-100 rounded-xl p-4 shadow-sm hover:shadow-md transition" onClick={onClick}>
 

    
      <div className="  flex justify-center h-48 mb-4">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-fullobject-contain"
        />
      </div>

    
      <div>
        <h3 className="font-semibold text-lg text-gray-800">
          {product.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="font-bold text-lg">
            Rs{product.price}
          </span>

          <button className="bg-[#123524] text-white px-4 py-2 rounded-lg text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;