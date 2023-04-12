
var pengar = 0;
var pengarPerClick = 1;
var upgraderakostnad = 20
var extrakostnad = 1
var knapp = document.getElementById("knapp")
var html = document.getElementById("pengar");
document.getElementById('bild').setAttribute('draggable', false);

html.innerHTML = "pengar: 0"
knapp.innerHTML = pengarPerClick*2+ " på varje click. Pris: "+ upgraderakostnad * extrakostnad 

function plus(){
    pengar = pengar + pengarPerClick;

    html.innerHTML = "pengar: " + pengar;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function upgradera(){
    var html = document.getElementById("pengar");

    var harInteRåd = document.getElementById("inteRåd")
    
    if (pengar > upgraderakostnad*extrakostnad){
        pengarPerClick = pengarPerClick * 2
        html.innerHTML = pengar - upgraderakostnad
        pengar = pengar - upgraderakostnad*extrakostnad
        
        upgraderakostnad = upgraderakostnad * (2 + extrakostnad)
        extrakostnad = extrakostnad + 1 
        knapp.innerHTML = pengarPerClick*2 + " två på varje click. Pris: "+ upgraderakostnad * extrakostnad 
    }
    else{
    harInteRåd.innerHTML = "har inte råd"
    await sleep(2000);
    harInteRåd.innerHTML = ""


    
}

}

















function bytfarg(){

    var tecken = "0123456789ABCDEF"
    var färg = "#"
    for (let i = 0; i < 6; i++) {
        färg = färg + tecken[Math.floor(Math.random() * 16)]
        
    }
    
    document.body.style.backgroundColor = färg 
    

}




function nyttnamn(){
    var formulär = document.getElementById("formulär").elements.namedItem("input").value
    var namn = document.getElementById("namn").innerHTML = formulär

} 