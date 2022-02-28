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

    //woord variable om het volgende woord te pakken
    let woord = woordenlijst [0];
    woord = woord.toLowerCase();
    //verklaar de buttons als variabelen
    let btna1 = document.querySelector('#a1'); 
    let btna2 = document.querySelector('#a2');
    let btna3 = document.querySelector('#a3');
    
    let btnb1 = document.querySelector('#b1');
    let btnReset = document.querySelector('#b2');
    let btnb3 = document.querySelector('#b3');

    let btnc1 = document.querySelector('#c1');
    let btnc2 = document.querySelector('#c2');
    let btnc3 = document.querySelector('#c3');

    //Vul de buttons met letters op basis van : start a1, c2,a3,b1,c3,a2,c1,b3  toLowerCase ()
    btna1.innerHTML = woord [0];
    btna2.innerHTML = woord [5];
    btna3.innerHTML = woord [2];

    btnb1.innerHTML = woord [3];
    btnb3.innerHTML = woord [7];

    btnc1.innerHTML = woord [6];
    btnc2.innerHTML = woord [1];
    btnc3.innerHTML = woord [4];

    //functie om de woorden in de buttons te vullen, voor a1 b1 en c1. Maar dat mag later.

    //Functie om de letters in het resultaat vakje te printen. 


    //aparte functie om het woord te controleren misschien?
        //verklaar de variabelen
    resultaat = ["t","e","s","t","i","n","g","!"];
    oplossing = document.querySelector('oplossing').innerhtml = resultaat;
    
    oplossing.innerHTML = resultaat; 
    console.log(resultaat);