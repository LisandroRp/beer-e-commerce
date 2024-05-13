import classNames from "classnames";

interface SizeCardProps {
  size: string,
  isSelected: boolean
}

export const SizeCard = ({ size, isSelected }: SizeCardProps) => {

  const cardClassName = classNames({
    "border-[#FF9F24]": isSelected,
    "border-[#969696]": !isSelected
  });

  const textClassName = classNames({
    "text-[#FF9F24]": isSelected,
    "text-[#969696]": !isSelected
  });

  return (
    <div className={`rounded-full border py-1 px-3 mx-2 ${cardClassName}`}>
      <span className={`text-sm ${textClassName}`}>{size.replace("Cans", "")}</span>
    </div>
  )
}