/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto. */


const buttonPc = document.getElementById("pc-btn");
const buttonUser = document.getElementById("user-btn");
const outputPc = document.querySelector(".out-pc");
const outputUser = document.querySelector(".out-user");
const output = document.getElementById("out");


let pcNum = 0;
let userNum = 0;

buttonPc.addEventListener('click',

    function(){
        pcNum = Math.floor(Math.random()*6+1);

        /* se il numero del computer e maggiore di quello del giocatore */
        if (pcNum > userNum){
            /* stampa: ha vinto il PC */
            output.innerHTML=("Ha vinto il PC!!!");
        } else if (pcNum === userNum){
            output.innerHTML=("Incredibile PAREGGIO!!!, Tira dinuovo");
        } else {
            /* altrimenti */
            /* stampa: ha vinto il GIOCATORE */
            output.innerHTML=("Ha vinto il GIOCATORE!!!");
        }

        outputPc.innerHTML=(pcNum + ' ');
    }
)
buttonUser.addEventListener('click',

    function(){
        userNum = Math.floor(Math.random()*6+1);

        /* se il numero del computer e maggiore di quello del giocatore */
        if (pcNum > userNum){
            /* stampa: ha vinto il PC */
            output.innerHTML=("Ha vinto il PC!!!");
        } else if (pcNum === userNum){
            output.innerHTML=("Incredibile PAREGGIO!!!, Tira dinuovo");
        } else {
            /* altrimenti */
            /* stampa: ha vinto il GIOCATORE */
            output.innerHTML=("Ha vinto il GIOCATORE!!!");
        }

        outputUser.innerHTML=(userNum + ' ');

    }
)


