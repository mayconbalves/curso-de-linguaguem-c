let hora = document.querySelector(".hora");
let minuto = document.querySelector(".minuto");
let segundo = document.querySelector(".segundo");
let botao = document.querySelector(".botaoIniciar").addEventListener("click", controlador);
let botaPause = document.querySelector(".botaoPause").addEventListener("click",pause);
let botaoReiniciar = document.querySelector(".botaoReiniciar").addEventListener("click", reiniciar);
let body = document.body;

let IntervalId = null;
let h = 0, 
m = 0,
s = 0;
body.onload = () => {
    hora.innerHTML = `0${h}`;
    minuto.innerHTML = `0${m}`;
    segundo.innerHTML = `0${s}`;
}

function pause(){
    clearInterval(IntervalId);
}
function controlador(){
    IntervalId = setInterval(relogio, 1000);
}
function relogio(){
   
  
    if(s < 10){
        segundo.innerHTML = `0${s}`;
    }else{
        segundo.innerHTML = `${s}`;
    }
    if (m < 10) {
        minuto.innerHTML = `0${m}`;
    } else {
        minuto.innerHTML = `${m}`;
    }

    if (h < 10) {
        hora.innerHTML = `0${h}`;
    } else {
        hora.innerHTML = `${h}`;   
    }
    if(s === 59){
        m++;
        s = 1;
        if(m === 60){
            h++;
            if(h === 24){
                h = 0;
                m = 0;
                s = 1;
            }
            else{

                s = 1;
                m = 0;
            }
            
        }
    }else{
        s++;
    }
   
}
// REINICIAR O RELOGIO
function reiniciar(){
    h = 0;
    m = 0;
    s = 0;
    hora.innerHTML = `0${h}`;
    minuto.innerHTML = `0${m}`;
    segundo.innerHTML = `0${s}`;
    clearInterval(IntervalId);
}

