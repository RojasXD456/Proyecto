import type { IReporte } from "../models/Cl_mReporte.js";

/*
    ¿Qué Necesitamos?
    1.) 1 Boton
        1. para reporte total.  

*/

export default class Cl_vReporte {
    body_lblPromedioPeso: HTMLLabelElement;
    vista: HTMLElement;
    htmlBtnReporteTotal: HTMLButtonElement;
    toggleVista: HTMLButtonElement;
    body_lblTotalAprobados: HTMLLabelElement;
    body_lblTotalReprobados: HTMLLabelElement;
    body_lblTotal: HTMLLabelElement
    body_lblPromedio: HTMLLabelElement
    body_lblPorcentaje: HTMLLabelElement
    
    constructor() {
        this.body_lblPromedioPeso = document.getElementById("body_lblPromedioPeso") as HTMLLabelElement;
        this.vista = document.getElementById("body-report") as HTMLElement;
        this.htmlBtnReporteTotal = document.getElementById("GenerateReport") as HTMLButtonElement;
        this.toggleVista = document.getElementById("toggleVista") as HTMLButtonElement;
        this.body_lblTotalAprobados = document.getElementById("body_lblTotalAprobados") as HTMLLabelElement;
        this.body_lblTotalReprobados = document.getElementById("body_lblTotalReprobados") as HTMLLabelElement;
        this.body_lblTotal = document.getElementById("body_lblTotal") as HTMLLabelElement;
        this.body_lblPromedio = document.getElementById("body_lblPromedio") as HTMLLabelElement;
        this.body_lblPorcentaje=document.getElementById("body_lblPorcentaje") as HTMLLabelElement;
    }


    mostrarReporte(reporte: IReporte): void {
        this.body_lblPromedioPeso.innerHTML = ` ${reporte.promedioPeso.toFixed(2)}`;
        this.body_lblTotalAprobados.innerHTML = ` ${reporte.contadorAprobados}`;
        this.body_lblTotalReprobados.innerHTML = ` ${reporte.contadorReprobados}`;
        this.body_lblTotal.innerHTML = ` ${reporte.totalEstudiantes}`;
        this.body_lblPromedio.innerHTML = ` ${reporte.promedioNotas.toFixed(2)}`;
        this.body_lblPorcentaje.innerHTML = `${reporte.porcentajeAprobados}`;
    }
}
