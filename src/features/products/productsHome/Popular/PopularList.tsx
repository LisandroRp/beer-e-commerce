import { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { Spinner } from "react-activity";
import { PopularCard } from "./PopularCard"
import { useFilterContext } from "../../../../pages/products";
import { getProducts } from "../../../../services/productService"
import { tProductWithStockAndPrice } from "../../../../app/types/product.type";

export const PopularList = () => {

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true)
  const { filterValue, searchedValue } = useFilterContext();
  const [products, setProducts] = useState<tProductWithStockAndPrice[]>([])

  useEffect(() => {
    populatingList()
    const interval = setInterval(() => {
      populatingList()
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const populatingList = async () => {
    const response = await getProducts()
    setProducts(response)
    setIsLoading(false)
  }

  const handleFilters = (product: tProductWithStockAndPrice) => {
    return (product.category == filterValue || !filterValue) && (product.brand.toLowerCase().includes(searchedValue.toLowerCase()) || !searchedValue)
  }

  if (isLoading)
    return (<div className="w-full flex flex-grow justify-center items-center"><Spinner color="#FF9F24" /></div>)
  else
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.filter(handleFilters).map(product => (
          <div key={product.sku} className="cursor-pointer" onClick={() => router.push(`products/${product?.id}-${product.brand.replaceAll(" ", "-").toLowerCase()}`)}>
            <PopularCard card={product} isSelected={false} />
          </div>
        ))}
      </div>
    )
}