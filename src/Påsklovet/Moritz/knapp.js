var bildnummer = 0;

function bytbild(){ 
    const bilder = ["https://www.si.com/.image/t_share/MTk2MjIyOTM1MjQzOTU3NTUy/230039-test-bahrain-day-31.jpg.png", 
    "https://s7g10.scene7.com/is/image/ktm/%C2%A9PhilipPlatzer_X-Bow-Shooting2-1:XLarge?wid=1890&hei=1080&dpr=off",
    "https://www.dailysportscar.com/wp-content/uploads/2023/04/World-Challenge-Australia-Bathurst-Start-2023.jpg"
    ]
    for (let i = 0; i < bilder.length; i++) {
        
        document.body.style.backgroundImage = `url(${bilder[bildnummer]})`;
        bildnummer++;
        if (bildnummer > 3){
            bildnummer = 0; 
        }

    }
    
    
}