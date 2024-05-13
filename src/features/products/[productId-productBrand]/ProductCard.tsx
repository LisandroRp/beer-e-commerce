import { useEffect, useState } from "react";
import classNames from "classnames";
import { SizeList } from "./SizeList";
import { Spinner } from "react-activity";
import { CartBottomBanner } from "./CartBottomBanner";
import { tProduct } from "../../../app/types/product.type";
import { getStockPrice } from "../../../services/stockPriceService";
import { convertCentsToDollars } from "../../../app/helpers/convertCentsToDollars";
import { useSizeContext } from "../../../pages/products/[productId-productBrand]";

interface ProductCardProps {
  product?: tProduct
}

function ProductCard({ product }: ProductCardProps) {

  const READ_MORE_CONDITION = 200

  const { size, } = useSizeContext();
  const [readMore, setReadMore] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<{
    code: string;
    name: string;
    price: number;
    stock: number;
  }>()

  useEffect(() => {
    const selectProduct = product?.skus.find((sku) => sku.code == size);
    setSelectedProduct(selectProduct)
  }, [size, product])

  const refreshStock = async () => {
    if (selectedProduct?.code) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1000);
      const response = await getStockPrice(selectedProduct?.code)
      setSelectedProduct({
        ...selectedProduct,
        ...response
      })
    }
  }

  const refreshClassName = classNames({
    "rotate-180": isLoading,
  });

  return (
    <main className="relative flex flex-col min-h-screen bg-gray-50">
      {product ?
        <>
          <div className="flex rota flex-col lg:flex-row flex-grow items-center lg:items-start">
            <img className="h-[200px] lg:h-full object-contain my-3 self-center" src={product.image} />
            <div className="relative bg-white pb-[130px] h-full lg:h-screen p-5 rounded-tl-3xl rounded-tr-3xl lg:rounded-none">
              <div className="w-full">
                <div className="flex flex-row justify-between font-bold text-2xl">
                  <span>{product.brand}</span>
                  {isLoading
                    ? <div className="w-12 pt-1"><Spinner color="#FF9F24" /></div>
                    : <span className="text-[#FF9F24]">{(selectedProduct?.stock && selectedProduct.price) ? `$${convertCentsToDollars(selectedProduct.price)}` : "Out of Stock"}</span>
                  }
                </div>
                <div className="flex flex-row items-center text-[#969696] !text-sm">
                  <img id="refreshIcon" onClick={refreshStock} className={`w-4 mr-2 cursor-pointer transform transition-transform duration-500 ${refreshClassName}`} src="/icons/refresh.png" />
                  <span>Origin: {product.origin}</span>
                  <span className="mx-2">|</span>
                  {isLoading
                    ? <div className="w-12 pt-1"><Spinner className="!text-[10px]" /></div>
                    : <span>Stock: {selectedProduct?.stock || 0}</span>
                  }
                </div>
              </div>
              <div className="w-full my-6">
                <div className="mb-4">
                  <span className="font-bold text-base mb-2">Description</span>
                </div>
                <div className="text-sm font-normal ">
                  <span className="text-[#969696]">{readMore ? product.information : product.information.substring(0, READ_MORE_CONDITION)}</span>
                  {(!readMore && product?.information.length > READ_MORE_CONDITION) && <span className="text-[#969696]">...</span>}
                  <span onClick={() => setReadMore((state) => !state)} className="px-1 text-[#FF9F24]">
                    {readMore ? "Read less" : "Read more"}
                  </span>
                </div>
              </div>
              <div className="w-full">
                <div className="mb-4">
                  <span className="font-bold text-base">Size</span>
                </div>
                <SizeList {...{ product }} />
              </div>
              <CartBottomBanner disable={!selectedProduct?.price} />
            </div>
          </div>
        </>
        :
        null
      }
    </main >
  );
}

export default ProductCard;
