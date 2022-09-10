
//Goku Attack
addEventListener("keyup",event=>{
    if(event.keyCode == 90){
        disparo=true
    }
})

//Start
start.onclick=(e)=>{
    if  (inicio.style.display="flex"){
            inicio.style.display="none"
        }
    menu_villanos.style.display="flex"
}

keep_F.onclick=(e)=>{
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    game_O.style.display="none"
}
go.onclick=(e)=>{
    if(unlock_electro==true){
        cell_button.style.visibility="visible"
    }
    if(unlock_kraven==true){
        buu_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    you_W.style.display="none"
    spider.life=30
    vegeta_V.life=20
    cell_V.life=22
    buu_V.life=25
    spider2.life=30
    spider2.height=0
    spider2.width=0;
    edificios.y=-canvas.height
    balas.splice(0,balas.length)
    player1.style.display="none"
    player2.style.display="none"
    game_O.style.display="none"
   
}

winb.onclick=(e)=>{
    if(unlock_electro==true){
        cell_button.style.visibility="visible"
    }
    menu_villanos.style.display="flex"
    canvas_C.style.display="none"
    win.style.display="none"
    you_W.style.visibility="none"
    edificios.y=-canvas.height
    player1.style.display="none"
    player2.style.display="none"
    game_O.style.display="none"

}