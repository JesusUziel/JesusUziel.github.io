let button,a;
///sombraLight: rgba(0,0,0,.16);
function setup() {
  //frameRate(0.5)
  createCanvas(windowWidth, windowHeight)
  noLoop()
  //DarkLight()
  //a=2; //1 con el otro boton
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}
const btnSwitch = document.querySelector('#tema');
btnSwitch.addEventListener('click', () =>{
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    changeBG()
});


function draw(color) {
  if (color == null || (color == 2 )){
    background("lightgray")
    fill(0); // Da Color al texto 
    a=1
  } else {
    background(0);
    fill('#FFFFFF'); // Da Color al texto 
    a=2
  }
 
  dibujarArbol(0,width / 2, height, 0, 100,color)
}

function dibujarArbol(v,x, y, angulo, radio,color) {
  
  if (color == null || (color % 2) == 0 ) {
    if (radio < 1) {
      return
    }
    if (radio < 5) {
      stroke("purple")
    } else {
      stroke("black")
    }
  } else {
    if (radio < 1) {
      return
    }
    if (radio < 5) {
      stroke("purple")
    } else {
      stroke("white")
    }
  }

  let x2 = x + radio * cos(angulo - PI / 2)
  let y2 = y + radio * sin(angulo - PI / 2)
  strokeWeight(radio / 10)
  line(x, y, x2, y2)
  var v = v
  if(v<=60){
    for (let i = 0; i < 3; i++) {
      
      
      dibujarArbol(
        v = v+1,
        x2,
        y2,
        angulo + random(-PI / 4, PI / 4),
        radio * random(0.2, 1),
        color
      )
      
    }
  }
  
}
/*
function mousePressed() {
  a = a + 1;
}
*/
function changeBG() {
   draw(a)
}
