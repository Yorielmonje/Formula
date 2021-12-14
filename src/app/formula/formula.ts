export class formula{
    lon=0;
    calcular(vel:number, fre:number){
        if(fre==0){
            return 0;
        }
        this.lon=vel/fre;
        return this.lon;
    }
}