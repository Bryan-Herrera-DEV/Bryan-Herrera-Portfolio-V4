import { useState } from "react";
import { GanttItem } from "./GanttItem";
import { YearLabel } from "./YearLabel";

const startYear = 2019;
interface ExperienceBoxProps {
  experience: [string, Date, Date];
  index: number;
  setFocus: (index: number) => void;
  removeFocus: () => void;
  focusIndex: number | null;
}

function ExperienceBox({
  experience,
  index,
  setFocus,
  removeFocus,
  focusIndex,
}: ExperienceBoxProps ) {
  return (
    <div
      className={`btn-Custom draw-border
      ${focusIndex !== null && index !== focusIndex ? "opacity-50" : ""}`}
      onMouseEnter={() => setFocus(index)}
      onMouseLeave={removeFocus}
    >
      <h3>{experience[0]}</h3>
      <p>Desde: {experience[1].toLocaleDateString()}</p>
      <p>
        Hasta:
        {experience[2].toLocaleDateString()}
      </p>
    </div>
  );
}
export function GanttChart({
  experiences,
}: {
  experiences: [string, Date, Date][];
}) {
  const endYear = new Date().getFullYear();
  const totalMonths = (endYear - startYear + 1) * 12;
  const barHeight = 100 / experiences.length;

  const [focusIndex, setFocusIndex] = useState<number | null>(null);

  const removeFocus = () => setFocusIndex(null);
  const setFocus = (index: number) => setFocusIndex(index);
  return (
    <div className="container mx-auto relative w-full mt-[60px]">
      <div
        style={{
          marginTop: "10px",
          width: "100%",
          display: "grid",
          gap: "1rem",
          gridTemplateColumns:
          "repeat(auto-fill, minmax(min(100%, 15rem), 1fr))",
          gridAutoFlow: "dense",
          padding: "1rem",
        }}
      >
        {experiences.map((experience, index) => (
          <ExperienceBox
            key={index}
            experience={experience}
            index={index}
            setFocus={setFocus}
            removeFocus={removeFocus}
            focusIndex={focusIndex}
          />
        ))}
      </div>
      {experiences.map((experience, index) => (
        <GanttItem
          key={index}
          experience={experience}
          totalMonths={totalMonths}
          barHeight={barHeight}
          setFocus={() => setFocusIndex(index)}
          removeFocus={() => setFocusIndex(null)}
          focusIndex={focusIndex}
          index={index}
          startYear={startYear}
        />
      ))}
      <div className="w-full mb-16">
        {[...Array(endYear - startYear + 1)].map((_, i) => (
          <YearLabel
            key={i}
            year={startYear + i}
            totalMonths={totalMonths}
            focusIndex={focusIndex}
            startYear={startYear}
          />
        ))}
      </div>
    </div>
  );
}
