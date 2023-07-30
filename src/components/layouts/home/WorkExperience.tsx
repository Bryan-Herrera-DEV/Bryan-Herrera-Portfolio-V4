import { GanttChart } from "@/components/GanttChart";
import { experiences } from "@/shared/constants";

const WorkExperience = () => {
  return (
    <section className="relative mb-4 text-center">
      <h2 className="inline bg-gradient-to-r from-baseRedColor via-indigo-200  to-baseYellowColor bg-clip-text font-display text-5xl tracking-tight text-transparent mb-5">
        My last 4 work experiences
      </h2>
      <GanttChart experiences={experiences} />
    </section>
  );
};

export default WorkExperience;
