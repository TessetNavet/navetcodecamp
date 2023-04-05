function nyText() {
  document.getElementById("rubrik").innerHTML = "sås";
}
function nyBild() {
  document.getElementById("bild").src =
    "data:image/jpeg;base64,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";
}
function bytTillbaka() {
  document.getElementById("bild").src =
    "data:image/jpeg;base64,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";
}

function plus1() {
  var nummer = document.getElementById("nummer").innerHTML;
  document.getElementById("nummer").innerHTML = Number(nummer) + 1;
  console.log(nummer);
}
