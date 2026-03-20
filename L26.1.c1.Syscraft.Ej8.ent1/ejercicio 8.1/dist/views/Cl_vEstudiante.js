/*
    ¿Que necesitamos?
    1.) 2 inputs:
            1. la cedula.
            2. nota del estudiante.
    2.) 2 botones:
            1. guardar la data.
            2. limpiar la data.
            3. habilitar la vista
*/
export default class Cl_vEstudiante {
    constructor() {
        this.vista = document.getElementById("student");
        this.htmlCedula = document.getElementById("cedula");
        this.htmlNotaFinal = document.getElementById("nota");
        this.htmlBtnGuardar = document.getElementById("saveInfo");
        this.htmlBtnCancelar = document.getElementById("cancelInfo");
    }
    get cedula() {
        return this.htmlCedula.value;
    }
    get notaFinal() {
        return +(this.htmlNotaFinal.value);
    }
    toggle() {
        if (this.vista === null)
            return;
        this.vista.hidden === false || this.vista.hidden === null // LINEA DE CONDICION
            ? this.vista.hidden = true // PRIMER CASO
            : this.vista.hidden = false; // SEGUNDO CASO
        this.limpiar();
    }
    limpiar() {
        this.htmlCedula.value = "";
        this.htmlNotaFinal.value = "";
    }
}
//# sourceMappingURL=Cl_vEstudiante.js.map