const experiences: [string, Date, Date][] = [
  ["Experiencia 1", new Date("2019-02"), new Date("2020-07")],
  ["Experiencia 2", new Date("2020-08"), new Date("2021-07")],
  ["Experiencia 3", new Date("2021-07"), new Date("2022-07")],
  ["Experiencia 3", new Date("2019-07"), new Date("2023-12")],
  // y así sucesivamente
];

const startYear = 2019;

function GanttItem({
  experience,
  totalMonths,
  barHeight,
}: {
  experience: [string, Date, Date];
  totalMonths: number;
  barHeight: number;
}) {
  const startMonth =
    (experience[1].getFullYear() - startYear) * 12 + experience[1].getMonth();
  const endMonth =
    (experience[2].getFullYear() - startYear) * 12 + experience[2].getMonth();
  const length = endMonth - startMonth;

  const startPercent = (startMonth / totalMonths) * 100;
  const lengthPercent = (length / totalMonths) * 100;

  return (
    <div className="flex items-center my-4" style={{ height: `${barHeight}%` }}>
      <div className="w-full ml-32">
        <div className="bg-gray-200 rounded-full h-4 relative">
          <div
            className="bg-blue-500 rounded-full h-4"
            style={{
              marginLeft: `${startPercent}%`,
              width: `${lengthPercent}%`,
            }}
          >
            <span className="absolute text-xs left-0 ml-2">
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function YearLabel({
  year,
  totalMonths,
}: {
  year: number;
  totalMonths: number;
}) {
  const yearStartMonth = (year - startYear) * 12;
  const yearStartPercent = (yearStartMonth / totalMonths) * 100;

  return (
    <div
      className="absolute mb-2 text-xs text-violet-50"
      style={{ marginLeft: `${yearStartPercent}%` }}
    >
      {year}
    </div>
  );
}

function GanttChart({ experiences }: { experiences: [string, Date, Date][] }) {
  let lastYear = experiences.reduce((latest, exp) => {
    const year = exp[2].getFullYear();
    return year > latest ? year : latest;
  }, startYear);

  // Si el año actual es posterior al último año de experiencia, utilízalo
  const endYear = Math.max(lastYear, new Date().getFullYear()) + 1;

  // luego usa endYear en lugar de new Date().getFullYear() para calcular el total de meses
  const totalMonths = (endYear - startYear) * 12;

  // calculamos la altura que debería tener cada barra
  const barHeight = 100 / experiences.length;

  return (
    <div className="container mx-auto relative">
      {experiences.map((experience, index) => (
        <GanttItem
          key={index}
          experience={experience}
          totalMonths={totalMonths}
          barHeight={barHeight}
        />
      ))}
      <div className="w-full absolute bottom-0 left-0 ml-32 pt-1">
        {[...Array(endYear - startYear + 1)].map((_, i) => (
          <YearLabel key={i} year={startYear + i} totalMonths={totalMonths} />
        ))}
      </div>
    </div>
  );
}

const WorkExperience = () => {
  return <GanttChart experiences={experiences} />;
};

export default WorkExperience;
