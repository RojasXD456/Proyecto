import  { type IEstudiante } from "./Cl_mEstudiante.js";

export interface IReporte {
    contadorAprobados: number;
    contadorReprobados: number;
    totalEstudiantes: number
    promedioNotas: number;
    porcentajeAprobados:number;
    promedioPeso: number;
}

export default class Cl_mReporte {
    private contadorAprobados: number;
    private contadorReprobados: number;
    private sumNotas: number;
    private sumPeso: number;

    constructor() {
        this.contadorAprobados = 0;
        this.contadorReprobados = 0;
        this.sumNotas = 0;
        this.sumPeso = 0;
    }
    
    procesarEstudiante(estudiante: IEstudiante): void {
        if (estudiante.notaFinal >= 48) {
            this.contadorAprobados++;
        } else {
            this.contadorReprobados++;
        }
        this.sumNotas += estudiante.notaFinal;
        this.sumPeso += estudiante.peso;
    }

    reporteTotal(): IReporte{
        const totalEstudiantes = this.contadorAprobados + this.contadorReprobados;
        const promedioNotas = totalEstudiantes > 0 ? this.sumNotas / totalEstudiantes : 0;
        const porcentajeAprobados = (this.contadorAprobados/totalEstudiantes)*100;
        const promedioPeso = totalEstudiantes > 0 ? this.sumPeso / totalEstudiantes : 0;
        return { 
            "contadorAprobados": this.contadorAprobados,
            "contadorReprobados": this.contadorReprobados,
            "totalEstudiantes": totalEstudiantes,
            "promedioNotas": promedioNotas,
            "porcentajeAprobados": porcentajeAprobados,
            "promedioPeso": promedioPeso
        }
    }
}