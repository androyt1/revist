export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
};

export type ProductListProp = {
  products: Product[];
};
