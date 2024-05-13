export const getStockPrice = async (code: string) => {
  const response = await fetch(`/api/stock-price/${code}`);
  const data = await response.json();
  return data;
};