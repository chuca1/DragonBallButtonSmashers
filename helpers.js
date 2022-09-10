function crearTelaraña(){
    if(disparo==true){
        telarañas[0].x += 12;
        telarañas[0].y -= 12;
        telarañas2[0].x += 12;
        telarañas2[0].y -= 12;
        disparo=false
    }
}

function piumpium(){
    telarañas[0].draw();
    telarañas2[0].draw();
} 

  function malo_malo(tipo){
    tipo.height=300
    tipo.width=300
    tipo.draw()
  }