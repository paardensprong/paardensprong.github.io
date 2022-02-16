// verklaar variabel als array. Woordenlijst. (Per woord)
let woordenlijst = [
    ["a", "p", "e", "n", "r", "o", "t", "s"],
    ["u", "i", "l", "e", "n", "v", "e", "l"],
    ["m", "i", "n", "i", "c", "u", "b", "e"],
    ["v", "o", "o", "r", "j", "a", "a", "r"],
    ["s", "i", "t", "u", "a", "t", "i", "e"]
];

//verklaar variabel als array, woord. (Per letter)
let woord = woordenlijst[1];

//verklaar de buttons als variablen. 
let btna1 = document.querySelector('#a1');
let btna2 = document.querySelector('#a2');
let btna3 = document.querySelector('#a3');
let btnb1 = document.querySelector('#b1');
let btnReset = document.querySelector('#b2');
let btnb3 = document.querySelector('#b3');
let btnc1 = document.querySelector('#c1');
let btnc2 = document.querySelector('#c2');
let btnc3 = document.querySelector('#c3');

//Pak de letter uit de woordenlijst. Combinatie op basis van start op a1. 
//a1, c2,a3,b1,c3,a2,c1,b3
let lettera1 = woord[0];
let lettera2 = woord[5];
let lettera3 = woord[2];
let letterb1 = woord[3];
let letterb3 = woord[7];
let letterc1 = woord[6];
let letterc2 = woord[1];
let letterc3 = woord[4];

//Doe de letters in de container buttons: 
btna1.innerHTML = woord[0];
btna2.innerHTML = lettera2;
btna3.innerHTML = lettera3;
btnb1.innerHTML = letterb1;
btnb3.innerHTML = letterb3;
btnc1.innerHTML = letterc1;
btnc2.innerHTML = letterc2;
btnc3.innerHTML = letterc3;

//functie om het antwoord te kopieren. (event propagation)
let antwoord = document.querySelector('h1');

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        console.log(`${element.id}: ${element.innerText}`);
        antwoord.innerText = `${element.id}: ${element.innerText}`;
    }
    else antwoord.innerHTML = "testing";
});

//hier een functie om de strings aan elkaar te plakken.

//hier een functie om het woord te controleren

//hier een functie die feliciteert van goed zo en dan klinkt naar de volgende puzzel

//hier een functie voor de nieuwe puzzel en dan roteren via css 