import type { ChangeEvent } from "react";

type SortFilterProp = {
  sort: string;
  handleSortOption: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SortFilter = ({ sort, handleSortOption }: SortFilterProp) => {
  return (
    <select
      value={sort}
      onChange={handleSortOption}
      className="col-span-1 md:col-span-2 px-3 py-2  ring ring-stone-300 shadow-stone-400"
    >
      <option value="lowest to highest">Lowest to highest</option>
      <option value="Highest to lowest">Highest to lowest</option>
    </select>
  );
};

export default SortFilter;
