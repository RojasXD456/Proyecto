export default class Cl_vEmpresa {
    constructor() {
        this.lblMontoPagar = document.getElementById("body_lblMontoPagar");
        this.lblPorcentajeObrero = document.getElementById("body_lblPorcentajeObrero");
        this.lblPorcentajeAdmin = document.getElementById("body_lblPorcentajeAdmin");
        this.lblMayorSueldoObrero = document.getElementById("body_lblMayorSueldoObrero");
        this.lblMayorSueldoAdmin = document.getElementById("body_lblMayorSueldoAdmin");
        this.lblPromedioPesoPersonal = document.getElementById("body_lblPromedioPesoPersonal");
        this.btProcesar1Persona = document.getElementById("body_btProcesar1Persona");
        this.divRegistros = document.getElementById("div");
        // Crear el contenedor de registros
        this.crearContenedorRegistros();
    }
    crearContenedorRegistros() {
        // Buscar si ya existe el contenedor
        this.divRegistros = document.getElementById("registrosPersonas");
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
    reportar({ empresa, personas }) {
        // Agregar el nuevo registro al inicio del stack
        this.agregarRegistro(personas);
        // Actualizar el total
        this.lblMontoPagar.innerHTML = empresa.totalMonto.toString();
        this.lblPorcentajeObrero.innerHTML = empresa.porcentajePersonalObrero().toFixed(2);
        this.lblPorcentajeAdmin.innerHTML = empresa.porcentajePersonalAdminis().toFixed(2);
        this.lblMayorSueldoObrero.innerHTML = empresa.obtenerMayorSueldoObrero.toFixed(2);
        this.lblMayorSueldoAdmin.innerHTML = empresa.obtenerMayorSueldoAdmin.toFixed(2);
        this.lblPromedioPesoPersonal.innerHTML = empresa.promedioPesoPersonal().toFixed(2);
    }
    agregarRegistro(personas) {
        const aumento = personas.calcularAumento();
        const registro = document.createElement("div");
        registro.className = "registro-persona";
        registro.innerHTML = `${personas.nombre} tiene un aumento de $${aumento}
                                (Rango ${personas.tipo})`;
        if (this.divRegistros.firstChild) {
            this.divRegistros.insertBefore(registro, this.divRegistros.firstChild);
        }
        else {
            this.divRegistros.appendChild(registro);
        }
    }
}
