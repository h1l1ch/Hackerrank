/*
HACKERRANK problem.
Title: "String Construction"
Difficulty: "Easy".
Link: https://www.hackerrank.com/challenges/string-construction/problem

The code is fully functional and passed 100% tests.
To test it you have two options:
    Option 1: Launch given code only passing your own "array" value.
    Option 2: Copy&Paste code on Hackerrank to make sure it works.
*/ 

function stringConstruction(s) {
    
    let cost = 0;

    s.split(``).map((x,i) => { // Map through an array of characters.
        if (s.indexOf(s.charAt(i)) === i) {  // Compare indexes. First time using charAr() method, which returns a character under specified index.
            cost++; // If the closest element which is identical to the iterating element is the element itself => cost is incremented.
        } 
        return;
    })
    
    console.log(cost);
    return cost;
};


const string = `obgtmuvrmbobvngeirabdienmrdljmobrnmmbudqdcpqmudrojngsidsscmesuerldmqpvmfroalitjfluihmcptkeqvmnqpnubgujgiinbhpalisiconatmuahpikevvllouocaanmjrsbticrhbchebededplcajqismnmqkttcoohdifljshiufncdkflbbeaqjskrqogmqrkmhatmkcttpmqhtdmmmvispkakoecddioldbpjcadplieqvpgogikvikepajtrcsqhmgnguuevosgludqvlnetkkojepuprnpvjqekoprhlepibnesefdempqlpqfsrlvnmeimdbpedlcdoekkftuunenutkjrerdhjltebfsfdnbqoatsnaecrntkvaofiqnptkiurcjledesdugfmgosdmdvjceedcsrrfiorfjulcigbrllrkfmdikvcckurhdlvbtsapisrqihcalfmobbvvgjeolppvskfkhdihglvdjnitlvqbvbicejgqhfjebauurjsjgkqgqttffakuvqiusftdogignjshrtdahtaoaetglrtlphskuechdajqjubgbtvejaudfaiooaktgccaqlirmomefigvklofagsgbhqjjkitgncjokcegosleflbfmopfkjovjhvgsobudibmgfvbclprkrrouvrjhnnqgntnnhlmqcageubdflqisnmbnlnklridtpfnfurgikqotaenjsufqsrdtkbfjqulsbavlgnnkrgckericfrrogeg`;
stringConstruction(string);