import type { ChangeEvent } from "react";
import { categories } from "../../constants";

type CategoryFilterProp = {
  category: string;
  handleSelectCategory: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const CategoryFilter = ({
  category,
  handleSelectCategory,
}: CategoryFilterProp) => {
  return (
    <select
      value={category}
      onChange={handleSelectCategory}
      name="categories"
      id="categories"
      className="col-span-1 md:col-span-2 px-3 py-2 rounded-xl ring ring-stone-300 shadow-stone-400 "
    >
      <option value={""} disabled hidden>
        Filter by Category
      </option>
      <option value={"all"}>All Categories</option>
      {categories.map((category) => (
        <option
          key={category}
          value={category}
          className="px-3 py-2 rounded-xl"
        >
          {category}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;
