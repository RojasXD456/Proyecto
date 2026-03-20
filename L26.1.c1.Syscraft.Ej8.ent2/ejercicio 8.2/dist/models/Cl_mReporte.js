export default class Cl_mReporte {
    constructor() {
        this.contadorAprobados = 0;
        this.contadorReprobados = 0;
        this.sumNotas = 0;
        this.sumPeso = 0;
    }
    procesarEstudiante(estudiante) {
        if (estudiante.notaFinal >= 48) {
            this.contadorAprobados++;
        }
        else {
            this.contadorReprobados++;
        }
        this.sumNotas += estudiante.notaFinal;
        this.sumPeso += estudiante.peso;
    }
    reporteTotal() {
        const totalEstudiantes = this.contadorAprobados + this.contadorReprobados;
        const promedioNotas = totalEstudiantes > 0 ? this.sumNotas / totalEstudiantes : 0;
        const porcentajeAprobados = (this.contadorAprobados / totalEstudiantes) * 100;
        const promedioPeso = totalEstudiantes > 0 ? this.sumPeso / totalEstudiantes : 0;
        return {
            "contadorAprobados": this.contadorAprobados,
            "contadorReprobados": this.contadorReprobados,
            "totalEstudiantes": totalEstudiantes,
            "promedioNotas": promedioNotas,
            "porcentajeAprobados": porcentajeAprobados,
            "promedioPeso": promedioPeso
        };
    }
}
//# sourceMappingURL=Cl_mReporte.js.map