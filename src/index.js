const keypress = require('keypress');
const keyActions = require('./teclado/teclas.js')

keypress(process.stdin);

process.stdin.on('keypress', (_,key)=>{
    if(key && keyActions[key.name]){
        keyActions[key.name]();
    }
});

process.stdin.setRawMode(true);
process.stdin.resume();

console.log("Funciona")