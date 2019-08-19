/**
 * Created by nhatnk on 4/26/17.
 */
const SPEED = 40;
const SIZE = 50;
const FPS = 500;
const TOP = 40;
const LEFT = 40;
const IMAGE = 'pikachu.png';
const vX = 0;
const vY = 0;


let Hero = function () {
  this.fps = FPS;
  this.top = TOP;
  this.left = LEFT;
  this.size = SIZE;
  this.speed = SPEED;


}
Hero.prototype.draw = function(){
  this.canvas = document.createElement('canvas');
  this.canvas.setAttribute("id","myImage");
  this.context = this.canvas.getContext('2d');
  document.body.appendChild(this.canvas);
  this.image = new Image();
  this.image.src = IMAGE;
  this.canvas.width = 500;
  this.canvas.height = 500;
  this.context.drawImage(this.image,vX,vY);


}

Hero.prototype.loop = function (){

}
Hero.prototype.moveRight = function(){

}
Hero.prototype.moveLeft = function (){

}
Hero.prototype.moveUp = function (){

}
Hero.prototype.moveDown = function(){

}

Hero.prototype.init = function(){
  console.log('loop')
    this.draw();

}



/*function Hero(image){
  this.image = image;
  this.top = TOP;
  this.left = LEFT;
  this.size = SIZE;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function(){
    this.left += SPEED;
    //console.log('ok: ' + this.left, 'top'+ this.top);
  }
  this.moveDown = function () {
    this.top += SPEED;
    //console.log('ok:' + this.top,'down');
  }
  this.moveLeft = function () {
    this.left -= SPEED;
    //console.log('ok:' + this.left,'left');
  }
  this.moveUp = function () {
    this.top -=SPEED;
  }
}

var hero = new Hero('ifrit.png');

function start(){

  // Move right
  if (hero.left < window.innerWidth - hero.size && hero.top == TOP ){
    hero.moveRight();
    //console.log(hero.top)

  }else if (hero.top < window.innerHeight - TOP && hero.left > window.innerWidth - hero.size){
    hero.moveDown();

  }else if (hero.top > window.innerHeight - hero.size && hero.left > LEFT){
    hero.moveLeft();
    console.log(hero.left,hero.top)
  }else{
    hero.moveUp();
  }


  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, FPS)
}*/

//start();


let character = new Hero();
setTimeout(character.init(),200)