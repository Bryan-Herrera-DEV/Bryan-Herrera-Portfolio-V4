interface Constants {
    readonly NOMBRE: string;
    readonly NOMBRE_COMPLETO: string;
    readonly EMAIL: string;
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
    EMAIL: "bryherrera55@gmail.com"
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