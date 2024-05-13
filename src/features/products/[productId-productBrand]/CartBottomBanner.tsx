import classNames from "classnames";

interface tCartBottomBanner {
  disable: boolean
}

export const CartBottomBanner = ({ disable }: tCartBottomBanner) => {

  const buttonClassName = classNames({
    "cursor-pointer": !disable,
    "opacity-50": disable
  });
  return (
    <div className="fixed lg:absolute bottom-0 left-0 w-full h-[111px] px-5 bg-white">
      <div className="flex flex-row h-full w-full justify-between pt-5 pb-10">
        <div className="flex h-full justify-center items-center aspect-square border border-[#FF9F24] rounded-lg p-2">
          <img src="/icons/icon-bag.png" />
        </div>
        <div className={`flex flex-grow ml-5 justify-center items-center bg-[#FF9F24] text-white rounded-lg ${buttonClassName}`}>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  )
}