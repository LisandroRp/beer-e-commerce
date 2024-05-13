import { useEffect, useState } from "react"
import { CategoryCard } from "./CategoryCard"
import { useFilterContext } from "../../../../pages/products"

const categories = [{
  id: 1,
  icon: "/icons/beer.png",
  name: "Beer"
},
{
  id: 2,
  icon: "/icons/wine-glass.png",
  name: "Wine"
}]

export const CategoryList = () => {

  const [selected, setSelected] = useState("")
  const { setFilterValue, } = useFilterContext();

  useEffect(() => {
    setFilterValue(selected)
  }, [selected])

  return (
    <div className="flex flex-row">
      <div className="cursor-pointer" onClick={() => setSelected("")}>
        <CategoryCard card={{ name: "All" }} isSelected={!selected} />
      </div>
      {categories.map((category) => (
        <div key={category.id} className="cursor-pointer" onClick={() => setSelected(category.name)}>
          <CategoryCard card={category} isSelected={category.name == selected} />
        </div>
      ))}
    </div>
  )
}