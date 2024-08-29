export const fetchProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const products = await response.json();
    return products.products;
  };
  
  export const fetchProductById = async (id: string) => {
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    return response.json();
  };
 