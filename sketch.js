var backgroundImg, groundImg, stickImg;
var background, ground;
var randomarr=[] ,questionsarr=[];
var c=0,db;
var Questioncount=0;
var question,opt1,opt2,opt3,opt4;
var QuestionObject;
function preload()
{
  
  //backgroundImg=loadImage("background.JPG");
  //groundImg=loadImage("ground.jpg");
  //stickImg=loadImage("stick.PNG")
}


function setup() 
{
 // db=firebase.database();
  //var pos=db.ref("Questions/Question1/realque");
  //pos.on("value",readPos);
  createCanvas(displayWidth,displayHeight);
 // background=createSprite()
ground=createSprite(displayWidth/4,displayHeight/4,50,250);
//ground=createSprite(500,750,50,250);
//ground.addImage("ground",groundImg)
ground.scale = 4
stick=createSprite(displayWidth/2-700,displayHeight/2+435,100,100);
//stick.addImage("st",stickImg);
stick.scale=0.3
//ground.shapeColor = "blue"

while(c<2)
{
  var temp=Math.round(random(0,2))
  if(!randomarr.includes(temp))
  {
    randomarr.push(temp)
    c=c+1
  }
}
for(i=0;i<randomarr.length;i++)
{
   console.log(randomarr[i]);
}
questionsarr=[["what's your favorite colour?","blue","pink","yellow","red"],["what do you like to do in your free time?","read a book","watch a movie","go shopping","do something active"]]
while(Questioncount!=3)
{
  var temp=randomarr[0];
  /*question=questionsarr[temp][0];
  opt1=questionsarr[temp][1];
  opt2=questionsarr[temp][2];
  opt3=questionsarr[temp][3];
  opt4=questionsarr[temp][4];
  QuestionObject=new Question(question);
QuestionObject.display(question);
  Questioncount=Question+1;*/
}
}

function draw() {
  //background(backgroundImg);
  background(backgroundImg);  
  drawSprites()
}
