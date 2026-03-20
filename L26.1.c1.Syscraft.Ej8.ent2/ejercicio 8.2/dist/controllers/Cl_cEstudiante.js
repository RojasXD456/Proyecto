import Cl_mEstudiante from "../models/Cl_mEstudiante.js";
import vista from "../views/Cl_vEstudiante.js";
export default class Cl_cEstudiante {
    constructor({ callback }) {
        this.vista = new vista();
        this.callback = callback;
        this.vista.htmlBtnGuardar.onclick = () => this.BtnGuardar();
        this.vista.htmlBtnCancelar.onclick = () => this.vista.limpiar();
    }
    mostrarVista() {
        this.vista.toggle();
    }
    BtnGuardar() {
        this.callback(new Cl_mEstudiante({
            peso: this.vista.peso,
            cedula: this.vista.cedula,
            notaFinal: this.vista.notaFinal
        }));
        this.vista.limpiar();
    }
    BtnCancelar() {
        this.callback(null);
        this.vista.toggle();
    }
}
//# sourceMappingURL=Cl_cEstudiante.js.map