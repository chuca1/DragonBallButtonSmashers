class Edificios{
    constructor(){
        this.x=0
        this.y=-canvas.height
        this.width=canvas.width
        this.height=canvas.height*2
        this.img= new Image()
        this.img.src= "./Images/Fondo.webp"
        this.img.onload  = () =>{
            this.draw()
        }
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)
        // context.drawImage(
        //     this.img,
        //     this.x,
        //     this.y + canvas.height,
        //     this.width,
        //     this.height
        // )
    }
}
class Goku{
    constructor(imagen,balas){
        this.x=-150
        this.y=600
        this.width=400
        this.height=400
        this.life=30
        this.goku =  new Image()
        this.img = new Image()
        this.imagen = imagen;
        this.goku.src =  "./Images/goku.png"
    }
    draw(){
        if(this.imagen.y < 1 && this.imagen.y > 0)  context.drawImage(this.img,this.x,this.y,this.width,this.height)
        else if(frames % 3 ==0){
            if (animateHelper<4){
                animateHelper++
            }
            else{
                animateHelper=0
            }
        }
        context.drawImage(this.goku,this.x,this.y,this.width,this.height)

    }
    isTouching(balas){
            return this.x + 230 < balas.x + balas.width &&
                   this.x + 230+ this.width > balas.x &&
                   this.y + 200 < balas.y + balas.height &&
                   this.y + 200 + this.height > balas.y
    }

}
class Spiderman2 extends Goku{
    constructor(imagen,balas){
        super(imagen,balas)
        this.y=50
        this.width=0
        this.height=0
        this.img.src="./Images/buu.png"
        this.img.src="./Images/buu.png"
        this.img.src="./Images/buu.png"
        
    }

}
class Telaraña{
    constructor(goku){
        this.x=canvas.width / 2 - 250;
        this.y=canvas.height/ 2 - 100;
        this.width= 300
        this.height= 300
        this.img= new Image()
        this.img.src="./Images/goodAttack.png"
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.width)
    }
}
class Telaraña2{
    constructor(vegeta_V){
        this.x=canvas.width / 2 - 100;
        this.y=canvas.height/ 2 - 200;
        this.width= 300
        this.height= 300
        this.img= new Image()
        this.img.src="./Images/badAttack.png"
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.width)
    }
}
class Balas{
    constructor(){
        this.x=Math.floor(Math.random() * (230 - +40)) + +40
        this.y=0
        this.width=20
        this.height=20
        this.img=new Image()
        this.img.src="./Images/badAttack.png"
    }
    move(){
        this.y+=5
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.width)
    }
}
 
class Villanos{
    constructor(imagen,telarañas){
        this.x=canvas.width - 200;
        this.y=-100
        this.img= new Image()
        this.img.src="./Images/vegeta.png"
        this.img.src=imagen
        this.y=0
        this.life=20
    
    }
    draw(){
        context.drawImage(this.img,this.x,this.y,this.width,this.height)    
    }

    isTouching(balas){
        return this.x + 230 < balas.x + balas.width &&
               this.x + 230+ this.width > balas.x &&
               this.y + 200 < balas.y + balas.height &&
               this.y + 200 + this.height > balas.y
    }
}

class Obstacle {
    constructor(x,w) {
      this.x = x
      this.y = 0
      this.width= w
      this.height = 40
      this.img=new Image()
      this.img.src="./Images/badAttack.png"
    }
    draw() {
      context.drawImage(this.img,this.x, this.y, this.width, 40)
      this.y++
    }
  }
  class Explosion{
      constructor(){
      this.x=canvas.width/2 - 100
      this.y=20
      this.width=200
      this.height=200
      this.img = new Image()
      this.img.src="./Images/badAttack.png"
      }
      
      draw(){
          context.drawImage(this.img,this.x,this.y,this.height,this.width)
      }
  }
  class LifeBar{
      constructor(goku){
      this.x=0
      this.y= 620
      this.width=goku.life*30
      this.height=40
      this.imga=new Image()
      this.imga.src="./Images/goodAttack.png"

      }
      draw(){
        context.fillRect(this.x,this.y,this.width,this.height)
        context.drawImage(this.imga,this.x,this.y,this.width,this.height)
    }
  }
  class LifeBar2{
    constructor(spiderman2){
    this.x=0
    this.y= 0
    this.width=spiderman2.life*30
    this.height=40
    this.imga=new Image()
    this.imga.src="./Images/goodAttack.png"

    }
    draw(){
      context.fillRect(this.x,this.y,this.width,this.height)
      context.drawImage(this.imga,this.x,this.y,this.width,this.height)
  }
}


// classes of villanos
class Vegeta extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Images/vegeta.png"
    }   
}
class Cell extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Images/cell.png"
    }
}
class Buu extends Villanos{
    constructor(imagen,telarañas){
        super(imagen,telarañas)
        this.img.src="./Images/buu.png"
    }
}

class Poder_malo{
    constructor(tipo){
        this.tipo=tipo
        if(tipo==vegeta_V){
            this.x=vegeta_V.x+ vegeta_V.width/2
            this.y=vegeta_V.y+vegeta_V.height
            this.width=10
            this.height=canvas.height
            this.img=new Image()
            this.img.src="./Images/buu.png"
        }
        else if(tipo==cell_V){
            this.x=0
            this.y=200
            this.width=canvas.width
            this.height=canvas.height/4
            this.img=new Image()
            this.img.src="./Images/buu.png"
        }
        else if(tipo==buu_V){
            this.x=0
            this.y=200
            this.y1=300
            this.width=canvas.width
            this.height=30
            this.img=new Image()
            this.img.src="./Images/buu.png"
        }
    
    }
}