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

//hieronder versie 28.02.2022 van main

//Lijst met woorden.  
let woordenlijst = [
    "FILMQUIZ", "CYCLISCH", "CYCLISCH", "CHECKBOX", "PYTHISCH", "FILMQUIZ", "SKYBOXJE", "CHOWCHOW", "CRUCIFIX", "MYTHISCH", "CYSTISCH", "GRIZZLYS", "GYMCLUBS", "COPYSHOP", "CYCLISME", "HYMNISCH", "JAZZCLUB", "LYNCHWET", "PLAYBACK", "PYKNISCH", "ZICHZELF", "CYNISCHT", "HIPPIQUE", "CATCHYST", "BITCHYST", "QUIZZERS", "ATYPISCH", "BABYFACE", "HUILBABY", "SHOWBIZZ", "WHIZZKID", "XYLOLIET", "ZIJSCHIP", "ZWEMCLUB", "COPYCARD", "LUNCHBOX", "HOBBYKOK", "WIJKCHEF", "CYCLOPEN", "CYNISCHE", "FYSISCHE", "TYPISCHE", "SKYBOXEN", "CHEQUEJE", "CLIQUEJE", "CRYPTJES", "JAZZYSTE", "CYBORGJE", "CATCHYER", "QUIZZEND", "BITCHYER", "EXQUISER", "EXQUISTE", "ELYSISCH", "APPLIQUE", "BABYMELK", "BABYTIJD", "BOUWTYPE", "CITYBIKE", "CITYTRIP", "COMBOBOX", "COQUILLE", "CYCLAMEN", "CYCLOIDE", "DISKCOPY", "DYSLEXIE", "FLEXWERK", "HEBZUCHT", "HIPPISCH", "HOBBYIST", "JACQUARD", "JOYSTICK", "MYCELIUM", "PSYCHOOT", "PSYCHOSE", "RUGBYBAL", "WIJKHULP", "WYBERTJE", "XYLOFOON", "ZIJLICHT", "BABYHUID", "BABYFLES", "BABYZAAK", "FOTOQUIZ", "HOBBYMES", "LOBBYBAR", "PECHHULP", "WILDTYPE", "BIJBLIJF", "CHIQUERE", "GELYNCHT", "GEZWICHT", "JACQUETS", "LYRISCHE", "GEHOBBYD", "RECYCLET", "SIXPACKS", "CALLBOYS", "CITYBAGS", "WEKSCHUW", "DIZZYSTE", "LOBBYTJE", "CLIMAXJE", "SUFFIXJE", "BUGGYTJE", "WHISKEYS", "SHABBYST", "HICKORYS", "BABYBOOM", "BABYDOLL", "BICONVEX", "BODYMILK", "CHEMISCH", "CHOQUANT", "CLAQUEUR", "CUPMATCH", "DAVYLAMP", "EXEQUIEN", "FLEXIBEL", "GIFSCHIP", "GLYCEROL", "GLYPTIEK", "HALFVIJF", "IJSLOLLY", "JAZZCAFE", "JAZZROCK", "KOPSCHUW", "KWIKZALF", "LOBBYING", "LOBBYIST", "LYMFEVAT", "MYSTICUS", "POLYFORM", "POLYMORF", "RECYCLEN", "SCHIJFJE", "SCHUBBIG", "SYMBOLUM", "SYNTAXIS", "TYPEWERK", "VITZUCHT", "WIJNPIJP", "WINZUCHT", "ZELFHULP", "ZORGTYPE", "ZUIGPIJP", "ZWACHTEL", "ZEIKWIJF", "ACCUPACK", "BABYBOEK", "LACHKICK", "POWERBOX", "CLUBSHOW", "WIJNCLUB", "ROCKJAZZ", "BEZWIJKT", "BEZWIJMD", "BEZWIJMT", "BIJLICHT", "CELTYPES", "CHOQUEER", "COMPLEXE", "MAXWELLS", "VERZWIJG", "WEGBLIJF", "WEGWIJZE", "WELWIJZE", "ZWICHTTE", "BACKPACK", "GELOBBYD", "LIFTBOYS", "COCKNEYS", "BOMCHECK", "CYRILLES", "GWYNETHS", "JACUZZIS", "BABYTJES", "VAKJURYS", "PLAQUEJE", "HAPPYSTE", "QUILTJES", "WEGTYPES", "SHABBYER", "CHICKJES", "TRICKYST", "CALYPSOS", "LYNXOGEN", "FLASHYST", "CRAZYSTE", "AQUADUCT",
    "BABYGEUR", "BABYROOF", "BUIKZWAM", "CASHFLOW", "CELVOCHT", "CHIPCARD", "CHIPKNIP", "CHRYSANT", "COOLJAZZ", "CRAQUELE", "CULTISCH", "DACTYLUS", "DICHTBIJ", "EXOTISCH", "FILMCREW", "FILMISCH", "FOLKCLUB", "FRIGOBOX", "GALLOWAY", "GOLFCLUB", "HALFBACK", "HECTISCH", "HIGHBROW", "HIGHTECH", "HOCKEYER", "HOFJACHT", "HUIDTYPE", "JAMBISCH", "KATZWIJM", "KOFSCHIP", "LACHFILM", "LEUKOCYT", "LUCHTCEL", "LUCHTWEG", "LUCHTZAK", "MYCOLOOG", "OXYMORON", "PACHTHOF", "PECHLAMP", "PERSJURY", "PICKNICK", "PIJPWERK", "POLYGLOT", "PROFCLUB", "QUISLING", "SARDONYX", "SCHABBIG", "SCHIMPIG", "SCHWALBE", "SPELTYPE", "SYLLABUS", "VETZUCHT", "VIJFKAMP", "VIJFVLAK", "VISSCHUB", "VLAMPIJP", "VLUCHTIG", "WACHTRIJ", "WELLICHT", "WHIPLASH", "WIJKWERK", "WRIJFLAP", "WRIJFWAS", "ZEEZICHT", "ZEILCLUB", "ZELFBOUW", "ZINSTYPE", "ZWICHTEN", "ZWIJNJAK", "ZWILWRAT", "BABYMAIS", "GALZUCHT", "BABYFOTO", "LIMBISCH", "CASHBACK", "CLUBVLAG", "RAMPTYPE", "SCHUBVIS", "CLUBWERK", "WACHTHOK", "WACHTZIN", "WIJKZORG", "ZWAMVLOK", "ZWEMBRIL", "FRUITMIX", "GOLFPIJP", "PLICHTIG", "BABYBOND", "BOYSCOUT", "AFGETYPT", "AFVLUCHT", "BESCHIMP", "BIJVIJLT", "CALQUEER", "CYCLONEN", "EXCLAVES", "GEBOYCOT", "GLYCINES", "KWAKZALF", "LARYNXEN", "LYNCHTEN", "SCHRIJFT", "TOXISCHE", "VERZUCHT", "VLIJMPJE", "WEGSCHOP", "WICHTJES", "ZWERMPJE", "ZWIJMELT", "CHUTNEYS", "BABYSITS", "BODYBAGS", "FAIRWAYS", "GERUGBYD", "GEZWIJMD", "GYMZALEN", "HOCKEYDE", "SHIMMYDE", "TOXICUMS", "TYPECAST", "HYBRIDES", "ZUCHTJES", "GLYCOLEN", "KUMQUATS", "CHOCHMES", "PREQUELS", "WAXCOATS", "CRYSTALS", "JOAQUIMS", "JOCELYNS", "QUIRIJNS", "PLICHTJE", "ZIJWEGJE", "JURYTJES", "CELTYPEN", "WIPKIPJE", "CLICKJES", "HOBBYDEN", "HOBBYEND", "HYBRIDER", "CHECKJES", "VLUCHTJE", "ZIJZAKJE", "SYRINXEN", "SCHULPJE", "MYSTICAS", "PICKUPJE",
];
//shuffle the array
function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  shuffleArray(woordenlijst);
  console.log(woordenlijst);

//woordnr variable om het volgende woord te pakken
let woordnr = 0;

//begin nieuw woord
let woord = woordenlijst[woordnr];
woord = woord.toLowerCase();
let oplossing = [" ", " ", " ", " ", " ", " ", " ", " "];
let btnReset = document.querySelector('#b2');
let antwoord = document.getElementById("antwoord");

let letterNR = 0;
function initLetterButton(id, idx) {
    let btn = document.querySelector("#" + id); 
    btn.innerHTML = woord[idx]; 
    btn.onclick = function (evt) { 
        let element = evt.target;
        if (letterNR < 8) {
            oplossing[letterNR++] = element.innerText;
        } else {
            let oplossingWoord = oplossing.join("");
            if (woord == oplossingWoord) {
                console.warn("Yeah!", oplossingWoord, woord);
                woordnr++;
                // UITDAGING: Hoe verder met +1 in een loop
            }
        }
        console.log(woordnr, letterNR, oplossing);
        antwoord.innerHTML = oplossing.join("");
    };
}
console.log(woordnr);
//Combinatie op basis van start a1, c2,a3,b1,c3,a2,c1,b3
initLetterButton("a1", 0);
initLetterButton("a2", 5);
initLetterButton("a3", 2);
initLetterButton("b1", 3);
initLetterButton("b3", 7);
initLetterButton("c1", 6);
initLetterButton("c2", 1);
initLetterButton("c3", 4);

document.querySelector('#b2').onclick = (evt) => {
    //als de reset knop word ingedrukt dan print lege string.
    oplossing = [" ", " ", " ", " ", " ", " ", " ", " "];
    antwoord.innerHTML = oplossing.join("");
};
// eind woord


