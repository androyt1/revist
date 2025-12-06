export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export type ProductListProp = {
  filteredProducts: Product[];
  safePage: number;
  gotoPrevPage: () => void;
  gotoNextPage: () => void;
};

export type sortOption = "lowest to highest" | "highest to lowest";
