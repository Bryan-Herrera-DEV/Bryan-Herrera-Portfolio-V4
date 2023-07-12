import { experiences } from "@/shared/constants";
import { useState } from "react";

const startYear = 2019;

function GanttItem({
  experience,
  totalMonths,
  barHeight,
  setFocus,
  removeFocus,
  focusIndex,
  index,
}: {
  experience: [string, Date, Date];
  totalMonths: number;
  barHeight: number;
  setFocus: () => void;
  removeFocus: () => void;
  focusIndex: number | null;
  index: number;
}) {
  const startMonth =
    (experience[1].getFullYear() - startYear) * 12 + experience[1].getMonth();
  const endMonth =
    (experience[2].getFullYear() - startYear) * 12 + experience[2].getMonth();
  const length = endMonth - startMonth;

  const startPercent = (startMonth / totalMonths) * 100;
  const lengthPercent = (length / totalMonths) * 100;

  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setFocus();
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    removeFocus();
    setShowTooltip(false);
  };

  return (
    <div
      className={`flex items-center my-4 transition-opacity duration-200
      ${focusIndex !== null && index !== focusIndex ? "opacity-20" : ""}
      ${experience[0] === experiences[experiences.length - 1][0] ? "mb-5" : ""}
      bg-${index % 2 === 0 ? "" : "blue-800"}`}
      style={{ height: `${barHeight}%` }}
      onMouseEnter={handleMouseEnter}
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
            {showTooltip && <Tooltip show={focusIndex === index} experience={experience} />}
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

function Tooltip({ experience, show  }: { experience: [string, Date, Date]; show: boolean }) {
  return (
    <div
      className={`transition-opacity duration-1000 
      ${show ? 'opacity-100' : 'opacity-0'} 
      inline-block text-xs top-0 left-0 ml-2`}
      style={{
        backgroundColor: 'white',
        color: 'black',
        padding: '10px',
        borderRadius: '5px',
        zIndex: 1,
        transition: 'opacity 0.3s ease',
        marginTop: '-40px',
      }}
    >
      <p>{`Experiencia: ${experience[0]}`}</p>
      <p>{`Desde: ${experience[1].toLocaleDateString()}`}</p>
      <p>{`Hasta: ${experience[2].toLocaleDateString()}`}</p>
    </div>
  );
}

function YearLabel({
  year,
  totalMonths,
  focusIndex
}: {
  year: number;
  totalMonths: number;
  focusIndex: number | null;
}) {
  const yearStartMonth = (year - startYear) * 12;
  const yearStartPercent = (yearStartMonth / totalMonths) * 100;

  return (
    <div
      className={`absolute mb-2 text-xs text-violet-50 transition-opacity duration-200  ${focusIndex !== null ? 'opacity-20' : 'opacity-100'}`}
      style={{ marginLeft: `${yearStartPercent}%` }}
    >
      <p>{year}</p>
    </div>
  );
}

function MonthLabel({ date }: { date: Date }) {
  const monthName = date.toLocaleString("default", { month: "short" }); // Esto convertirá el número del mes a un nombre de mes corto
  const year = date.getFullYear();

  return (
    <p><span className="text-xs text-violet-50">{`${monthName} ${year}`}</span></p>
  );
}

function GanttChart({ experiences }: { experiences: [string, Date, Date][] }) {
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
        />
      ))}
      <div className="w-full mb-16">
        {[...Array(endYear - startYear + 1)].map((_, i) => (
          <YearLabel key={i} year={startYear + i} totalMonths={totalMonths} focusIndex={focusIndex} />
        ))}
      </div>
    </div>
  );
}

const WorkExperience = () => {
  return (
    <section className="relative mb-4 text-center">
      <p className="inline bg-gradient-to-r from-baseRedColor via-indigo-200  to-baseYellowColor bg-clip-text font-display text-5xl tracking-tight text-transparent mb-5">
        My Work Experience
      </p>
      <GanttChart experiences={experiences} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
};

export default WorkExperience;
