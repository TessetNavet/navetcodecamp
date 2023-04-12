var Password = "Hej123Fotboll"
var FelRuta = document.getElementById('Fel')


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function LoggaIn() {
    var input = document.getElementById('InputRuta').value;
    console.log(input)
    console.log("Script runned")
if (input === Password) {
    console.log("Rätt lösenord")
    window.location.replace("AdminPanel.html");

}
else{
    console.log("Fel lösenord")
    FelRuta.innerHTML = "Fel Lösenord!";
    await sleep(1000);
    FelRuta.innerHTML = "";
}
}