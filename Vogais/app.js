//  DADO UM TEXTO INSERIDO NA CAIXA DE TEXTO
//  O PROGRAMA VAI CONTAR QUANTAS VOGAIS 
//  FORAM LIDAS

let button = document.querySelector(".button")
let inputContent = document.getElementById("texto");
button.addEventListener("click", function(Event){
    // VARIAVEL PARA CONTAR VOGAIS
    let countVowel = 0;
    let char = (inputContent.value).toUpperCase();
    Event.preventDefault()
  
    
    for(let i = 0; i < char.length; i++){

        if(char[i] === "A" || char[i] === "E" || char[i] === "I" || char[i] == "O" || char[i] === "U"){
            countVowel++;
        }
    }
    alert(`There are ${countVowel} vowels`);
})