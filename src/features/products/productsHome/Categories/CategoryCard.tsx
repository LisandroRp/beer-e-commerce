import { useState } from "react"
import classNames from "classnames";

interface CategoryCardProps {
  card: {
    id?: number,
    icon?: string,
    name?: string
  },
  isSelected: boolean
}

export const CategoryCard = ({ card, isSelected }: CategoryCardProps) => {

  const cardClassName = classNames({
    "bg-[#FF9F24]": isSelected,
    "bg-white": !isSelected
  });

  const textClassName = classNames({
    "text-white": isSelected,
  });

  return (
    <div key={card.id} className={`flex flex-row mr-2 py-2 px-3 rounded-xl ${cardClassName}`}>
      {card.icon && <img className="w-5 mr-3" src={card.icon} />}
      <span className={`${textClassName}`}>{card.name}</span>
    </div>
  )
}