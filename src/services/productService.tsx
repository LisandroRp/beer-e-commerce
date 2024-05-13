import { tProductWithStockAndPrice } from "../app/types/product.type";

export const getProducts = async (): Promise<tProductWithStockAndPrice[]> => {
  const response = await fetch(`/api/products/getProducts`);
  const data = await response.json();
  return data;
};

export const getProductById = async (id: string) => {
  const response = await fetch(`/api/products/getProductById?id=${id}`);
  const data = await response.json();
  return data;
};