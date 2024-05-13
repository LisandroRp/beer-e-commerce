interface ListHeaderProps {
  title: string
}

export const ListHeader = ({ title }: ListHeaderProps) => {
  return (
    <div className="flex items-center flex-row justify-between w-full h-12">
      <span className="font-bold text-lg">{title}</span>
      <span className="font-normal text-sm text-[#969696]">See All</span>
    </div>
  )
}