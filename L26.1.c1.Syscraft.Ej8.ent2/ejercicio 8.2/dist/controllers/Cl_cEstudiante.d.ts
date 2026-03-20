import type { IEstudiante } from "../models/Cl_mEstudiante.js";
type Callback = (student: IEstudiante | null) => void;
export default class Cl_cEstudiante {
    private vista;
    callback: Callback;
    constructor({ callback }: {
        callback: Callback;
    });
    mostrarVista(): void;
    BtnGuardar(): void;
    BtnCancelar(): void;
}
export {};
//# sourceMappingURL=Cl_cEstudiante.d.ts.map