import { useMemo } from "react";
import {
  ProductList,
  useProducts,
  CategoryFilter,
  PriceFilter,
  InputFilter,
  useProductStates,
} from "./feature/Products";
import Layout from "./components/Layout";

import {
  managePriceFilter,
  filterByCategory,
  handleUserSearch,
} from "./feature/Products/utilities";

const App = () => {
  const { products, loading, error } = useProducts();
  const {
    search,
    category,
    priceRange,
    handleSelectCategory,
    handleSearch,
    handleSelectPriceRange,
  } = useProductStates();

  const categoryFilterProps = { category, handleSelectCategory };
  const priceFilterProps = { priceRange, handleSelectPriceRange };
  const inputFilterProps = { search, handleSearch };

  const filteredProducts = useMemo(() => {
    let items = products;
    items = filterByCategory(items, category);
    items = handleUserSearch(items, search);
    items = managePriceFilter(items, priceRange);
    return items;
  }, [products, category, search, priceRange]);

  if (loading) {
    return <p>Loading products please wait</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <Layout>
      <div className="w-full bg-white py-8  grid grid-cols-1 md:grid-cols-8 gap-10">
        <CategoryFilter {...categoryFilterProps} />
        <PriceFilter {...priceFilterProps} />
        <InputFilter {...inputFilterProps} />
      </div>
      <main className="md:p-10 bg-slate-100">
        {filteredProducts.length === 0 ? (
          <p className="text-center py-10 text-gray-600">
            No products found. Try adjusting your filters!
          </p>
        ) : (
          <ProductList products={filteredProducts} />
        )}
      </main>
    </Layout>
  );
};

export default App;
