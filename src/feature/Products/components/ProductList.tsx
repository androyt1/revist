import { type ProductListProp } from "./types";
import ProductCard from "./ProductCard";
import { useEffect } from "react";

const ProductList = ({
  filteredProducts,
  safePage,
  gotoPrevPage,
  gotoNextPage,
}: ProductListProp) => {
  const itemsPerPage: number = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (safePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [safePage]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {filteredProducts.slice(startIndex, endIndex).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="w-full flex justify-center items-center bg-slate-100 pt-8">
        <div className="flex  items-center space-x-8 mx-auto">
          <button
            className="disabled:bg-slate-50 disabled:text-slate-400"
            onClick={gotoPrevPage}
            disabled={safePage === 1}
          >
            Prev
          </button>
          <div>
            <span> {safePage}</span>
          </div>
          <button
            className="disabled:bg-slate-50 disabled:text-slate-400"
            disabled={safePage === totalPages}
            onClick={gotoNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export { ProductList };
