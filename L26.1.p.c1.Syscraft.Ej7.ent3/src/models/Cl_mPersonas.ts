export default class Cl_mPersonas {
    private _nombre: string = ""
    private _tipo: number // 1 para obreros y 2 para administrativos
    private _sueldo: number = 0
    private _peso: number = 0

    constructor (nombre: string, tipo: number, sueldo: number, peso: number){
        this._nombre = nombre;
        this._tipo = tipo;
        this._sueldo = sueldo;
        this._peso = peso;
    }
    set nombre(nombre:string){
        this._nombre = nombre
    }
    get nombre(): string{
        return this._nombre;
    }
    set tipo(tipo: number){
        this._tipo = tipo;
    }
    get tipo(): number{
        return this._tipo;
    }
    set sueldo(sueldo: number){
        this._sueldo = sueldo;
    }
    get sueldo(): number{
        return this._sueldo;
    }
    set peso (peso:number){
        this._peso = peso;
    }
    get peso(): number{
        return this._peso;
    }



    calcularAumento():number{
        if (this.tipo == 1){
            return (this.sueldo * 0.20)
        } else{
            if (this.tipo == 2){
                return (this.sueldo * 0.10)
            } else {
                return 0
            }

    

}
    }
}
