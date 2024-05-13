import { createContext, useContext, useState } from "react";
import Products from "../../features/products/productsHome";


interface tFilterContext {
  filterValue: string;
  searchedValue: string;
  setFilterValue: (value: string) => void;
  setSearchedValue: (value: string) => void;
}

const FilterContext = createContext<tFilterContext>({
  filterValue: "",
  searchedValue: "",
  setFilterValue: () => { },
  setSearchedValue: () => { },
});

function ProductsPage() {

  const [filterValue, setFilterValue] = useState("")
  const [searchedValue, setSearchedValue] = useState("")

  return (
    <FilterContext.Provider value={{ filterValue, setFilterValue, searchedValue, setSearchedValue }}>
      <Products />
    </FilterContext.Provider>
  );
}

export default ProductsPage;

export const useFilterContext = () => {
  return useContext(FilterContext);
};
