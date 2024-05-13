import { useRouter } from "next/router";
import { HomeTopBanner } from "./HomeTopBanner";
import { DetailsTopBanner } from "./DetailsTopBanner";

export const NavigationTopBanner = () => {

  const router = useRouter();

  switch (router.pathname) {
    case "/products/[productId-productBrand]":
      return <DetailsTopBanner />
    default:
      return <HomeTopBanner />;
  }
}