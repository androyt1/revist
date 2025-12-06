import { useMemo, useState } from "react";
import {
  ProductList,
  useProducts,
  CategoryFilter,
  PriceFilter,
  InputFilter,
  useProductStates,
  SortFilter,
} from "./feature/Products";
import Layout from "./components/Layout";
import { sortByPrice } from "./feature/Products/utilities";

import {
  managePriceFilter,
  filterByCategory,
  handleUserSearch,
} from "./feature/Products/utilities";

const App = () => {
  const { products, loading, error } = useProducts();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {
    search,
    category,
    priceRange,
    sort,
    handleSelectCategory,
    handleSearch,
    handleSelectPriceRange,
    handleSortOption,
  } = useProductStates();

  const filteredProducts = useMemo(() => {
    let items = products;
    items = filterByCategory(items, category);
    items = handleUserSearch(items, search);
    items = managePriceFilter(items, priceRange);
    items = sortByPrice(items, sort);

    return items;
  }, [products, category, search, priceRange, sort]);

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const safePage = currentPage > totalPages ? 1 : currentPage;
  const gotoPrevPage = () => {
    if (safePage > 1) setCurrentPage((prev) => prev - 1);
  };

  const gotoNextPage = () => {
    if (safePage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const categoryFilterProps = { category, handleSelectCategory };
  const priceFilterProps = { priceRange, handleSelectPriceRange };
  const inputFilterProps = { search, handleSearch };
  const SortFilterProps = { sort, handleSortOption };
  const ProductListProps = {
    filteredProducts,
    safePage,
    gotoNextPage,
    gotoPrevPage,
  };

  if (loading) {
    return <p>Loading products please wait</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <Layout>
      <div className="w-full bg-white py-8  grid grid-cols-1 md:grid-cols-10 gap-10">
        <CategoryFilter {...categoryFilterProps} />
        <PriceFilter {...priceFilterProps} />
        <SortFilter {...SortFilterProps} />
        <InputFilter {...inputFilterProps} />
      </div>
      <main className="md:p-10 bg-slate-100">
        {filteredProducts.length === 0 ? (
          <p className="text-center py-10 text-gray-600">
            No products found. Try adjusting your filters!
          </p>
        ) : (
          <ProductList {...ProductListProps} />
        )}
      </main>
    </Layout>
  );
};

export default App;
