vegeta_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    telarañas[0].x=canvas.width / 2 - 250;
    telarañas[0].y=canvas.height/ 2 - 100;
    telarañas2[0].x=canvas.width / 2 - 100;
    telarañas2[0].y=canvas.height/ 2 - 200;
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
    spider.draw();
    vegeta_V.draw();
    crearTelaraña();
    piumpium();

    if(frames% 15==0){
        telarañas[0].x -= 5;
        telarañas[0].y += 5;
        telarañas2[0].x -= 5;
        telarañas2[0].y += 5;
    }
    if(spider.isTouching(telarañas[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(telarañas2[0])) {
        clearInterval(interval)
        you_W.style.display="initial"
        you_W.style.position="absolute";
        unlock_electro=true;
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}

cell_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    unlock_kraven=malo_malo(cell_V)
    telarañas[0].x=canvas.width / 2 - 250;
    telarañas[0].y=canvas.height/ 2 - 100;
    telarañas2[0].x=canvas.width / 2 - 100;
    telarañas2[0].y=canvas.height/ 2 - 200;
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
    spider.draw();
    cell_V.draw();
    crearTelaraña();
    piumpium();

    if(frames% 10==0){
        telarañas[0].x -= 5;
        telarañas[0].y += 5;
        telarañas2[0].x -= 5;
        telarañas2[0].y += 5;
    }
    if(spider.isTouching(telarañas[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(telarañas2[0])) {
        clearInterval(interval)
        you_W.style.display="initial"
        you_W.style.position="absolute";
        unlock_kraven = true;
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}


buu_button.onclick=(e)=> {
    menu_villanos.style.display="none"
    canvas_C.style.display="flex"
    unlock_kraven=malo_malo(buu_V)
    buu_V.x -= 10;
    buu_V.width -= 60;
    buu_V.height -= 60;
    cell_V.width = 0;
    cell_V.height = 0;
    vegeta_V.width = 0;
    vegeta_V.height = 0;
    telarañas[0].x=canvas.width / 2 - 250;
    telarañas[0].y=canvas.height/ 2 - 100;
    telarañas2[0].x=canvas.width / 2 - 100;
    telarañas2[0].y=canvas.height/ 2 - 200;
    startGame();
 

  function update(){
    frames++;
    context.clearRect(0, 0, canvas.width, canvas.height);
    edificios.draw()
    spider.draw();
    buu_V.draw();
    crearTelaraña();
    piumpium();

    if(frames% 7==0){
        telarañas[0].x -= 5;
        telarañas[0].y += 5;
        telarañas2[0].x -= 5;
        telarañas2[0].y += 5;
    }
    if(spider.isTouching(telarañas[0])){
        clearInterval(interval)
        game_O.style.display="initial"
        game_O.style.position="absolute"
    }

    if(vegeta_V.isTouching(telarañas2[0])) {
        clearInterval(interval)
        win.style.display="initial"
        winb.style.position="absolute";
    }
  }
  function startGame() {
      interval = setInterval(update,1000/90)
  }

}










