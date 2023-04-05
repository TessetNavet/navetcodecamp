function randomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
}

function toggleCode(id) {
  var codeBlock = document.getElementById(id);

  codeBlock.classList.toggle("show");
  codeBlock.classList.toggle("hide");
}

var bildIndex = 1;
function bytBild() {
  var bild = document.getElementById("minBild");
  bildIndex++;
  if (bildIndex > 5) {
    bildIndex = 1;
  }
  bild.src = "bilder/bild" + bildIndex + ".jpg";
}

var clicks = 0;
var timerId;

function countClicks() {
  clicks++;
  document.getElementById("clickCount").innerHTML = clicks;

  if (!timerId) {
    var timeLeft = 10; // 5 sekunder
    document.getElementById("timeRemaining").innerHTML = timeLeft;

    timerId = setInterval(function () {
      timeLeft--;
      document.getElementById("timeRemaining").innerHTML = timeLeft;

      if (timeLeft == 0) {
        if (document.getElementById("result").innerHTML < clicks) {
          document.getElementById("result").innerHTML = clicks;
        }
        resetClicks();
      }
    }, 1000); // 1000 ms = 1 sekund
  }
}

function resetClicks() {
  clicks = 0;
  document.getElementById("clickCount").innerHTML = clicks;
  clearInterval(timerId);
  timerId = null;
  document.getElementById("timeRemaining").innerHTML = "-";
}
