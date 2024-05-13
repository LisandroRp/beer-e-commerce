import { useState } from "react";
import { useFilterContext } from "../../../../pages/products";

export const SearchBar = () => {

  const [value, setValue] = useState("")
  const { setSearchedValue, } = useFilterContext();

  return (
    <form className="w-full max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); setSearchedValue(value); }}>
      <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input onChange={(e) => setValue(e.target.value)} type="search" id="default-search" className="shadow-sm block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FF9F24] dark:focus:border-[#FF9F24]" placeholder="Search burger, pizza, drink or ect..." />
      </div>
    </form>
  )
}