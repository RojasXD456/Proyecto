export default class Cl_vPersonas {
    constructor() {
        this.vista = document.getElementById("personas");
        this.inNombre = document.getElementById("personas_inNombre");
        this.inTipo = document.getElementById("personas_inTipo");
        this.inSueldo = document.getElementById("personas_inSueldo");
        this.btCancelar = document.getElementById("personas_btCancelar");
        this.btAceptar = document.getElementById("personas_btAceptar");
    }
    get nombre() {
        return this.inNombre.value;
    }
    get tipo() {
        return +this.inTipo.value;
    }
    get sueldo() {
        return +this.inSueldo.value;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
