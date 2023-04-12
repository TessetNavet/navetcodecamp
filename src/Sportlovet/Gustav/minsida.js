var bild=document.getElementById("start_sida_bild");
var rubrik=document.getElementById("start_sida_rubrik");


function ändra_sida(){
    if(rubrik.innerHTML=="Min snacks afär"){
        rubrik.innerHTML= "min sida om sälar";
        bild.src = "https://imengine.gota.infomaker.io/?uuid=43e2d2c4-199a-56c3-83fc-d82ac1d6b30e&width=960&height=640&type=preview&source=false&q=90&z=100&x=0.026&y=0.000&crop_w=0.948&crop_h=1.000&function=cropresize";
    }
    else{

        rubrik.innerHTML="Min snacks afär";
        bild.src = "https://www.idg.se/editorial/980/path/1.685584.1499078616!imageUploader/1547797947.jpg";
    }
}

var totalprice=0;
