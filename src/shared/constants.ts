interface Constants {
    readonly NOMBRE: string;
    readonly NOMBRE_COMPLETO: string;
    readonly EMAIL: string;
    readonly FECHA_NACIMIENTO: string;
    readonly FECHA_INICIO: string;
}

export interface RoutesConstants {
    readonly HOME: string[][];
    readonly ABOUT: string[][];
    readonly CONTACT: string[][];
}
/**
 * @description Constantes inmutables de la aplicación
 */

export const inmutableConstants: Constants = {
    NOMBRE: "Bryan Herrera",
    NOMBRE_COMPLETO: "Bryan Herrera Real",
    EMAIL: "bryherrera55@gmail.com",
    FECHA_NACIMIENTO: "2003-02-24",
    FECHA_INICIO: "2016-00-20"
};

/**
 * @description Constantes de rutas
 */
export const routesContstants: RoutesConstants = {
    HOME: [
        ["/", "Home"]
    ],
    ABOUT: [
        ["/about", "About"]
    ],
    CONTACT: [
        ["/contact", "Contact"]
    ]
};

/**
 * @description Constantes de las tecnologías
 */

export const TAGS: string[] = [
    "Git",
    "JSON",
    "HTML",
    "React",
    "Python",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Express",
    "MongoDB",
    "SQL",
    "MySQL",
    "PostgreSQL",
    "GraphQL",
    "Apollo",
    "Prisma",
    "Angular",
    "Redux",
    "Zustand",
];
/**
 * @description Constantes del workexperience
 */
export const experiences: [string, Date, Date][] = [
    ["Experiencia 1", new Date("2019-02"), new Date("2020-07")],
    ["Experiencia 2", new Date("2020-08"), new Date("2021-07")],
    ["Experiencia 5.5", new Date("2021-07"), new Date("2022-07")],
    ["Experiencia 3\njaja", new Date("2019-07"), new Date("2023-11")]
];
