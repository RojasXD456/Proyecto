export interface IEstudiante {
    cedula: string;
    notaFinal: number;
    peso: number; // Propiedad opcional
}

export default class Cl_mEstudiante {
    _cedula: string;
    _notaFinal: number;
    _peso: number;
    
    constructor({ cedula, notaFinal, peso }: IEstudiante) {
        this._cedula = cedula;
        this._notaFinal = notaFinal;
        this._peso = peso;
    }

    set cedula(cedula: string){
        this._cedula = cedula;
    }

    set notaFinal(notaFinal: number) {
        this._notaFinal = notaFinal;
    }

    set peso(peso: number) {
        this._peso = peso;
    }

    get cedula(): string {
        return this._cedula;
    }
    
    get notaFinal(): number {
        return this._notaFinal;
    }

    get peso(): number {
        return this._peso;
    }
}