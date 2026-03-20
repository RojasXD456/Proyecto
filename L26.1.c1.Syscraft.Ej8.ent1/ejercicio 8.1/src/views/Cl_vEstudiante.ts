/* 
    ¿Que necesitamos? 
    1.) 2 inputs: 
            1. la cedula.
            2. nota del estudiante.
    2.) 2 botones:
            1. guardar la data.
            2. limpiar la data.
            3. habilitar la vista
*/
export default class Cl_vEstudiante {
    htmlCedula: HTMLInputElement;
    htmlNotaFinal: HTMLInputElement;
    htmlBtnGuardar: HTMLButtonElement;
    htmlBtnCancelar: HTMLButtonElement;
    public vista: HTMLElement;
    
    constructor() {
        this.vista = document.getElementById("student") as HTMLElement;
        this.htmlCedula = document.getElementById("cedula") as HTMLInputElement;
        this.htmlNotaFinal = document.getElementById("nota") as HTMLInputElement;
        this.htmlBtnGuardar = document.getElementById("saveInfo") as HTMLButtonElement;
        this.htmlBtnCancelar = document.getElementById("cancelInfo") as HTMLButtonElement;
        
    }

    get cedula(): string {
        return this.htmlCedula.value;
    }

    get notaFinal():number {
        return +(this.htmlNotaFinal.value);
    }

    toggle(): void {
        if (this.vista === null) return;

        this.vista.hidden === false || this.vista.hidden === null // LINEA DE CONDICION
        ? this.vista.hidden = true // PRIMER CASO
        : this.vista.hidden = false // SEGUNDO CASO

        this.limpiar()
    }
    limpiar(): void {
        this.htmlCedula.value = ""
        this.htmlNotaFinal.value = "";  
    }

}