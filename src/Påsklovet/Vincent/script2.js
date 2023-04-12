var bild11 = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/1200px-Tennis_Racket_and_Balls.jpg"
var bild12 = "https://assets.website-files.com/616fca7b4fdcccc4f4e617ba/617131f37b84717ef5c1eb4e_Tennis_Webb_racket-2048x1762.jpg"
var bild13 = "https://www.bnpparibas.se/app/uploads/sites/30/2022/07/tennis-ball-credits-yossarian6.jpeg"
var BILDID = document.getElementById('Bild1')
 

function bytBild() {

  if (BILDID.src === bild11) {

    BILDID.src = bild12;

  } else if (BILDID.src === bild12) {

    BILDID.src = bild13;

  } else {

    BILDID.src = bild11;

  }

  setTimeout(bytBild, 1000);

}

 

window.addEventListener("DOMContentLoaded", function() {

  BILDID.src = bild11;

  setTimeout(bytBild, 3000);

});
