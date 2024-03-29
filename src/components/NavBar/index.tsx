import { BryanHerreraLogo } from "../../assets";
import Image from "next/image";
import { useRouter } from "next/router";
import { SocialMediaComponent } from "../SocialMedia";
import { routesContstants } from "@/shared/constants";
import Link from "next/link";

export const NavBarComponent = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const renderRoutes = () => {
    return Object.entries(routesContstants).map(([_, value]) => {
      const route = value[0];
      const isRouteSelected = currentPath === route[0];
      return (
        <li key={route[1]} className="inline-block">
          <Link href={route[0]} aria-label={`Go to ${route[1]} page`}>
            <span
              className={
                isRouteSelected
                  ? "selected-text"
                  : "hover:text-gray-300 transition duration-200"
              }
            >
              {route[1]}
            </span>
          </Link>
        </li>
      );
    });
  };
  return (
    <nav className="px-5 w-full flex items-center justify-between gap-4 nav effect z-10">
      <div className="flex items-center justify-start gap-4">
        <div>
          <Image
            src={BryanHerreraLogo}
            alt="Bryan Herrera Dev Logo"
            aria-label="Bryan Herrera Dev Logo"
            title="Bryan Herrera Dev Logo"
            className="w-[21px] h-[26px]"
            priority
          />
        </div>
        <div>
          <ul className="text-white flex gap-4 items-center justify-start text-sm font-medium">
            {renderRoutes()}
          </ul>
        </div>
      </div>

      <div className="items-center justify-start gap-4 hidden md:flex">
        <SocialMediaComponent typeOfRender="onlyIcons" />
      </div>
    </nav>
  );
};
