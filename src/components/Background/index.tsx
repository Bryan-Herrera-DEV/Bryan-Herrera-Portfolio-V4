import { ReactNode } from "react";

interface BackgroundComponentProps {
  children: ReactNode;
  navComponent: ReactNode;
}

const BackgroundComponent = ({
  children,
  navComponent,
}: BackgroundComponentProps) => {
  return (
    <main className="bg-baseBackground w-full h-screen flex justify-center items-start pt-2">
      <div className="w-full max-w-[800px]">
        <div className="w-full">
          {/* Sections Div */}
          {navComponent}
          {children}
        </div>
      </div>
    </main>
  );
};

export default BackgroundComponent;
