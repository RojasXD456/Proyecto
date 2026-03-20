export interface IEstudiante {
    cedula: string;
    notaFinal: number;
}

export default class Cl_mEstudiante {
    _cedula: string;
    _notaFinal: number; 
    
    constructor({ cedula, notaFinal }: IEstudiante) {
        this._cedula = cedula;
        this._notaFinal = notaFinal;
    }

    set cedula(cedula: string){
        this._cedula = cedula;
    }

    set notaFinal(notaFinal: number) {
        this._notaFinal = notaFinal;
    }

    get cedula(): string {
        return this._cedula;
    }
    
    get notaFinal(): number {
        return this._notaFinal;
    }

}