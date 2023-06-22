export const LinkedSvgIcon = ({
  size,
  color = "white",
  key,
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size?.width || "24px"}
      height={size?.height || "24px"}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      key={key}
      className={className}
      xmlSpace="preserve"
    >
      <path
        className="stroke-none text-black stroke-2"
        d="M23,31H9c-4.4,0-8-3.6-8-8V9c0-4.4,3.6-8,8-8h14c4.4,0,8,3.6,8,8v14C31,27.4,27.4,31,23,31z"
      />
      <rect x="7" y="13" className="st0" width="4" height="12" />
      <path
        className="stroke-none text-black stroke-2"
        d="M20.5,13c-0.9,0-1.8,0.3-2.5,0.8V13h-4v12h2h2v-6.5c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5V25h4v-7.5
        C25,15,23,13,20.5,13z"
      />
      <circle
        className="stroke-none text-black stroke-2"
        cx="9"
        cy="8"
        r="2"
      />
    </svg>
  );
};
