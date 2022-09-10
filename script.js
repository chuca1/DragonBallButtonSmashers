//Nivel de vegeta

vegeta_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    kiBuenos[0].x=canvas.width / 2 - 250;
    kiBuenos[0].y=canvas.height/ 2 - 100;
    kiBuenos2[0].x=canvas.width / 2 - 100;
    kiBuenos2[0].y=canvas.height/ 2 - 200;
    buu_V.width = 0;
    buu_V.height = 0;
    cell_V.width = 0;
    cell_V.height = 0;
    malo_malo(vegeta_V);
    startGame();
 

  function update(){
    frames++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    goku.draw();
    vegeta_V.draw();
    crearkiBueno();
    piumpium();

    if(frames% 15==0){
        kiBuenos[0].x -= 5;
        kiBuenos[0].y += 5;
        kiBuenos2[0].x -= 5;
        kiBuenos2[0].y += 5;
    }
    if(goku.isTouching(kiBuenos[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(kiBuenos2[0])) {
        clearInterval(interval)
        you_W.style.display="initial"
        you_W.style.position="absolute";
        //Desbloquear siguiente nivel
        unlock_cell=true;
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}

//Nivel de cell


cell_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    unlock_buu=malo_malo(cell_V)
    kiBuenos[0].x=canvas.width / 2 - 250;
    kiBuenos[0].y=canvas.height/ 2 - 100;
    kiBuenos2[0].x=canvas.width / 2 - 100;
    kiBuenos2[0].y=canvas.height/ 2 - 200;
    buu_V.width = 0;
    buu_V.height = 0;
    vegeta_V.width = 0;
    vegeta_V.height = 0;
    cell_V.x -= 50;
    startGame();
 

  function update(){
    frames++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    goku.draw();
    cell_V.draw();
    crearkiBueno();
    piumpium();

    if(frames% 10==0){
        kiBuenos[0].x -= 5;
        kiBuenos[0].y += 5;
        kiBuenos2[0].x -= 5;
        kiBuenos2[0].y += 5;
    }
    if(goku.isTouching(kiBuenos[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(kiBuenos2[0])) {
        clearInterval(interval)
        you_W.style.display="initial"
        you_W.style.position="absolute";
        unlock_buu = true;
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}

//Nivel de buu

buu_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    unlock_buu=malo_malo(buu_V)
    buu_V.x -= 10;
    buu_V.width -= 60;
    buu_V.height -= 60;
    cell_V.width = 0;
    cell_V.height = 0;
    vegeta_V.width = 0;
    vegeta_V.height = 0;
    kiBuenos[0].x=canvas.width / 2 - 250;
    kiBuenos[0].y=canvas.height/ 2 - 100;
    kiBuenos2[0].x=canvas.width / 2 - 100;
    kiBuenos2[0].y=canvas.height/ 2 - 200;
    startGame();
 

  function update(){
    frames++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    goku.draw();
    buu_V.draw();
    crearkiBueno();
    piumpium();

    if(frames% 7==0){
        kiBuenos[0].x -= 5;
        kiBuenos[0].y += 5;
        kiBuenos2[0].x -= 5;
        kiBuenos2[0].y += 5;
    }
    if(goku.isTouching(kiBuenos[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(kiBuenos2[0])) {
        clearInterval(interval)
        win.style.display="initial"
        winb.style.position="absolute";
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}










