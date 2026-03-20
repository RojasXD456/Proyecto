import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import Cl_vEmpresa from "../views/Cl_vEmpresa.js";
import Cl_cPersonas from "./Cl_cPersonas.js";
export default class Cl_cEmpresa {
    constructor() {
        this.mEmpresa = new Cl_mEmpresa();
        this.vEmpresa = new Cl_vEmpresa();
        this.vEmpresa.btProcesar1Persona.onclick = () => this.procesar1persona();
    }
    procesar1persona() {
        new Cl_cPersonas({
            callback: (personas) => {
                //  VERIFICAR que no sea null (cuando cancelan)
                if (personas !== null) {
                    this.mEmpresa.procesarPersonas(personas);
                    this.vEmpresa.reportar({
                        empresa: this.mEmpresa,
                        personas: personas
                    });
                }
                else {
                    console.log("Usuario canceló el ingreso de persona");
                }
            }
        });
    }
}
