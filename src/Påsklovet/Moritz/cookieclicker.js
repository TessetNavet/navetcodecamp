
var pengar = parseInt(localStorage.getItem('pengar'))||0;
var pengarPerClick = parseInt(localStorage.getItem('pengarperclick'))||1;
var uppgraderakostnad = parseInt(localStorage.getItem('uppgraderakostnad'))||20;
var extrakostnad = parseInt(localStorage.getItem('extrakostnad'))||1;
var knapp = document.getElementById("knapp")
var html = document.getElementById("pengar");
document.getElementById('bild').setAttribute('draggable', false);

html.innerHTML = "pengar: " + pengar
knapp.innerHTML = pengarPerClick*2+ " på varje click. Pris: "+ uppgraderakostnad * extrakostnad 

function plus(){
    pengar = pengar + pengarPerClick;

    html.innerHTML = "pengar: " + pengar;
    localStorage.setItem('pengar', pengar);

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function upgradera(){
    var html = document.getElementById("pengar");

    var harInteRåd = document.getElementById("inteRåd")
    
    if (pengar > uppgraderakostnad*extrakostnad){
        
        pengarPerClick = pengarPerClick * 2
        pengar = pengar - uppgraderakostnad*extrakostnad
        uppgraderakostnad = uppgraderakostnad * (2 + extrakostnad)
        extrakostnad = extrakostnad + 1 

        localStorage.setItem('pengarperclick',pengarPerClick)
        localStorage.setItem('uppgraderakostnad',uppgraderakostnad)
        localStorage.setItem('extrakostnad',extrakostnad)
        
        knapp.innerHTML = pengarPerClick*2 + " två på varje click. Pris: "+ (uppgraderakostnad * extrakostnad )
      
        html.innerHTML = pengar 
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