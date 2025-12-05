import { useState, type ChangeEvent } from "react";
import { type sortOption } from "../components/types";

export const useProductStates = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("All items");
  const [sort, setSort] = useState<sortOption>("lowest to highest");

  const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value as string);
  };

  const handleSelectPriceRange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };

  const handleSortOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value as sortOption);
  };

  return {
    search,
    category,
    priceRange,
    sort,
    handleSelectCategory,
    handleSearch,
    handleSelectPriceRange,
    handleSortOption,
  };
};
