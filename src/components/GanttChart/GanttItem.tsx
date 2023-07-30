import { experiences } from "@/shared/constants";
import { useState } from "react";
import { MonthLabel } from "./MonthLabel";
import { Tooltip } from "./ToolTip";

export function GanttItem({
  experience,
  totalMonths,
  barHeight,
  setFocus,
  removeFocus,
  focusIndex,
  index,
  startYear,
}: {
  experience: [string, Date, Date];
  totalMonths: number;
  barHeight: number;
  setFocus: (index: number) => void;
  removeFocus: () => void;
  focusIndex: number | null;
  index: number;
  startYear: number;
}) {
  const startMonth =
    (experience[1].getFullYear() - startYear) * 12 + experience[1].getMonth();
  const endMonth =
    (experience[2].getFullYear() - startYear) * 12 + experience[2].getMonth();
  const length = endMonth - startMonth;

  const startPercent = (startMonth / totalMonths) * 100;
  const lengthPercent = (length / totalMonths) * 100;

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseLeave = () => {
    removeFocus();
    setShowTooltip(false);
  };

  return (
    <div
      className={`flex items-center my-4 transition-opacity duration-200
        ${focusIndex !== null && index !== focusIndex ? "opacity-20" : ""}
        ${
          experience[0] === experiences[experiences.length - 1][0] ? "mb-5" : ""
        }
        bg-${index % 2 === 0 ? "" : "blue-800"}`}
      style={{ height: `${barHeight}%` }}
      onMouseEnter={() => setFocus(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full">
        <div className="h-4 relative">
          <div
            className={`h-4 from-baseBackground to-baseRedColor relative  bg-gradient-to-r`}
            style={{
              marginLeft: `${startPercent}%`,
              width: `${lengthPercent}%`,
            }}
          >
            {showTooltip && (
              <Tooltip show={focusIndex === index} experience={experience} />
            )}
            {focusIndex === index && (
              <>
                <div className="absolute top-full left-0 ml-2 mt-2 transition-opacity duration-200">
                  <MonthLabel date={experience[1]} />
                </div>
                <div className="absolute top-full right-0 mr-2 mt-2 transition-opacity duration-200">
                  <MonthLabel date={experience[2]} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
