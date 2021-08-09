const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var pBase,player1,cBase,computerPlayer;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  pBase = new PlayerBase(300,450,180,150);
  player1 = new Player(285, 300,50,180);
  cBase = new ComputerBase(width-300,450,180,150);
  computerPlayer = new Player(width-300,300,50,180);
  
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   pBase.display();
   cBase.display();
   //display Player and computerplayer
   player1.display();
   computerPlayer.display();


}
