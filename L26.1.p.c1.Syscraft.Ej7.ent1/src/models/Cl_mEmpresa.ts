import Cl_mPersonas from "./Cl_mPersonas"


export default class Cl_mEmpresa {
    private totalMontoAdicional: number = 0; 
    private acPersObrero : number = 0;
    private acPersAdministrativo: number = 0;
    private acTotalPers: number = 0;
    private contSueldoObr: number = 0;
    private contSueldoAdmin: number = 0;
    private mayorSueldoObrero: number = 0;
    private mayorSueldoAdmin: number = 0;
    

            procesarPersonas(p: Cl_mPersonas): void{
            this.acTotalPers ++;

            if (p.tipo === 1){
                this.acPersObrero  ++;
                this.contSueldoObr += p.sueldo;

                const pagoActualObr = p.sueldo
            if (pagoActualObr > this.mayorSueldoObrero){
                this.mayorSueldoObrero = pagoActualObr;
            }
            } else{
                if (p.tipo === 2){
                    this.acPersAdministrativo++;
                    this.contSueldoAdmin += p.sueldo;

             const pagoActualAdmin = p.sueldo;
            if (pagoActualAdmin > this.mayorSueldoAdmin){
                this.mayorSueldoAdmin = pagoActualAdmin;
            }
                }
            }
            

           

            this.totalMontoAdicional += p.calcularAumento();
            
        }
        porcentajePersonalObrero(){
            if (this.acTotalPers === 0){
                return 0
            } else{
                return ((this.acPersObrero / this.acTotalPers)*100)
            }
        }
        porcentajePersonalAdminis(){
            if (this.acTotalPers === 0){
                return 0
            } else{
                return ((this.acPersAdministrativo / this.acTotalPers)*100 )
            }
        }





        

       get totalMonto(): number {
        return this.totalMontoAdicional;
       }

        get obtenerMayorSueldoObrero(): number {
        return this.mayorSueldoObrero;
       }

        get obtenerMayorSueldoAdmin(): number {
        return this.mayorSueldoAdmin;
       }
}



