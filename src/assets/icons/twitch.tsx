export const TwitchSvgIcon = ({
  size,
  key,
  className = "",
}: IconProps) => {
  return (
    <svg
      width={size?.width || "24px"}
      height={size?.height || "24px"}
      viewBox="0 0 256 256"
      fill="#d1d5db"
      xmlns="http://www.w3.org/2000/svg"
      key={key}
      className={className}
      xmlSpace="preserve"
    >
      <path xmlns="http://www.w3.org/2000/svg" d="M208,32H48A16.01833,16.01833,0,0,0,32,48V192a16.01833,16.01833,0,0,0,16,16H64v32a7.99949,7.99949,0,0,0,13.12109,6.14551L122.89648,208h42.207a16.03033,16.03033,0,0,0,10.24316-3.709l42.896-35.7461A15.958,15.958,0,0,0,224,156.253V48A16.01833,16.01833,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>
    </svg>
  );
};
