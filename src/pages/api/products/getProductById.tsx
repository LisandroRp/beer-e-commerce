import products from '../products';
import stockPriceData from '../stock-price';
import { NextApiRequest, NextApiResponse } from 'next';
import { tProduct } from '../../../app/types/product.type';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { id } = req.query;
  const product = products.find(product => product.id === Number(id));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const productWithPrices: tProduct = {
    ...product,
    skus: product.skus.map(sku => ({
      ...sku,
      price: stockPriceData[sku.code]?.price as number || 0,
      stock: stockPriceData[sku.code]?.stock as number || 0
    })),
  };

  return res.status(200).json(productWithPrices);
}