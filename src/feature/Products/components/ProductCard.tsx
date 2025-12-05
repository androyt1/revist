import type { Product } from "./types";

const ProductCard = ({ title, price, category, image }: Product) => {
  return (
    <div
      aria-label="product card"
      className=" flex-1 shadow-lg shadow-slate-200 hover:shadow-slate-600   flex flex-col bg-white rounded-xl cursor-pointer group  transition-all duration-300 "
    >
      <div className="py-3 px-3 flex justify-center items-center bg-white z-20 group-hover:bg-slate-900 group-hover:text-slate-50 transition-all duration-300 rounded-t-xl">
        <span
          aria-label="name of product"
          className="uppercase text-base text-balance text-center text-md"
        >
          {title.substring(0, 20)}
        </span>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <img
          src={image}
          alt={"Product image"}
          loading="lazy"
          aria-label="Image of product"
          className="h-[200px] w-full object-contain hover:scale-105 hover:rotate-12 transition-transform duration-300 z-10"
        />
      </div>
      <div className="flex-1 flex items-center rounded-b-xl   justify-between  group-hover:bg-slate-900 group-hover:text-slate-50  transition-colors duration-300 text-sm p-3">
        <span>{category}</span>
        <span>£ {price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
