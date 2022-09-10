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

function crearTelaraña2(){
    if(disparo2==true){
    let telaraña2= new Telaraña2(spider2)
    telarañas2.push(telaraña2)
    disparo2=false
    }
}
function piumpium2(){
    for(let i=0;i<telarañas2.length;i++){
       if(telarañas2[i].y < 0){
           telarañas2.splice(i,1)
       }
       telarañas2[i].draw()
    }
    telarañas2.map(telaraña2=>{
        telaraña2.draw()
        if(vidaSpiderman(telaraña2)==true){
            telarañas2.splice(telaraña2,1)
        }
    })
}

function crearBalas(){
    if(!(frames%100 === 0))return
    let bals=new Balas()
    
    balas.push(bals)
}
function vidaSpiderman(balass){
    if (spider.isTouching(balass)){
        spider.life--
        return true
    }
    if (spider.life<=0){
        clearInterval(interval)

    }
}
function vidaSpiderman2(balass){
    if (spider2.isTouching(balass)){
        spider2.life--
        return true
    }
    if (spider2.life<=0){
        clearInterval(interval)
    }
}

function valorx(){
    let valor = Math.floor(Math.random() * 130)
    if ( valor < 20){
        valorx()
    }
    return valor
  }
  function widthX(){
    valore = Math.floor(Math.random() * 110)
    if (valore > 100){
       return valore
    }
    return 100
  }

  

  function malo_malo(tipo){
    tipo.height=300
    tipo.width=300
    tipo.draw()
    for(let i = 0 ; i<telarañas.length;i++){
        if (tipo.isTouching(telarañas[i])){
            tipo.life--
        } 
    }
    if (spider.life<=0){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }
    else if (tipo.life<=0){
        explosiones.draw(tipo)
        gameOver()
        you_W.style.display="initial"
        you_W.style.position="absolute"
        return true
    }
    if(taki_taki<=60 && taki_taki>0){
        taki_taki-=1
        if(tipo==venom_V){
            if(spider.isTouching3(poder_malo)){
                spider.life-=3
                poder_malo=""
                taki_taki=0
            }
            if(spider.isTouching4(poder_malo)){
                spider.life-=3
                poder_malo=""
                taki_taki=0
            }
        }
        if(tipo==kraven_V){
            if(spider.isTouching2(poder_malo)){
                spider.life-=3
                poder_malo=""
                taki_taki=0
            }
        }
        else if(spider.isTouching(poder_malo)){
            spider.life-=3
            poder_malo=""
            taki_taki=0
        }
    }
    else{
        poder_malo=""
    }
  }
function gameOver(){
    clearInterval(interval)
    return true
}