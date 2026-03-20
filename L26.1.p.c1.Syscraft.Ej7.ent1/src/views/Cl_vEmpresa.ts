import Cl_mPersonas from "../models/Cl_mPersonas.js";
import Cl_mEmpresa from "../models/Cl_mEmpresa.js";

export default class Cl_vEmpresa {
    lblMontoPagar: HTMLElement;
    lblPorcentajeObrero: HTMLElement;
    lblPorcentajeAdmin: HTMLElement;
    lblMayorSueldoObrero: HTMLElement;
    lblMayorSueldoAdmin: HTMLElement;
    btProcesar1Persona: HTMLButtonElement;
    divRegistros: HTMLElement;

    constructor() {
        this.lblMontoPagar = document.getElementById("body_lblMontoPagar") as HTMLElement;
        this.lblPorcentajeObrero = document.getElementById("body_lblPorcentajeObrero") as HTMLElement;
        this.lblPorcentajeAdmin = document.getElementById("body_lblPorcentajeAdmin") as HTMLElement;
        this.lblMayorSueldoObrero = document.getElementById("body_lblMayorSueldoObrero") as HTMLElement;
        this.lblMayorSueldoAdmin = document.getElementById("body_lblMayorSueldoAdmin") as HTMLElement;
        this.btProcesar1Persona = document.getElementById("body_btProcesar1Persona") as HTMLButtonElement;
        this.divRegistros = document.getElementById("div") as HTMLElement;
        
        // Crear el contenedor de registros
        this.crearContenedorRegistros();
    }

    crearContenedorRegistros() {
        // Buscar si ya existe el contenedor
        this.divRegistros = document.getElementById("registrosPersonas") as HTMLElement;
        
        // Si no existe, crearlo
        if (!this.divRegistros) {
            this.divRegistros = document.createElement("div");
            this.divRegistros.id = "registrosPersonas";
            this.divRegistros.style.marginBottom = "20px";
            
            // Insertarlo después del botón
            const boton = this.btProcesar1Persona.parentElement;
            if (boton) {
                boton.insertAdjacentElement('afterend', this.divRegistros);
            }
        }
    }

    reportar({empresa, personas}: {empresa: Cl_mEmpresa, personas: Cl_mPersonas}): void {
        // Agregar el nuevo registro al inicio del stack
        this.agregarRegistro(personas);
        
        // Actualizar el total
        this.lblMontoPagar.innerHTML = empresa.totalMonto.toString();
        this.lblPorcentajeObrero.innerHTML = empresa.porcentajePersonalObrero().toFixed(2);
        this.lblPorcentajeAdmin.innerHTML = empresa.porcentajePersonalAdminis().toFixed(2);
        this.lblMayorSueldoObrero.innerHTML = empresa.obtenerMayorSueldoObrero.toFixed(2);
        this.lblMayorSueldoAdmin.innerHTML = empresa.obtenerMayorSueldoAdmin.toFixed(2);
     
    }

    agregarRegistro(personas: Cl_mPersonas): void {
        const aumento = personas.calcularAumento();
        
        // Crear el elemento del registro
        const registro = document.createElement("div");
        registro.className = "registro-persona";
        registro.innerHTML = `${personas.nombre} tiene un aumento de $${aumento}
                                (Rango ${personas.tipo})`;
        
        // Agregar al inicio del contenedor
        if (this.divRegistros.firstChild) {
            this.divRegistros.insertBefore(registro, this.divRegistros.firstChild);
        } else {
            this.divRegistros.appendChild(registro);
        }
    }
}