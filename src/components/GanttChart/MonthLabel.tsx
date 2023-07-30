export function MonthLabel({ date }: { date: Date }) {
    const monthName = date.toLocaleString("default", { month: "short" }); // Esto convertirá el número del mes a un nombre de mes corto
    const year = date.getFullYear();
    return (
      <p><span className="text-xs text-violet-50">{`${monthName} ${year}`}</span></p>
    );
  }