//woordenlijst
let woordenlijst = [
    ["a", "p", "e", "n", "r", "o", "t", "s"],
    ["u", "i", "l", "e", "n", "v", "e", "l"],
    ["m", "i", "n", "i", "c", "u", "b", "e"],
    ["v", "o", "o", "r", "j", "a", "a", "r"],
    ["s", "i", "t", "u", "a", "t", "i", "e"]
];

// loop om het volgede woord up te daten als het antwoord goed is.
// for (let i = 0, i < 8; i++){
//    console.log(woord[i]);
// }

//woord uit de woordenlijst,
let woord = woordenlijst[1];

//letter uit woordenlijst
//start op a1, c2,a3,b1,c3,a2,c1,b3
let lettera1 = woord[0];
let lettera2 = woord[5];
let lettera3 = woord[2];
let letterb1 = woord[3];
// dit is de reset knop let letterb2 = 
let letterb3 = woord[7];
let letterc1 = woord[6];
let letterc2 = woord[1];
let letterc3 = woord[4];


//controleren of de woorden gelijk zijn. 

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

//Doe de letters in de container buttons: 
btna1.innerHTML = lettera1;
btna2.innerHTML = lettera2;
btna3.innerHTML = lettera3;
btnb1.innerHTML = letterb1;
btnb3.innerHTML = letterb3;
btnc1.innerHTML = letterc1;
btnc2.innerHTML = letterc2;
btnc3.innerHTML = letterc3;

//functie om het antwoord te kopieren. 
let result = document.querySelector('h1');

document.addEventListener('click', () => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        h1.innerText = `${element.id}: ${element.innerText}`;
    }
});

// verander de kleur in 1 functie ipv. meerdere
//btn.addEventListener ---en hier de zelf gemaakte functie die de kleur veranderd. --

//kopie de letter in 1 functie ipv. meerdere

//maak kopie knop om woord te checken. 
btna1.addEventListener('click', () => {
    btna1.style.backgroundColor = '#F987BE'; 
    btna1.addEventListener('click', () => console.log(a1))
})

btna2.addEventListener('click', () => {
    btna2.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${lettera2}</button>`;
    btna2.addEventListener('click', () => console.log(a2))
})

btna3.addEventListener('click', () => {
    btna3.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${lettera3}</button>`;
    btna3.addEventListener('click', () => console.log(a3))
})

btnb1.addEventListener('click', () => {
    btnb1.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${letterb1}</button>`;
    btnb1.addEventListener('click', () => console.log(b1))
})

btnb3.addEventListener('click', () => {
    btnb3.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${letterb3}</button>`;
    btnb3.addEventListener('click', () => console.log(b3))
})

btnc1.addEventListener('click', () => {
    btnc1.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${letterc1}</button>`;
    btnc1.addEventListener('click', () => console.log(c1))
})

btnc2.addEventListener('click', () => {
    btnc2.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${letterc2}</button>`;
    btnc2.addEventListener('click', () => console.log(c2))
})

btnc3.addEventListener('click', () => {
    btnc3.style.backgroundColor = '#F987BE'; 
    checkContainer.innerHTML = `<button>${letterc3}</button>`;
    btnc3.addEventListener('click', () => console.log(c3))
})


//reset knop voor kleur. En dan nog reset voor buttons toevoegen.
btnReset.addEventListener('click', () => {
    btna1.style.backgroundColor = '#F658A4';
    btna2.style.backgroundColor = '#F658A4';
    btna3.style.backgroundColor = '#F658A4';
    btnb1.style.backgroundColor = '#F658A4';
    btnb3.style.backgroundColor = '#F658A4';
    btnc1.style.backgroundColor = '#F658A4';
    btnc2.style.backgroundColor = '#F658A4';
    btnc3.style.backgroundColor = '#F658A4';
}
)
//de functie voor welke knop word er gedrukt en doe dan dit of dat. 
let antwoord = document.querySelector('h1');

document.addEventListener('click', (e) => {
    let element = e.target;
    if(element.tagName == "BUTTON"){
        antwoord.innerText = `${element.innerText}`;
    }
    //als de reset knop word ingedrukt dan print lege string.
    else antwoord.innerHTML = " ";
});
