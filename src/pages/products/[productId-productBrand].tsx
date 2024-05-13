import { createContext, useContext, useState } from "react";
import ProductDetails from "../../features/products/[productId-productBrand]";

interface tSizeContext {
  size: string;
  setSize: (value: string) => void;
}

const SizeContext = createContext<tSizeContext>({
  size: "",
  setSize: () => { },
});


function ProductDetailsPage() {
  const [size, setSize] = useState("");

  return (
    <SizeContext.Provider value={{ setSize, size }}>
      <ProductDetails />
    </SizeContext.Provider>
  )
}

export default ProductDetailsPage;


export const useSizeContext = () => {
  return useContext(SizeContext);
};
