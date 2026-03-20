export interface IEstudiante {
    cedula: string;
    notaFinal: number;
    peso: number;
}
export default class Cl_mEstudiante {
    _cedula: string;
    _notaFinal: number;
    _peso: number;
    constructor({ cedula, notaFinal, peso }: IEstudiante);
    set cedula(cedula: string);
    set notaFinal(notaFinal: number);
    set peso(peso: number);
    get cedula(): string;
    get notaFinal(): number;
    get peso(): number;
}
//# sourceMappingURL=Cl_mEstudiante.d.ts.map