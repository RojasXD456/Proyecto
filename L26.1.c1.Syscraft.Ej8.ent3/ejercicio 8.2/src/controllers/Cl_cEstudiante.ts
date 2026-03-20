import type { IEstudiante } from "../models/Cl_mEstudiante.js";
import Cl_mEstudiante from "../models/Cl_mEstudiante.js";
import vista from "../views/Cl_vEstudiante.js";

type Callback = (student: IEstudiante | null) => void;

export default class Cl_cEstudiante {
  private vista = new vista();
  callback: Callback;
  constructor({callback} : {callback: Callback}) {
    this.callback = callback;
    this.vista.htmlBtnGuardar.onclick = () => this.BtnGuardar();
    this.vista.htmlBtnCancelar.onclick = () => this.vista.limpiar();
  }
   
  mostrarVista(): void {
    this.vista.toggle();
  }
  
  BtnGuardar(): void {
    this.callback( new Cl_mEstudiante({
        peso: this.vista.peso,
        cedula: this.vista.cedula,
        notaFinal: this.vista.notaFinal
    }));
    this.vista.limpiar();
  }
  BtnCancelar(): void {
    this.callback(null);
    this.vista.toggle();
  }
}
