export function Tooltip({
  experience,
  show,
}: {
  experience: [string, Date, Date];
  show: boolean;
}) {
  return (
    <div
      className={`transition-opacity duration-1000 
        ${show ? "opacity-100" : "opacity-0"} 
        inline-block text-xs top-0 left-0 ml-2`}
      style={{
        backgroundColor: "white",
        color: "black",
        padding: "10px",
        borderRadius: "5px",
        zIndex: 1,
        transition: "opacity 0.3s ease",
        marginTop: "-40px",
      }}
    >
      <p>{`Experiencia: ${experience[0]}`}</p>
      <p>{`Desde: ${experience[1].toLocaleDateString()}`}</p>
      <p>{`Hasta: ${experience[2].toLocaleDateString()}`}</p>
    </div>
  );
}
