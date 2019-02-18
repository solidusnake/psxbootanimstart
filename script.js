var sony = new Image();
var computer = new Image();
var sound = new Audio();
function init(){
  sony.src = 'Sony_logo.png';
  computer.src = 'Computer_Entertainment_logo.png';
  window.requestAnimationFrame(dessiner);
  //sound.src = "boot-up.mp3"
  
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
                        //triangle transform
                        ctx.beginPath();
        
                        ctx.moveTo(75, 50);
                        ctx.lineTo(100, 75);
                        ctx.lineTo(100, 25);
                        
                        ctx.fill();
                        ctx.translate(canevas.width / 2, canevas.height / 2);
                        ctx.translate(-(squareLength / 2), -(squareLength / 2));
  
                        ctx.closePath();
      ctx.restore();
      
      ctx.globalAlpha = opacity[1];
      // (opacity[0] > 1) && (opacity[1] += 0.001);
      console.log(opacity[0])
      if (opacity[0] > 1) {
        opacity[1] += 0.005;
        ctx.drawImage(sony,130, 30, 250, 60);
        ctx.drawImage(computer,140, 400, 250, 60);
      }
      

      //ctx.drawImage(sony,130, 30, 250, 60);
      //ctx.drawImage(computer,140, 400, 250, 60);


      ctx.restore();



      requestAnimationFrame(function() {
        dessiner();
        
        console.log("setinterval");

      });

    }
  }


