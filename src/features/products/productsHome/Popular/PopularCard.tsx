import { tProductWithStockAndPrice } from "../../../../app/types/product.type"
import { convertCentsToDollars } from '../../../../app/helpers/convertCentsToDollars';

interface PopularCardProps {
  card: tProductWithStockAndPrice,
  isSelected: boolean
}

export const PopularCard = ({ card }: PopularCardProps) => {

  return (
    <div key={card?.id} className="relative flex flex-col justify-center mr-2 rounded-xl bg-white px-2 pt-2 shadow-sm">
      <span className="text-center">{card.brand}</span>
      <img className="h-[150px] object-contain p-[15px]" src={card.image} alt={card.brand} />
      <div className="block whitespace-nowrap overflow-hidden text-ellipsis">
        <span className="text-start text-xs pt-3 pb-1 text-[#969696]">{card.type}</span>
      </div >
      <div className="flex flex-row items-center justify-between h-11">
        <span>${convertCentsToDollars(card.price)}</span>
        <div className="absolute right-0 bottom-0 flex justify-center items-center rounded-tl-xl rounded-br-xl w-11 aspect-square bg-[#FF9F24] text-white text-2xl">
          <span>+</span>
        </div>
      </div>
    </div >
  )
}