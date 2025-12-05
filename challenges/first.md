Exercise: Product Filter Dashboard
Setup: Use this API: https://fakestoreapi.com/products
Requirements:

Fetch and display all products (show: image, title, price, category)
Add 3 filter controls:

Category dropdown (electronics, jewelery, men's clothing, women's clothing)
Price range: Under $50, $50-$100, Over $100
Search input (filter by title)

All filters work together (category AND price AND search)
Show count: "Showing X of Y products"
Add "Clear Filters" button

What you'll master:

Multiple filters working together
Deriving filtered state (no unnecessary useState)
Controlled inputs (dropdowns, search)
Complex filter logic that's still readable

Bonus:

Add sort by price (low to high, high to low)
Show "No products found" when filters return empty

The Product Type:
typescripttype Product = {
id: number
title: string
price: number
category: string
image: string
}
This will really test your filtering skills! Give it a shot.AA
