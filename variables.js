const  canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
//clases

const edificios = new Edificios()
const spider = new Goku(edificios)
const bala = new Balas()
const vegeta_V= new Vegeta(edificios)
const explosiones= new Explosion()
const vida= new LifeBar(spider)
const cell_V = new Cell(edificios)
const buu_V = new Buu(edificios)
const spider2 = new Spiderman2(edificios)
const vida2 = new LifeBar2(spider2)


// selectores
const inicio = document.querySelector("#inicio")
const menu_villanos = document.querySelector(".villanos")
const vegeta_button = document.querySelector("#vegeta")
const cell_button = document.querySelector("#cell")
const buu_button = document.querySelector("#buu")
const canvas_C=document.querySelector(".canvas")
const you_W=document.querySelector(".next_phase")
const game_O=document.querySelector(".disp")
const keep_F=document.querySelector("#keep")
const go=document.querySelector("#go")
const go1=document.querySelector("#go1")
const go2=document.querySelector("#go2")
const vs=document.querySelector("#VS")
const player1=document.querySelector(".player1")
const player2=document.querySelector(".player2")
const win=document.querySelector(".win")
const winb=document.querySelector("#winb")


//setters for the villans
vegeta_V.width=0
vegeta_V.height=0
cell_V.width=0
cell_V.height=0
buu_V.width=0
buu_V.height=0
spider2.width=0
spider2.height=0
//variables
let balas=[]
let telarañas=[new Telaraña(spider)]
let telarañas2=[new Telaraña2(vegeta_V)];
let disparo=false
let disparo2=false
let animateHelper=0
let interval
let frames = 0
let obstacles=[]
let taki_taki=0
let poder_malo

//unlocables
let unlock_electro=false
let unlock_kraven=false
let unlock_rhino=false
let unlock_goblin=false
let unlock_venom=false