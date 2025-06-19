const jugador= require("../player/jugador");
const tableroConsola = require("../tableros/tableroConsola");

const show = () => {
    const{x, y, movs} = jugador.estado();
    tableroConsola.actualizar({posX: x, posY: y, cantMovims: movs});
    console.log(jugador.estado())};

const keyActions = {
    left:() =>{
        jugador.retroceder();
        show();
    },
    right:() =>{
        jugador.avanzar();
        show();
    },
    down:() =>{
        jugador.bajar();
        show();
    },
    up:() =>{
        jugador.subir();
        show();
    },
    q:()=> {
        console.log("Saliendo del programa...");
        process.exit();
    }
}

module.exports = keyActions;