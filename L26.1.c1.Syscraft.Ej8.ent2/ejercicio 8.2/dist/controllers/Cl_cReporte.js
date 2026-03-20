import Cl_mReporte from "../models/Cl_mReporte.js";
import Cl_vReporte from "../views/Cl_vReporte.js";
import Cl_cEstudiante from "./Cl_cEstudiante.js";
export default class Cl_cReporte {
    constructor() {
        this.mReporte = new Cl_mReporte();
        this.vReporte = new Cl_vReporte();
        this.cEstudiante = new Cl_cEstudiante({
            callback: (estudiante) => {
                if (estudiante) {
                    this.mReporte.procesarEstudiante(estudiante);
                }
            }
        });
        this.vReporte.htmlBtnReporteTotal.onclick = () => this.reporteTotal();
        this.vReporte.toggleVista.onclick = () => this.cEstudiante.mostrarVista();
    }
    reporteTotal() {
        const reporte = this.mReporte.reporteTotal();
        this.vReporte.mostrarReporte(reporte);
        this.vReporte.vista.hidden = false;
    }
}
//# sourceMappingURL=Cl_cReporte.js.map