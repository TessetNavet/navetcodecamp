function toggleCode(id) {
  var codeBlock = document.getElementById(id);

  codeBlock.classList.toggle("show");
  codeBlock.classList.toggle("hide");
}

//Kort 1, byter färg på bakgrunden
function slumpaFärg() {
  var tecken = "0123456789ABCDEF";
  var färg = "#";
  for (var i = 0; i < 6; i++) {
    färg += tecken[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = färg;
}

//Kort 2, byter bilden när man klickar
var bildIndex = 1;
function bytBild() {
  var bild = document.getElementById("minBild");
  bildIndex++;
  if (bildIndex > 5) {
    bildIndex = 1;
  }
  bild.src = "bilder/bild" + bildIndex + ".jpg";
}

//Kort 3, räknar antalet klick på 10 sekunder
var klick = 0;
var timerId;

function räknaKlick() {
  klick++;
  document.getElementById("clickCount").innerHTML = klick;

  if (!timerId) {
    var tidKvar = 10; // 5 sekunder
    document.getElementById("timeRemaining").innerHTML = tidKvar;

    timerId = setInterval(function () {
      tidKvar--;
      document.getElementById("timeRemaining").innerHTML = tidKvar;

      if (tidKvar == 0) {
        if (document.getElementById("result").innerHTML < klick) {
          document.getElementById("result").innerHTML = klick;
        }
        nollställKlick();
      }
    }, 1000); // 1000 ms = 1 sekund
  }
}

function nollställKlick() {
  klick = 0;
  document.getElementById("clickCount").innerHTML = klick;
  clearInterval(timerId);
  timerId = null;
  document.getElementById("timeRemaining").innerHTML = "-";
}

function ändraRubrik() {
  var input = document
    .getElementById("mittFormulär")
    .elements.namedItem("rubrikFält").value;

    if (input){

    
  document.getElementById("minRubrik").innerHTML = input;
    }
}
