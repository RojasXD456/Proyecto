import { type IEstudiante } from "./Cl_mEstudiante.js";
export interface IReporte {
    contadorAprobados: number;
    contadorReprobados: number;
    totalEstudiantes: number;
    promedioNotas: number;
    porcentajeAprobados: number;
    promedioPeso: number;
}
export default class Cl_mReporte {
    private contadorAprobados;
    private contadorReprobados;
    private sumNotas;
    private sumPeso;
    constructor();
    procesarEstudiante(estudiante: IEstudiante): void;
    reporteTotal(): IReporte;
}
//# sourceMappingURL=Cl_mReporte.d.ts.map