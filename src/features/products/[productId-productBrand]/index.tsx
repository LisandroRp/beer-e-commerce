import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductCard from "./ProductCard";
import { Spinner } from "react-activity";
import { getProductById } from "../../../services/productService";
import { useSizeContext } from "../../../pages/products/[productId-productBrand]";
import { tProduct } from "../../../app/types/product.type";

function ProductDetails() {

  const router = useRouter();
  const { query } = router;
  const { size, setSize, } = useSizeContext();
  const [product, setProduct] = useState<tProduct | undefined>()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    populatingList()
  }, [query])

  useEffect(() => {
    const interval = setInterval(() => {
      populatingList()
    }, 5000);
    return () => clearInterval(interval);
  }, [isLoading]);

  const populatingList = async () => {
    const productId = getProductDetailsFromRoute()?.productId
    if (productId) {
      const response = await getProductById(productId)
      if (isLoading)
        setSize(response?.skus[0].code)
      setProduct(response)
      setIsLoading(false)
    }
  }

  const getProductDetailsFromRoute = () => {
    const productIdBrand = query["productId-productBrand"]
    if (!productIdBrand) return null;
    const [productId, ...brandParts] = productIdBrand.toString().split('-');
    const productBrand = brandParts.join('-');
    return { productId, productBrand };
  };

  if (isLoading)
    return (<div className="w-full h-screen flex justify-center items-center"><Spinner color="#FF9F24" /></div>)
  else
    return (
      <ProductCard {...{ product }} />
    );
}

export default ProductDetails;
