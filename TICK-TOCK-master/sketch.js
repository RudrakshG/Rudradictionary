var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var hour1, min, sec;
var box;

function setup(){
    createCanvas(170,30); 
    angleMode(DEGREES);   
}

function draw(){
    background(21,314,117);
    /*fill("black");
    ellipse(200,200,310,310);
    strokeWeight(20);*/
    fill("blue");
    textSize(50);
    textStyle(BOLD);
    textSize(20);
    text("TIME : "+hour1+":"+min+":"+sec,20,20);
    /*fill("white");
    text("WALL CLOCK",130,150);
    translate(200,200)
    rotate(-90)

   
    hr = hour();
    mn = minute();
    sc = second();

    
    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn,0,60,0,360)
    hrAngle = map(hr % 12,0,12,0,360);
    
    push();
    rotate(scAngle);
    stroke(255,0,0);
    strokeWeight(7);
    line(0,0,100,0);
    pop()

   
    push();
    rotate(mnAngle);
    stroke(0,255,0);
    strokeWeight(7);
    line(0,0,75,0);
    pop()

    
    push();
    rotate(hrAngle);
    stroke(0,0,255);
    strokeWeight(7);
    line(0,0,50,0);
    pop()

    stroke(255,0,255);
    point(0,0)

    strokeWeight(10);
    noFill();
    
    stroke(255,0,0);
    arc(0,0,300,300,0,scAngle);
    
    stroke(0,255,0);
    arc(0,0,280,280,0,mnAngle);
    
    stroke(0,0,255);
    arc(0,0,260,260,0,hrAngle);*/
    getTime();
   
}
async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
     hour1 = datetime.slice(11,13);
     min = datetime.slice(14,16);
     sec = datetime.slice(17,19);
    //console.log(datetime);
    //console.log(hour);
    //console.log(min);
    //console.log(sec);
}