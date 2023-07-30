export function YearLabel({
  year,
  totalMonths,
  focusIndex,
  startYear
}: {
  year: number;
  totalMonths: number;
  focusIndex: number | null;
startYear: number;
}) {
  const yearStartMonth = (year - startYear) * 12;
  const yearStartPercent = (yearStartMonth / totalMonths) * 100;

  return (
    <div
      className={`absolute mb-2 text-xs text-violet-50 transition-opacity duration-200  ${focusIndex !== null ? "opacity-20" : "opacity-100"}`}
      style={{ marginLeft: `${yearStartPercent}%` }}
    >
      <p>{year}</p>
    </div>
  );
}

