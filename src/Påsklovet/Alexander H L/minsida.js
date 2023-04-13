function nyText() {
    document.getElementById('rubrik2').innerHTML = 'Jag heter Kalle.';
}

function nyBild() {
    document.getElementById('minbild').src ='https://images.unsplash.com/photo-1618800122894-55ac40ddb0dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwc3Vuc2V0fGVufDB8fDB8fA%3D%3D&w=1000&q=80'
}

function nybytBild() {
    document.getElementById('minbild').src = 'https://storage.googleapis.com/pod_public/1300/122734.jpg';
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
