export default class Cl_mEmpresa {
    constructor() {
        this.totalMontoAdicional = 0;
        this.acPersObrero = 0;
        this.acPersAdministrativo = 0;
        this.acTotalPers = 0;
        this.contPeso = 0;
        this.contSueldoObr = 0;
        this.contSueldoAdmin = 0;
        this.mayorSueldoObrero = 0;
        this.mayorSueldoAdmin = 0;
    }
    procesarPersonas(p) {
        this.acTotalPers++;
        if (p.tipo === 1) {
            this.acPersObrero++;
            this.contSueldoObr += p.sueldo;
            const pagoActualObr = p.sueldo;
            if (pagoActualObr > this.mayorSueldoObrero) {
                this.mayorSueldoObrero = pagoActualObr;
            }
        }
        else {
            if (p.tipo === 2) {
                this.acPersAdministrativo++;
                this.contSueldoAdmin += p.sueldo;
                const pagoActualAdmin = p.sueldo;
                if (pagoActualAdmin > this.mayorSueldoAdmin) {
                    this.mayorSueldoAdmin = pagoActualAdmin;
                }
            }
        }
        this.contPeso += p.peso;
        this.totalMontoAdicional += p.calcularAumento();
    }
    porcentajePersonalObrero() {
        if (this.acTotalPers === 0) {
            return 0;
        }
        else {
            return ((this.acPersObrero / this.acTotalPers) * 100);
        }
    }
    porcentajePersonalAdminis() {
        if (this.acTotalPers === 0) {
            return 0;
        }
        else {
            return ((this.acPersAdministrativo / this.acTotalPers) * 100);
        }
    }
    promedioPesoPersonal() {
        if (this.acTotalPers === 0) {
            return 0;
        }
        else {
            return ((this.contPeso / this.acTotalPers));
        }
    }
    get totalMonto() {
        return this.totalMontoAdicional;
    }
    get obtenerMayorSueldoObrero() {
        return this.mayorSueldoObrero;
    }
    get obtenerMayorSueldoAdmin() {
        return this.mayorSueldoAdmin;
    }
    get contadorPeso() {
        return this.contPeso;
    }
}
