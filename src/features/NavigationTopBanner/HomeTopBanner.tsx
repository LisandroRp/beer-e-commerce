import { useRouter } from "next/router";

export const HomeTopBanner = () => {

  const router = useRouter();

  return (
    <div className="bg-transparent flex top-0 flex-row items-center justify-between w-full px-5 pt-5">
      <div className="flex justify-center items-center p-1 w-10 h-10 rounded-lg bg-white cursor-pointer text-center font-bold">
        <img src="/icons/menu-icon.png" />
      </div>
      <div className="p-1 w-14 aspect-square cursor-pointer text-center font-bold">
        <img className="rounded-full" src="/images/profile-picture.jpg" />
      </div>
    </div>
  )
}