import type { ChangeEvent } from "react";

type InputFilterProps = {
  search: string;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
};

const InputFilter = ({ search, handleSearch }: InputFilterProps) => {
  return (
    <input
      type="search"
      aria-label="Search Products"
      placeholder="Search Products"
      className="col-span-1 md:col-span-4  ring-1 ring-stone-300  p-2  shadow shadow-stone-400 focus:to-blue-800 transition-colors outline-0"
      value={search}
      onChange={handleSearch}
    />
  );
};

export default InputFilter;
