let a;
var light,dark;

function setup() {
  cambio();
}

var btnTema = document.getElementById('tema');
var contador = 0;

function cambio(){
  
  if(contador == 0){
    var t = 'Light';
    setInterval(changeF(t),4000);
    contador= 1;
  }else{
    var t = 'Dark';
    dark = setInterval(changeF(t),4000);
    contador= 0;
  }

}

btnTema.addEventListener('click',cambio,true)

const btnSwitch = document.querySelector('#tema');
btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    //clearTimeout(light);
    changeBG();
    
});

function draw(color) {
  if (color == null || (color == 2 )){
    fill(0); // Da Color al texto 
    a=1;
  } else {
    fill('#FFFFFF'); // Da Color al texto 
    a=2;
  }
}

function changeBG() {
  draw(a);
  //changeFL(a);
}

function changeF(color){
  t = color;
  //contador= 0;
  const imagesL = [ 
    'url("css/img/Tree/'+t+'/1.png")',
    'url("css/img/Tree/'+t+'/2.png")',
    'url("css/img/Tree/'+t+'/3.png")',
    'url("css/img/Tree/'+t+'/4.png")',
    'url("css/img/Tree/'+t+'/5.png")',
    'url("css/img/Tree/'+t+'/6.png")',
    'url("css/img/Tree/'+t+'/7.png")',
    'url("css/img/Tree/'+t+'/8.png")',
    'url("css/img/Tree/'+t+'/9.png")',
    'url("css/img/Tree/'+t+'/10.png")',
  ]
  
  const section = document.querySelector('section')
  const bg = imagesL[Math.floor(Math.random()* imagesL.length)];
  section.style.backgroundImage = bg;
}