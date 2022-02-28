// bool voor loop
let correct = false
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

//begin nieuw woord
let woord = woordenlijst[0];
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
        testBreak: if (letterNR < 8) {
            oplossing[letterNR++] = element.innerText;
            break testBreak;   
        } 
            let oplossingWoord = oplossing.join("");
            if (woord == oplossingWoord) {
                console.warn("Yeah!", oplossingWoord, woord);
                return correct = true              
                // UITDAGING: Hoe verder met +1 in een loop
            }
        
        console.log(letterNR, oplossing);
        antwoord.innerHTML = oplossing.join("");
    };
}
console.log(correct);
do{
//Combinatie op basis van start a1, c2,a3,b1,c3,a2,c1,b3
initLetterButton("a1", 0);
initLetterButton("a2", 5);
initLetterButton("a3", 2);
initLetterButton("b1", 3);
initLetterButton("b3", 7);
initLetterButton("c1", 6);
initLetterButton("c2", 1);
initLetterButton("c3", 4);
}
while(correct = false);
//dit is geen
document.querySelector('#b2').onclick = (evt) => {
    //als de reset knop word ingedrukt dan print lege string.
    oplossing = ["t", "r", "y", "a", "g", "a", "i","n"];
    antwoord.innerHTML = oplossing.join("");
};
//Op basis van b1, c3, a2, c1, b3, a1, c2, a3for 
initLetterButton("a1", 5);
initLetterButton("a2", 2);
initLetterButton("a3", 7);
initLetterButton("b1", 0);
initLetterButton("b3", 4);
initLetterButton("c1", 3);
initLetterButton("c2", 6);
initLetterButton("c3", 1);

// eind woord

