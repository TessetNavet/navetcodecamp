var KNAPP = document.getElementById("minknapp");

function  slumpaFärg() {
    var tecken = "0123456789ABCDEF";
    var färg = "#";
    for (var i = 0; i < 6; i++) {
      färg += tecken[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = färg;
  }