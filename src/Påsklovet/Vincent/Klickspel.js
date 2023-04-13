var AntalKlickaderutor = 1
var TitelKlickadeRutor = document.getElementById('TitelKlick')

function RandomPosition() {
    var Knappen = document.getElementById('KlickKnapp')
    Knappen.innerHTML = StyleSheet=AntalKlickaderutor
    TitelKlickadeRutor.innerHTML = "Antal klickade rutor: " + AntalKlickaderutor;
    AntalKlickaderutor = AntalKlickaderutor + 1
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    Knappen.style.left = j+"px";
    Knappen.style.top = i+"px";
    var tecken = "0123456789ABCDEF";
    var färg = "#";
    var Fonten = 'Times New Roman', Times, serif;
    for (var i = 0; i < 6; i++) {
      färg += tecken[Math.floor(Math.random() * 16)];
    }
    Knappen.style.backgroundColor = färg;
    Knappen.style.height = "100px";
    Knappen.style.width = "100px";
    Knappen.style.color = "#FFFFFF";
    Knappen.style.font = Fonten;
    Knappen.style.fontSize = "40px";
    console.log("Runned")
}