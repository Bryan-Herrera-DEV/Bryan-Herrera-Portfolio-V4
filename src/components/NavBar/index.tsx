import { BryanHerreraLogo } from "../../assets";
import Image from "next/image";
import { SocialMediaComponent } from "../SocialMedia";

export const NavBarComponent = () => {
  return (
    <nav className="px-5 w-full flex items-center justify-between gap-4">
      <div className="flex items-center justify-start gap-4">
        {/* Logo and links */}
        <div>
          <Image
            src={BryanHerreraLogo}
            alt="Bryan Herrera Dev Logo"
            aria-label="Bryan Herrera Dev Logo"
            title="Bryan Herrera Dev Logo"
            width={32}
            height={37}
            priority
          />
        </div>
        <div>
          <ul className="text-white flex gap-4 items-center justify-start text-sm font-medium">
            <li>Home</li>
            <li>Contact</li>
            <li>My Work</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-start gap-4">
        <SocialMediaComponent typeOfRender="onlyIcons" />
      </div>
    </nav>
  );
};
