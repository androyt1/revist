import type { ChangeEvent } from "react";
import { prices } from "../../constants";

type PriceFilterProp = {
  priceRange: string;
  handleSelectPriceRange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const PriceFilter = ({
  priceRange,
  handleSelectPriceRange,
}: PriceFilterProp) => {
  return (
    <select
      name="prices"
      value={priceRange}
      onChange={handleSelectPriceRange}
      id=""
      className="col-span-1 md:col-span-2 px-3 py-2 rounded-xl ring ring-stone-300 shadow-stone-400 "
    >
      {prices.map((price) => (
        <option key={price} value={price}>
          {price}
        </option>
      ))}
    </select>
  );
};

export default PriceFilter;
