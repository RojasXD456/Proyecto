/*
    ¿Qué Necesitamos?
    1.) 1 Boton
        1. para reporte total.

*/
export default class Cl_vReporte {
    constructor() {
        this.vista = document.getElementById("body-report");
        this.htmlBtnReporteTotal = document.getElementById("GenerateReport");
        this.toggleVista = document.getElementById("toggleVista");
        this.body_lblTotalAprobados = document.getElementById("body_lblTotalAprobados");
        this.body_lblTotalReprobados = document.getElementById("body_lblTotalReprobados");
        this.body_lblTotal = document.getElementById("body_lblTotal");
        this.body_lblPromedio = document.getElementById("body_lblPromedio");
        this.body_lblPorcentaje = document.getElementById("body_lblPorcentaje");
    }
    mostrarReporte(reporte) {
        this.body_lblTotalAprobados.innerHTML = ` ${reporte.contadorAprobados}`;
        this.body_lblTotalReprobados.innerHTML = ` ${reporte.contadorReprobados}`;
        this.body_lblTotal.innerHTML = ` ${reporte.totalEstudiantes}`;
        this.body_lblPromedio.innerHTML = ` ${reporte.promedioNotas.toFixed(2)}`;
        this.body_lblPorcentaje.innerHTML = `${reporte.porcentajeAprobados}`;
    }
}
//# sourceMappingURL=Cl_vReporte.js.map