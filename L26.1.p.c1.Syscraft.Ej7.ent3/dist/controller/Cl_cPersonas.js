import Cl_mPersonas from "../models/Cl_mPersonas.js";
import Cl_vPersonas from "../views/Cl_vPersonas.js";
export default class Cl_cPersonas {
    constructor({ callback, }) {
        this.vista = new Cl_vPersonas();
        this.callback = callback;
        this.vista.mostrar();
        if (this.vista.btCancelar) {
            this.vista.btCancelar.onclick = () => this.btCancelarOnClick();
        }
        if (this.vista.btAceptar) {
            this.vista.btAceptar.onclick = () => this.btAceptarOnClick();
        }
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        const persona = new Cl_mPersonas(this.vista.nombre, this.vista.tipo, this.vista.sueldo, this.vista.peso);
        this.callback(persona);
        this.vista.ocultar();
    }
}
