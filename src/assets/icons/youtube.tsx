export const YoutubeSvgIcon = ({
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
        d="M13,12V20c0,0.8,0.9,1.3,1.6,0.9l6-4c0.6-0.4,0.6-1.3,0-1.7l-6-4C13.9,10.7,13,11.2,13,12z"
      />
      <g>
        <path
          className="stroke-none text-black stroke-2"
          d="M28.1,25.5c-9.7,0.7-14.5,0.7-24.2,0c-1.1-0.1-2.2-1.1-2.3-2.2c-0.8-5.8-0.8-8.7,0-14.5
		c0.2-1.1,1.2-2.2,2.3-2.2c9.7-0.7,14.5-0.7,24.2,0c1.1,0.1,2.2,1.1,2.3,2.2c0.8,5.8,0.8,8.7,0,14.5C30.3,24.4,29.2,25.4,28.1,25.5z
		"
        />
      </g>
    </svg>
  );
};
