import { ReactNode } from "react";
import Image from "next/image";
import { firstNeonImage } from "./../../assets";
interface BackgroundComponentProps {
  children: ReactNode;
  navComponent: ReactNode;
}

const BackgroundComponent = ({
  children,
  navComponent,
}: BackgroundComponentProps) => {
  return (
    <main className="bg-baseBackground w-full h-full flex justify-center items-start pt-2">
      <div className="absolute inset-0 bg-textured bg-center"></div>
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            userSelect: "none",
            borderRadius: "inherit",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data-framer-background-image-wrapper="true"
        >
          <div
            style={{
              display: "contents",
              borderRadius: "inherit",
              pointerEvents: "none",
            }}
          >
            <Image
              src={firstNeonImage}
              sizes="1200px"
              style={{
                pointerEvents: "none",
                userSelect: "none",
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
              alt="Image For Neon background Bryan Herrera Dev"
              aria-label="Image For Neon background Bryan Herrera Dev"
              title="Image For Neon background Bryan Herrera Dev"
              priority
            />
          </div>
      </div>
      <div className="w-full max-w-[1100px]">
        <div className="w-full">
          {/* Sections Div */}
          {navComponent}
          {children}
        </div>
      </div>

      {/* <div
        className="second-neon"
        style={{ opacity: 1, transform: "perspective(1200px)" }}
      >
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            userSelect: "none",
            borderRadius: "inherit",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          }}
          data-framer-background-image-wrapper="true"
        >
          <div
            style={{
              display: "contents",
              borderRadius: "inherit",
              pointerEvents: "none",
            }}
          >
            <Image
              src={secondNeonImage}
              sizes="1200px"
              style={{
                pointerEvents: "none",
                userSelect: "none",
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
              alt="Image For Neon background Bryan Herrera Dev"
              aria-label="Image For Neon background Bryan Herrera Dev"
              title="Image For Neon background Bryan Herrera Dev"
              loading="lazy"
            />
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default BackgroundComponent;
