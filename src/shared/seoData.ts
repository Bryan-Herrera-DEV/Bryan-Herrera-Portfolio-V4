import { RoutesConstants, inmutableConstants, routesContstants } from "./constants";

interface SEO {
    title: string;
    description: string;
    keywords: string[];
}

type RouteKey = keyof RoutesConstants;


// Definición de las rutas y sus metadatos de SEO
const seoByRoute: Record<RouteKey, SEO> = {
    HOME: {
        title: `${inmutableConstants.NOMBRE} | ${routesContstants.HOME[0][1]}`,
        description: `${inmutableConstants.NOMBRE}, un desarrollador Full-Stack apasionado y experimentado. Explora mi portafolio para ver mis proyectos más recientes y descubre cómo mis habilidades técnicas y soluciones creativas pueden dar vida a tu próximo proyecto digital.`,
        keywords: ["Bryan Herrera Desarrollador Full-Stack",
            "Portafolio Bryan Herrera",
            "Especialista Full-Stack",
            "Programador Full-Stack Web",
            "Servicios de Desarrollo Full-Stack",
            "Proyectos destacados de Desarrollo Full-Stack",
            "Desarrollador Full-Stack con experiencia",
            "Programación Full-Stack Front-End y Back-End",
            "Desarrollo profesional de aplicaciones web",
            "Soluciones integrales de desarrollo web Full-Stack"],
    }
};

// Función para obtener los metadatos de SEO de una ruta específica
export function getSEO(route: RouteKey): SEO | undefined {
    return seoByRoute[route];
}