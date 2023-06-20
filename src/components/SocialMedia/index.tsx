import { ReactNode } from "react";
import { DevToSvgIcon } from "@/assets/icons/dev-to";
import { GithubSvgIcon } from "@/assets/icons/github";

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
      link: "https://www.linkedin.com/in/bryan-herrera-dev",
      icon: () => (
        <DevToSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
        />
      ),
      name: "LinkekIn",
      color: "",
      gradient: [],
    },
    {
      link: "https://www.linkedin.com/in/bryan-herrera-dev",
      icon:() => (
        <GithubSvgIcon
          size={{
            width: 24,
            height: 24,
          }}
        />
      ),
      name: "Youtube",
      color: "",
      gradient: [],
    },
  ];

  switch (typeOfRender) {
    case "onlyIcons":
      return (
        <>
          {socialMedia.map((socialMediaItem, index) => (
            <div key={index}>{socialMediaItem.icon()} {index}</div>
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
