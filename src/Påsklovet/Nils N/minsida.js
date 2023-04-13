function nyText() {
    document.getElementById('NamnNils').innerHTML='Nils Norén';
}
function bytBild() {
    document.getElementById('HobbyParkourbild').src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VC7EQ3ePn5QAl-b56tBBwBdSjToHDXMCrQ&usqp=CAU";
}
  
function byttillbakabilden() {
    document.getElementById ('HobbyParkourbild').src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTbCxK4AqElNr2vPzOCbwLRa7c17lPjhRFdAe3swlFUzsBNNGaV"
}

function slumpaFärg() {
    var tecken = "0123456789ABCDEF";
    var färg = "#";
    for (var i = 0; i < 6; i++) {
      färg += tecken[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = färg;
  }

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
      






    