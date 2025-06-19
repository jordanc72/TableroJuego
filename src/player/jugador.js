class Jugador{
    constructor(){
        this.x=0;
        this.y=0;
        this.movs= 0;
    }
    registrarMovimiento(){
        this.movs++;
    }
    avanzar(){
        this.x++;
        this.registrarMovimiento();
    }
    retroceder(){
        this.x--;
        this.registrarMovimiento();
    }
    subir(){
        this.y++;
        this.registrarMovimiento();
    }
    bajar(){
        this.y--;
        this.registrarMovimiento();
    }
    estado(){
        return{x:this.x, y: this.y, movs: this.movs}
    }
}



module.exports= new Jugador()