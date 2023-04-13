var losneord= localStorage.getItem('losneord')||"";
function nyttlosenord(){
    var formulär = document.getElementById("login").elements.namedItem("losenord").value
    localStorage.setItem('losneord',losneord)
    losneord = formulär
    document.getElementById("losen").innerHTML = losneord;

    window.location.replace("loggain.html");



}
function loggainfunction(){
    
    var loginkey = document.getElementById("inlogningsfomulär").elements.namedItem("inlogning").value
    if(loginkey === losneord){
        window.location.replace("cookiecliker.html");
    }

}