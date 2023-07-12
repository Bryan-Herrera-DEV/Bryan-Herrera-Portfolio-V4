import { useState } from "react";
import { GanttItem } from "./GanttItem";
import { YearLabel } from "./YearLabel";

const startYear = 2019;

export function GanttChart({ experiences }: { experiences: [string, Date, Date][] }) {
  const endYear = new Date().getFullYear();
  const totalMonths = (endYear - startYear + 1) * 12;
  const barHeight = 100 / experiences.length;

  const [focusIndex, setFocusIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  
  return (
    <div className="container mx-auto relative w-full mt-[60px]">
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
          <YearLabel key={i} year={startYear + i} totalMonths={totalMonths} focusIndex={focusIndex} startYear={startYear} />
        ))}
      </div>
    </div>
  );
}