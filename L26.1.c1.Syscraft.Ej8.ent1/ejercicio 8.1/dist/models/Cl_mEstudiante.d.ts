export interface IEstudiante {
    cedula: string;
    notaFinal: number;
}
export default class Cl_mEstudiante {
    _cedula: string;
    _notaFinal: number;
    constructor({ cedula, notaFinal }: IEstudiante);
    set cedula(cedula: string);
    set notaFinal(notaFinal: number);
    get cedula(): string;
    get notaFinal(): number;
}
//# sourceMappingURL=Cl_mEstudiante.d.ts.map