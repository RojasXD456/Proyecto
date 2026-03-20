export default class Cl_mEstudiante {
    constructor({ cedula, notaFinal, peso }) {
        this._cedula = cedula;
        this._notaFinal = notaFinal;
        this._peso = peso;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    set notaFinal(notaFinal) {
        this._notaFinal = notaFinal;
    }
    set peso(peso) {
        this._peso = peso;
    }
    get cedula() {
        return this._cedula;
    }
    get notaFinal() {
        return this._notaFinal;
    }
    get peso() {
        return this._peso;
    }
}
//# sourceMappingURL=Cl_mEstudiante.js.map