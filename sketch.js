const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var box17,box18,box19,box20,box21,box22,box23,box24,box25
var stand1,stand2
var shooter
var rope

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

  
    stand1 = new Ground(380,320,275,20)
    //groundA
    box1 = new Box(290,300,30,40);
    box2 = new Box(320,300,30,40);
    box3 = new Box(350,300,30,40);
    box4 = new Box(380,300,30,40);
    box5 = new Box(410,300,30,40);
    box6 = new Box(440,300,30,40);
    box7 = new Box(470,300,30,40);
//floorA1
    box8 = new Box(320,250,30,40);
    box9 = new Box(350,250,30,40);
    box10 = new Box(380,250,30,40);
    box11 = new Box(410,250,30,40);
    box12 = new Box(440,250,30,40);
//floorA2
    box13 = new Box(350,200,30,40);
    box14 = new Box(380,200,30,40);
    box15 = new Box(410,200,30,40);
//floorA3
box16 = new Box(380,175,30,40);

//------------------------------------------

stand2 = new Ground(810,200,250,20)

//groundB
box17 = new Box(750,175,30,40);
box18 = new Box(780,175,30,40);
box19 = new Box(810,175,30,40);
box20 = new Box(840,175,30,40);
box21 = new Box(870,175,30,40);
//floorB1
box22 = new Box(780,150,30,40);
box23 = new Box(810,150,30,40);
box24 = new Box(840,150,30,40);

//floorB2
box25 = new Box(810,125,30,40);



shooter = new Polygon(50,50,50)


rope = new Slingshot( shooter.body,{x:100,y:75})
}




function draw(){
    background(0);
    Engine.update(engine);
//grounA
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
//floorA1
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
//floorA2
box13.display();
box14.display();
box15.display();
//floorA3
box16.display();

    stand1.display();
    stand2.display();

    //grounB
    box17.display();
    box18.display();
    box19.display();
    box19.display();
    box20.display();
    box21.display();
//floorB1
    box22.display();
    box23.display();
    box24.display();
    //floorB2
    box25.display();


    shooter.display();
    rope.display()
}

function mouseDragged()
{
	Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY}) 
}

function mouseReleased()
{
	rope.fly();
}

function keyPressed(){
    if (keyCode === 32){
        rope.attach(shooter.body)
    }
    }