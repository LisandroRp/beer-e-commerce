import { useRouter } from "next/router";

export const DetailsTopBanner = () => {

  const router = useRouter();

  return (
    <div className="bg-transparent flex lg:absolute top-0 flex-row items-center justify-between w-full p-5">
      <div className="z-10 flex justify-center items-center p-1 w-10 h-10 rounded-lg bg-white cursor-pointer text-center font-bold" onClick={() => router.back()}>
        <img src="/icons/icon-back.png" />
      </div>
      <span className="font-bold">Details</span>
      <div className="p-1 w-10 h-10 rounded-lg bg-white cursor-pointer text-center font-bold">
        <span>...</span>
      </div>
    </div>
  )
}