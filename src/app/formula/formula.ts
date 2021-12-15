export class formula{
    lon=0;
    calcular(f:number){
        this.lon=((f-32)*5)/9;
        return this.lon;
    }
}