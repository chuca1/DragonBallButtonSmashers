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

class kiBueno{
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
class kiMalo{
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
 
class Villanos{
    constructor(imagen,kiBuenos){
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


// classes of villanos
class Vegeta extends Villanos{
    constructor(imagen,kiBuenos){
        super(imagen,kiBuenos)
        this.img.src="./Images/vegeta.png"
    }   
}
class Cell extends Villanos{
    constructor(imagen,kiBuenos){
        super(imagen,kiBuenos)
        this.img.src="./Images/cell.png"
    }
}
class Buu extends Villanos{
    constructor(imagen,kiBuenos){
        super(imagen,kiBuenos)
        this.img.src="./Images/buu.png"
    }
}
 