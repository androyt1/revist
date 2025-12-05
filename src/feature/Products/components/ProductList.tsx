import { type ProductListProp } from "./types";
import ProductCard from "./ProductCard";

const ProductList = ({ products }: ProductListProp) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export { ProductList };
