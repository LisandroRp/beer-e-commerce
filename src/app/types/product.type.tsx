export type tProduct = {
  id: number,
  brand: string,
  image: string,
  style: string,
  substyle: string,
  abv: string,
  origin: string,
  information: string,
  skus:
  {
    code: string,
    name: string,
    price: number,
    stock: number
  }[],
}

export type tProductWithStockAndPrice = {
  id: number;
  image: string;
  brand: string;
  sku: string;
  type: string,
  category: string,
  stock: number;
  price: number;
}