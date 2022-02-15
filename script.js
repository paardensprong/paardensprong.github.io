//woordenlijst
let woordenlijst = [
    ["a", "p", "e", "n", "r", "o", "t", "s"],
    ["u", "i", "l", "e", "n", "v", "e", "l"],
    ["m", "i", "n", "i", "c", "u", "b", "e"]

];
// loop om het volgede woord up te daten als het antwoord goed is.
// for (let i = 0, i < 8; i++){
//    console.log(woord[i]);
// }

//woord uit de woordenlijst
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


let btna1 = document.querySelector('#a1');
let btna2 = document.querySelector('#a2');
let btna3 = document.querySelector('#a3');

let btnb1 = document.querySelector('#b1');
let btnReset = document.querySelector('#b2');
let btnb3 = document.querySelector('#b3');

let btnc1 = document.querySelector('#c1');
let btnc2 = document.querySelector('#c2');
let btnc3 = document.querySelector('#c3');

btna1.innerHTML = lettera1;
btna2.innerHTML = lettera2;
btna3.innerHTML = lettera3;
btnb1.innerHTML = letterb1;
//btnReset is de eenhoorn knop word reset knop//
btnb3.innerHTML = letterb3;
btnc1.innerHTML = letterc1;
btnc2.innerHTML = letterc2;
btnc3.innerHTML = letterc3;

// verander de kleur in 1 functie ipv. meerdere

//kopie de letter in 1 functie ipv. meerdere

//maak kopie knop om woord te checken. 
btna1.addEventListener('click', () => {
    btna1.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${lettera1}</button>`;
})

btna2.addEventListener('click', () => {
    btna2.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${lettera2}</button>`;
})

btna3.addEventListener('click', () => {
    btna3.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${lettera3}</button>`;
})

btnb1.addEventListener('click', () => {
    btnb1.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${letterb1}</button>`;
})

btnb3.addEventListener('click', () => {
    btnb3.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${letterb3}</button>`;
})

btnc1.addEventListener('click', () => {
    btnc1.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${letterc1}</button>`;
})

btnc2.addEventListener('click', () => {
    btnc2.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${letterc2}</button>`;
})

btnc3.addEventListener('click', () => {
    btnc3.style.backgroundColor = '#F2F658'; 
    checkContainer.innerHTML = `<button>${letterc3}</button>`;
})



btna2.addEventListener('click', () => btna2.style.backgroundColor = '#F2F658')
btna3.addEventListener('click', () => btna3.style.backgroundColor = '#F2F658')

btnb1.addEventListener('click', () => btnb1.style.backgroundColor = '#F2F658')
btnb3.addEventListener('click', () => btnb3.style.backgroundColor = '#F2F658')

btnc1.addEventListener('click', () => btnc1.style.backgroundColor = '#F2F658')
btnc2.addEventListener('click', () => btnc2.style.backgroundColor = '#F2F658')
btnc3.addEventListener('click', () => btnc3.style.backgroundColor = '#F2F658')

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


btna1.addEventListener('click', () => console.log('test'))