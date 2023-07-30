export const TwitchSvgIcon = ({
  size,
  key,
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size?.width || "24px"}
      height={size?.height || "24px"}
      viewBox="0 0 192 192"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={key}
      className={className}
      xmlSpace="preserve"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
        d="M96 52v32m32-32v32"
      />
      <path
        strokeLinejoin="round"
        strokeWidth="12"
        d="M34 138h30v32l32-32h24l38-38V22H52L34 40v98Z"
      />
    </svg>
  );
};
