import { Popular } from "./Popular";
import { SearchBar } from "./SearchBar";
import { Categories } from "./Categories";

function Products() {

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 p-5">
      <div className="flex flex-col pb-5 sm:text-center">
        <span className="font-normal text-base text-[#969696]">Hi Mr. Michael</span>
        <span className="font-bold text-2xl">Welcome Back!</span>
      </div>
      <SearchBar />
      <div className="mt-5">
        <Categories />
      </div>
      <div className="flex flex-grow  flex-col mt-5">
        <Popular />
      </div>
    </main>
  );
}

export default Products;