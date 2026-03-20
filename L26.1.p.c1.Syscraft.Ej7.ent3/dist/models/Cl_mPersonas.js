export default class Cl_mPersonas {
    constructor(nombre, tipo, sueldo, peso) {
        this._nombre = "";
        this._sueldo = 0;
        this._peso = 0;
        this._nombre = nombre;
        this._tipo = tipo;
        this._sueldo = sueldo;
        this._peso = peso;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set tipo(tipo) {
        this._tipo = tipo;
    }
    get tipo() {
        return this._tipo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    set peso(peso) {
        this._peso = peso;
    }
    get peso() {
        return this._peso;
    }
    calcularAumento() {
        if (this.tipo == 1) {
            return (this.sueldo * 0.20);
        }
        else {
            if (this.tipo == 2) {
                return (this.sueldo * 0.10);
            }
            else {
                return 0;
            }
        }
    }
}
