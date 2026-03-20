import type { IReporte } from "../models/Cl_mReporte.js";
export default class Cl_vReporte {
    vista: HTMLElement;
    htmlBtnReporteTotal: HTMLButtonElement;
    toggleVista: HTMLButtonElement;
    body_lblTotalAprobados: HTMLLabelElement;
    body_lblTotalReprobados: HTMLLabelElement;
    body_lblTotal: HTMLLabelElement;
    body_lblPromedio: HTMLLabelElement;
    body_lblPorcentaje: HTMLLabelElement;
    constructor();
    mostrarReporte(reporte: IReporte): void;
}
//# sourceMappingURL=Cl_vReporte.d.ts.map