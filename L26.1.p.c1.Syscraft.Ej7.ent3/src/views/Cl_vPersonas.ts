

export default class Cl_vPersonas {
    inNombre: HTMLInputElement;
    inTipo: HTMLInputElement;
    inSueldo: HTMLInputElement;
    inPeso: HTMLInputElement;
    btCancelar: any;
    btAceptar: any;
    vista: HTMLElement;
    constructor(){
        this.vista = document.getElementById("personas") as HTMLElement;
        this.inNombre = document.getElementById("personas_inNombre") as HTMLInputElement;
        this.inTipo = document.getElementById("personas_inTipo") as HTMLInputElement;
        this.inSueldo = document.getElementById("personas_inSueldo") as HTMLInputElement;
        this.inPeso = document.getElementById("personas_inPeso") as HTMLInputElement;
        this.btCancelar = document.getElementById("personas_btCancelar");
        this.btAceptar = document.getElementById("personas_btAceptar");
       
    }

get nombre(): string {
    return this.inNombre.value;
}
get tipo(): number {
    return +this.inTipo.value;
}
get sueldo(): number {
    return +this.inSueldo.value;
}
get peso(): number{
    return +this.inPeso.value;
}
mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
}
ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
}


}
