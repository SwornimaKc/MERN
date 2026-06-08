import ProductCard from "../common/ProductCard";
import { products } from "../../utlils/constants/products";
import { useNavigate } from "react-router-dom";

const ProductItems = () => {
  const navigate = useNavigate();
  return (
    <section className="max-w-7xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold text-[#123524] mb-6">
        Products For You
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => navigate(`/products/${product.id}`)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductItems;