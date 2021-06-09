const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg;



function preload() {
    getBackgroundImg()
}

function setup() {
    var canvas = createCanvas(innerWidth-5,innerHeight-5);
    engine = Engine.create();
    world = engine.world;


}

function draw() {
    
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=12){ 
        textSize(50)
        fill("Darkred")
        text("Time: "+ hour%12 + " PM", 50,100); 
        }else if(hour === 0){
            text("Time: 12 AM",50,100)
        }else{
            text("Time: "+ hour%12 + " AM", 50,100); 
        }



}

async function getBackgroundImg() {

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime

    hour = dateTime.slice(11, 13)

    // add conditions to change the background images from sunrise to sunset
    if (hour >= 04 && hour <= 06) {
        bg = "images/sunrise1.png"
    } else if (hour >= 06 && hour <= 08) {
        bg = "images/sunrise2.png"
    } else if (hour >= 08 && hour <= 10) {
        bg = "images/sunrise3.png"
    } else if (hour >= 10 && hour <= 12) {
        bg = "images/sunrise4.png"
    } else if (hour >= 12 && hour <= 14) {
        bg = "images/sunrise5.png"
    } else if (hour >= 14 && hour <= 16) {
        bg = "images/sunrise6.png"
    } else if (hour >= 16 && hour <= 18) {
        bg = "images/sunset7.png"
    } else if (hour >= 18 && hour <= 20) {
        bg = "images/sunset8.png"
    } else if (hour >= 20 && hour <= 22) {
        bg = "images/sunset9.png"
    } else if (hour >= 22 && hour === 0) {
        bg = "images/sunset10.png"
    } else if (hour == 0 && hour <= 03) {
        bg = "images/sunset11.png"
    } else{
        bg = "images/sunset12.png"
    }



    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg)

}
