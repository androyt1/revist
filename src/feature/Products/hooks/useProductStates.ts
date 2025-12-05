import { useState, type ChangeEvent } from "react";

export const useProductStates = () => {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("All items");

  const handleSelectCategory = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value as string);
  };

  const handleSelectPriceRange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPriceRange(e.target.value);
  };
  return {
    search,
    category,
    priceRange,
    handleSelectCategory,
    handleSearch,
    handleSelectPriceRange,
  };
};
