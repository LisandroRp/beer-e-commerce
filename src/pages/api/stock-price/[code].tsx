import stockPriceData from '../stock-price';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;
  if (stockPriceData[code as string]) {
    res.status(200).json(stockPriceData[code as string]);
  } else {
    res.status(404).json({ error: 'Stock and price information not found for the provided SKU code' });
  }
}