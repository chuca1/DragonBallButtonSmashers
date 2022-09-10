function crearkiBueno(){
    if(disparo==true){
        kiBuenos[0].x += 12;
        kiBuenos[0].y -= 12;
        kiBuenos2[0].x += 12;
        kiBuenos2[0].y -= 12;
        disparo=false
    }
}

function piumpium(){
    kiBuenos[0].draw();
    kiBuenos2[0].draw();
} 

  function malo_malo(tipo){
    tipo.height=300
    tipo.width=300
    tipo.draw()
  }