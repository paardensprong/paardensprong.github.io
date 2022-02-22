// verklaar variabel als array. Woordenlijst. (Per woord)
let woordenlijst = [
    ["a", "p", "e", "n", "r", "o", "t", "s"],
    ["u", "i", "l", "e", "n", "v", "e", "l"],
    ["m", "i", "n", "i", "c", "u", "b", "e"],
    ["v", "o", "o", "r", "j", "a", "a", "r"],
    ["s", "i", "t", "u", "a", "t", "i", "e"]
];

//verklaar variabel als array, woord. (Per letter)
let woord = woordenlijst[0];

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

//Pak de letter uit de woordenlijst, en doe ze in de container buttons. Combinatie op basis van start op a1. 
//Combinatie op basis van start a1, c2,a3,b1,c3,a2,c1,b3
btna1.innerHTML = woord[0];
btna2.innerHTML = woord[5];
btna3.innerHTML = woord[2];
btnb1.innerHTML = woord[3];
btnb3.innerHTML = woord[7];
btnc1.innerHTML = woord[6];
btnc2.innerHTML = woord[1];
btnc3.innerHTML = woord[4];

//combinatie op basis van start b1. B1,c3, a2,c1,b3,a1,c2
/*btna1.innerHTML = woord[0];
btna2.innerHTML = woord[2];
btna3.innerHTML = woord[2];
btnb1.innerHTML = woord[0];
btnb3.innerHTML = woord[3];
btnc1.innerHTML = woord[6];
btnc2.innerHTML = woord[1];
btnc3.innerHTML = woord[1]; */

//maak array voor het antwoord. 
let antwoord = document.querySelector('h1');

let oplossing = [" ", " ", " ", " ", " "," "," "," " ];

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        console.log(oplossing);
        oplossing.push(`${element.innerText}`);
        oplossing.shift();
        antwoord.innerHTML = oplossing.join('');
        }
    //als de reset knop word ingedrukt dan print lege string.
    else antwoord.innerHTML = " ",
    oplossing = [" ", " ", " ", " ", " "," "," "," " ];
});



//hier een functie om het woord te controleren


//if string == woord dan volgende stap.

//hier een functie die feliciteert van goed zo en dan klinkt naar de volgende puzzel

//hier een functie voor de nieuwe puzzel en dan roteren via css 