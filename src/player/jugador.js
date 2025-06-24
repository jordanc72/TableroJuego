class Jugador{
    static FILAS = 10;
    static COLUMNAS = 10;

    constructor(){
        this.x=0;
        this.y=0;
        this.movs= 0;
    }
    registrarMovimiento(){
        this.movs++;
    }


    avanzar(){
        if(this.x==Jugador.COLUMNAS-1){
            this.x = 0;
        }
        else{
            this.x++;
        }
        
        this.registrarMovimiento();
    }
    retroceder(){
        if(this.x== 0){
            this.x = Jugador.FILAS-1;
        }
        else{
            this.x--;
        }
        
        this.registrarMovimiento();
    }
    subir(){
        if(this.y==Jugador.FILAS-1){
            this.y = 0;
        }
        else{
            this.y++;
        }
        this.registrarMovimiento();
    }
    bajar(){
        if(this.y== 0){
            this.y = Jugador.FILAS-1;
        }
        else{
            this.y--;
        }
        this.registrarMovimiento();
    }
    estado(){
        return{x:this.x, y: this.y, movs: this.movs}
    }
}



module.exports= new Jugador()