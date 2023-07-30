import { TAGS } from "@/shared/constants";
import React, { ReactNode, useState, useEffect } from "react";
const ROWS = 5;
const TAGS_PER_ROW = 5;
const shuffle = (arr: string[]): string[] =>
  [...arr].sort(() => 0.5 - Math.random());

interface InfiniteLoopSliderProps {
  children: ReactNode;
  duration: number;
  reverse?: boolean | undefined | null | number;
  uniqueKey?: string | number; // Agregamos esto
}

const InfiniteLoopSlider: React.FC<InfiniteLoopSliderProps> = ({
  children,
  duration,
  reverse = false,
  uniqueKey,
}: InfiniteLoopSliderProps) => {
  return (
    <div className={"loop-slider"} key={`${uniqueKey}tag`}>
      <div
        className="inner"
        style={{
          animationDuration: `${duration}ms`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  );
};

interface TagProps {
  text: string;
  cl: string;
}

const Tag: React.FC<TagProps> = ({ text, cl }) => (
  <p className={`tag ${cl}`}>
    <span>#</span> {text}
  </p>
);

const WorkExperience = () => {
  const [rows, setRows] = useState<string[][]>(Array(ROWS).fill([]));

  useEffect(() => {
    const newRows = rows.map((_) => shuffle(TAGS));
    setRows(newRows);
  }, []);
  return (
    <section className="">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid grid-cols-1 md:revers items-center gap-x-8 gap-y-16 lg:max-w-8xl lg:grid-cols-2 xl:gap-x-16">
          <div className="tag-list" id="a">
            {rows.map((_, i) => (
              <InfiniteLoopSlider
                duration={50000}
                reverse={i % 2}
                uniqueKey={i}
                key={`${i}tagLoop`}
              >
                {rows[i].slice(0, TAGS_PER_ROW).map((tag, iD) => (
                  <Tag text={tag} key={iD} cl={i % 2 ? "red" : "yll"} />
                ))}
              </InfiniteLoopSlider>
            ))}
            <div className="fade" />
          </div>
          <div className="relative z-10 md:text-center lg:text-left max-md:grid-col-1-2 max-md:grid-row-1-2">
            <div className="relative mb-4">
              <p
                className="inline bg-gradient-to-r from-indigo-200 via-baseRedColor to-baseYellowColor bg-clip-text font-display text-5xl tracking-tight text-transparent"
              >
                My Tech Stack
              </p>
              <p className="mt-3 text-xl tracking-tight text-slate-400">
                At the epicenter of digital innovation, every technology I use
                is a crucial component in orchestrating high-quality solutions.
                This is my sample of the essential skills and elements that
                converge to form a robust skillset of skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
