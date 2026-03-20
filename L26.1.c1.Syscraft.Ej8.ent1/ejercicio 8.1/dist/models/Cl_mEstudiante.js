export default class Cl_mEstudiante {
    constructor({ cedula, notaFinal }) {
        this._cedula = cedula;
        this._notaFinal = notaFinal;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = notaFinal;
    }
    get cedula() {
        return this._cedula;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}
//# sourceMappingURL=Cl_mEstudiante.js.map