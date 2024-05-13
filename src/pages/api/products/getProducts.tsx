import productsData from '../products';
import stockPriceData from '../stock-price';
import { NextApiRequest, NextApiResponse } from 'next';
import { tProductWithStockAndPrice } from '../../../app/types/product.type';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const productsWithStockAndPrice: tProductWithStockAndPrice[] = productsData.flatMap(product =>
      product.skus.map(sku => {
        const stockPrice = stockPriceData[sku.code];
        if (stockPrice && stockPrice.stock > 0) {
          return {
            id: product.id,
            image: product.image,
            brand: product.brand,
            sku: sku.code,
            type: sku.name,
            category: "Beer",
            stock: stockPrice.stock,
            price: stockPrice.price,
          };
        }
        return null;
      })
    ).filter(Boolean).map(product => product as tProductWithStockAndPrice);

    res.status(200).json(productsWithStockAndPrice);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}