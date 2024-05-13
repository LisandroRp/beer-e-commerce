import { useEffect, useState } from "react"
import { SizeCard } from "./SizeCard"
import { tProduct } from "../../../app/types/product.type"
import { useSizeContext } from "../../../pages/products/[productId-productBrand]"

interface SizeListProps {
  product: tProduct
}

export const SizeList = ({ product }: SizeListProps) => {

  const { size, setSize, } = useSizeContext();
  const [selected, setSelected] = useState(size)

  useEffect(() => {
    setSize(selected)
  }, [selected])

  return (
    <div className="flex flex-row">
      {product.skus.map((sku) => (
        <div key={sku.code} className="cursor-pointer" onClick={() => setSelected(sku.code)}>
          <SizeCard size={sku.name} isSelected={sku.code == selected} />
        </div>
      ))}
    </div>
  )
}