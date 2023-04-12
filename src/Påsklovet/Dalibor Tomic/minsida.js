function nyText() {
    document.getElementById('rubrik2').innerHTML = 'Jag heter Kalle.';
    }
function bytBild() {
    document.getElementById("minBild").src = 'https://static.wikia.nocookie.net/gensin-impact/images/f/fd/Character_Qiqi_Full_Wish.png/revision/latest?cb=20220507110008';
    }
function nyBild() {
    document.getElementById("minBild").src = 'https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc'
    }
function slumpaFärg() {
    var tecken = "0123456789ABCDEF";
    var färg = "#";
    for (var i = 0; i < 6; i++) {
        färg += tecken[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = färg;
    }

    var bildIndex = 1;
function bytBild2(){
    var bild = document.getElementById("minBildigen");
            bildIndex++;
            if (bildIndex > 33) {
              bildIndex = 1;
            }
            bild.src = "memes/bild" + bildIndex + ".jpeg";
            slumpaKnappFärg()
}
function slumpaKnappFärg() {
    var knapp = document.getElementById("mkid");
    var tecken = "0123456789ABCDEF";
    var färg = "#";
    for (var i = 0; i < 6; i++) {
      färg += tecken[Math.floor(Math.random() * 16)];
    }
    knapp.style.backgroundColor = färg;
  }
            