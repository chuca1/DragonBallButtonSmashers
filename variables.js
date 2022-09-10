const  canvas = document.querySelector("#canvas")
const context = canvas.getContext("2d")
//clases

const edificios = new Edificios()
const goku = new Goku(edificios)
const vegeta_V= new Vegeta(edificios)
const cell_V = new Cell(edificios)
const buu_V = new Buu(edificios)


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

//variables
let kiBuenos=[new kiBueno(goku)]
let kiBuenos2=[new kiMalo(vegeta_V)];
let disparo=false
let animateHelper=0
let interval
let frames = 0
let taki_taki=0

//unlocables
let unlock_cell=false
let unlock_buu=false
