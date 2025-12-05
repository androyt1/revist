import { type Product, type sortOption } from "./components/types";

export const managePriceFilter = (products: Product[], range: string) => {
  if (range === "All items") {
    return products;
  } else if (range === "Price <= 50") {
    return products.filter((item) => item.price <= 50);
  } else if (range === "Price > 50 <= 100") {
    return products.filter((item) => item.price > 50 && item.price <= 100);
  } else {
    return products.filter((item) => item.price > 100);
  }
};

export const filterByCategory = (
  items: Product[],
  category: string
): Product[] => {
  if (category === "all") {
    return items;
  } else {
    return items.filter(
      (item) => item.category.toLowerCase() === category.toLowerCase()
    );
  }
};

export const handleUserSearch = (
  items: Product[],
  userSearch: string
): Product[] => {
  if (userSearch) {
    return items.filter((item) =>
      item.title.toLowerCase().includes(userSearch.toLowerCase())
    );
  } else {
    return items;
  }
};

export const sortByPrice = (items: Product[], sort: sortOption) => {
  if (sort === "lowest to highest") {
    return [...items].sort((a, b) => a.price - b.price);
  } else {
    return [...items].sort((a, b) => b.price - a.price);
  }
};
