let aktivBildIndex = 0;
const bildsnurra = document.querySelector(".bildsnurra");
const bilder = Array.from(bildsnurra.querySelectorAll("img"));

function bytBild() {
    console.log("Byt bild körs.");
  bilder[aktivBildIndex].classList.remove("aktiv");
  aktivBildIndex = (aktivBildIndex + 1) % bilder.length;
  bilder[aktivBildIndex].classList.add("aktiv");
}

function nyText() {
    document.getElementById('rubrik2').innerHTML = 'Jag heter Benny.';
}

/* function bytBild() {
    document.getElementById("bild1").src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S1_2560x1440-ee500721c06da3ec1e5535a88588c77f"
} */

//setInterval(bytBild, 3000);