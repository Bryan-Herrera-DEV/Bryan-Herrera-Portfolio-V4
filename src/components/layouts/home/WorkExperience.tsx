import React, { useEffect, useRef } from "react";
const skills = [
  { href: "#git_", title: "Git" },
  { href: "#json_", title: "JSON" },
  { href: "#html_", title: "HTML" },
  { href: "#react_", title: "React" },
  { href: "#python_", title: "Python" },
  { href: "#css_", title: "CSS" },
  { href: "#javascript_", title: "JavaScript" },
  { href: "#typescript_", title: "TypeScript" },
  { href: "#nodejs_", title: "Node.js" },
  { href: "#nextjs_", title: "Next.js" },
  { href: "#express_", title: "Express" },
  { href: "#mongodb_", title: "MongoDB" },
  { href: "#sql_", title: "SQL" },
  { href: "#mysql_", title: "MySQL" },
  { href: "#postgresql_", title: "PostgreSQL" },
  { href: "#graphql_", title: "GraphQL" },
  { href: "#apollo_", title: "Apollo" },
  { href: "#prisma_", title: "Prisma" },
  { href: "#angular_", title: "Angular" },
  { href: "#redux_", title: "Redux" },
  { href: "#redux-saga_", title: "Zustand" },
];
const WorkExperience = () => {
  useEffect(() => {
    const TagCanvas = window.TagCanvas;
    const tagCanvasOptions = {
      textColour: "#F8F8F2", // un color claro para el texto, que puede ser el mismo color que el fondo de tu página
      outlineColour: "#282A36", // un color oscuro para los bordes, que puede ser el mismo color que el fondo de tu página
      outlineThickness: 0.5, // un borde más delgado para un aspecto más limpio
      outlineOffset: 5, // espacio adicional alrededor del texto para que no se sienta tan apretado
      reverse: true,
      depth: 0.5, // una mayor profundidad para un efecto 3D más pronunciado
      maxSpeed: 0.02, // una velocidad de rotación más baja para un aspecto más tranquilo
      weight: true, // activa el cambio de tamaño en función de la "importancia" de las etiquetas
      weightFrom: "data-weight", // usa el atributo "data-weight" en las etiquetas <a> para determinar la importancia
      fadeIn: 1800, // tiempo que tarda en desvanecerse en milisegundos cuando el tagCanvas se carga por primera vez
      dragControl: true, // permite al usuario arrastrar el tagCanvas con el mouse
      wheelZoom: false, // permite al usuario hacer zoom con la rueda del mouse noSelect: true,
      initial: [0.01, -0.12],
      noSelect: true,
      shuffleTags: true,
    };
    try {
      TagCanvas.Start("tagcanvas", "taglist", tagCanvasOptions);
    } catch (e) {
      console.log("Canvas error.");
      console.log(e);
    }
  }, []);

  return (
    <div className="">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:max-w-8xl lg:grid-cols-2 xl:gap-x-16">
          <div>
            <canvas
              id="tagcanvas"
              width="820"
              height="600"
              style={{
                maxWidth: "1000px",
                width: "100%",
                zIndex: "99",
                position: "relative",
                margin: "0 auto",
              }}
            ></canvas>
            <div id="taglist" style={{ display: "none" }}>
              <ul>
                {skills.map((skill) => (
                  <li key={skill.title}>
                    <a href={skill.href}>{skill.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative mb-4">
              <p
                className="inline bg-gradient-to-r from-indigo-200 via-baseRedColor to-baseYellowColor bg-clip-text font-display text-5xl tracking-tight text-transparent
              "
              >
                My Tech Stack
              </p>
              <p className="mt-3 text-2xl tracking-tight text-slate-400">
                At the epicenter of digital innovation, every technology I use
                is a crucial component in the orchestration of solutions. is a
                crucial component in the orchestration of high-quality web
                solutions. high-quality web solutions. This is a sample of the
                skills and essential elements that converge to form a robust
                ecosystem capable of bringing to life to form a robust ecosystem
                capable of bringing to life sophisticated and efficient web
                applications. and efficient web applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
