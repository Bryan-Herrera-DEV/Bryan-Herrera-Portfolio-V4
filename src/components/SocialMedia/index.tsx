import { ReactNode } from "react";
import { DevToSvgIcon } from "@/assets/icons/dev-to";
import { GithubSvgIcon } from "@/assets/icons/github";
import { inmutableConstants } from "@/shared/constants";
import { LinkedSvgIcon } from "@/assets/icons/linkedin";
import { TwitchSvgIcon } from "@/assets/icons/twitch";
import { YoutubeSvgIcon } from "@/assets/icons/youtube";

interface SocialMedia {
  link: string;
  icon(): ReactNode;
  name: string;
  color: string;
  gradient: string[];
}

interface SocialMediaProps {
  typeOfRender:
    | "onlyIcons"
    | "onlyNames"
    | "namesButons"
    | "namesAndIconsButtons";
}

export const SocialMediaComponent = ({ typeOfRender }: SocialMediaProps) => {
  const socialMedia: SocialMedia[] = [
    {
      link: "https://dev.to/bryanherreradev",
      icon: () => (
        <DevToSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
          className={`hover:fill-white fill-gray-300 transition duration-200`}
        />
      ),
      name: "Dev.to",
      color: "",
      gradient: [],
    },
    {
      link: "https://github.com/Bryan-Herrera-DEV",
      icon: () => (
        <GithubSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
          className={`hover:stroke-white stroke-gray-300 transition duration-200`}
        />
      ),
      name: "Github",
      color: "",
      gradient: [],
    },
    {
      link: "https://www.linkedin.com/in/bryan-herrera-dev/",
      icon: () => (
        <LinkedSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
          className={`hover:stroke-white stroke-gray-300 transition duration-200`}
        />
      ),
      name: "LinkedIn",
      color: "",
      gradient: [],
    },
    {
      link: "https://www.twitch.tv/bryan_herrera_dev",
      icon: () => (
        <TwitchSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
          className={`hover:stroke-white stroke-gray-300 transition duration-200`}
          color="#d1d5db"
        />
      ),
      name: "Twitch",
      color: "",
      gradient: [],
    },
    {
      link: "https://www.youtube.com/channel/UCpqPMLwkeOwqC_eKJi0tumg",
      icon: () => (
        <YoutubeSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
          className={`hover:stroke-white stroke-gray-300 transition duration-200`}
          color="#d1d5db"
        />
      ),
      name: "Youtube",
      color: "",
      gradient: [],
    }
  ];

  switch (typeOfRender) {
    case "onlyIcons":
      return (
        <>
          {socialMedia.map((socialMediaItem, index) => (
            <a
              target="_blank"
              href={socialMediaItem.link}
              key={index}
              rel="noreferrer noopener"
              title={`${inmutableConstants.NOMBRE} ${socialMediaItem.name}`}
              aria-label={`Ir a ${socialMediaItem.name} de ${inmutableConstants.NOMBRE}`}
            >
              {socialMediaItem.icon()}
            </a>
          ))}
        </>
      );
    case "onlyNames":
      return <></>;
    case "namesButons":
      return <></>;
    case "namesAndIconsButtons":
      return <></>;
    default:
      return <></>;
  }
};
