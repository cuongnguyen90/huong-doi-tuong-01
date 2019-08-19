/**
 * Created by nhatnk on 4/26/17.
 */
let SPEED = 80;
let SIZE = 50;
let FPS = 500;
let TOP = 40;
let LEFT = 40;
function Hero(image){
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
}

start();


