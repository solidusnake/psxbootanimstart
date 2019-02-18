var sony = new Image();
var computer = new Image();
var count = 0;

var sound = new Audio();
function init(){
  console.log('init', onLoad);
  sony.onload = onLoad;
  computer.onload = onLoad;
  sony.src = 'Sony_logo.png';
  computer.src = 'Computer_Entertainment_logo.png';
  //sound.src = "boot-up.mp3"


}

function onLoad() {
  
  count++;
  console.log(count)
  if (count === 2) {
    window.requestAnimationFrame(dessiner);
  } 
}


var opacity = [0, 0];

function dessiner() {
  //sound.play(); 
  var canevas = document.getElementById('canevas');
    var squareLength = 200;
    if (canevas.getContext) {
      var ctx = canevas.getContext('2d');

      //ctx.fillStyle = '#f5450b';
      var lineaire = ctx.createLinearGradient(150,0,30,118);
            
      /*Notre dégradé va du vert vers le violet en passant par le
       *bleu de façon uniforme (couleurs stop à 0, 0.5 et 1)*/
      lineaire.addColorStop(0,'#f5450b');
      lineaire.addColorStop(0.625, '#f8dd0f');
      lineaire.addColorStop(1, '#f5450b');
      ctx.save();

      ctx.globalAlpha = opacity[0];
      opacity[0] += 0.01
      /*On crée un rectangle dont l'emplacement ne correspond pas
       *exactement à notre dégradé (décalé en bas à droite, vers le
       *violet)*/
      ctx.fillStyle = lineaire;


      ctx.save();

      //Translate to the center of the canvas
      ctx.translate(canevas.width / 2, canevas.height / 2);
      ctx.rotate(Math.PI / 4);
      ctx.translate(-(squareLength / 2), -(squareLength / 2));
      ctx.fillRect(0,0, squareLength, squareLength);

      ctx.restore();
      
      ctx.globalAlpha = opacity[1];
      // (opacity[0] > 1) && (opacity[1] += 0.001);
      console.log(opacity[0])
      if (opacity[0] > 1) {
        opacity[1] += 0.005;

      }

      ctx.drawImage(sony,130, 30, 250, 60);
      ctx.drawImage(computer,140, 400, 250, 60); 
      //ctx.drawImage(sony,130, 30, 250, 60);
      //ctx.drawImage(computer,140, 400, 250, 60);
      ctx.fillStyle = '#4D4E53';
      

      ctx.translate(35, 200); // déplace au centre du rectangle 
      // x = x + 0.5 * width
      // y = y + 0.5 * height
      //ctx.fillRect(150, 30, 100, 100);
                              //triangle transform
                              ctx.beginPath();
        
                              ctx.moveTo(80, 50);
                              ctx.lineTo(200, 80);
                              ctx.lineTo(200, 25);
                              
                              ctx.fill();
                              //ctx.translate(canevas.width / 2, canevas.height / 2);
                              //ctx.translate(-(squareLength / 2), -(squareLength / 2));
        
                              ctx.closePath();

      ctx.restore();



        requestAnimationFrame(function() {
        dessiner();
        
        console.log("setinterval");

      });

    }
  }


document.addEventListener("DOMContentLoaded", init);