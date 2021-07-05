var dog,happydog
var database,foodS,foodstock,dogimg,dogimg1
var feed,lastfed
function preload(){
dogimg = loadImage("Dog.png");
dogimg1 = loadImage("happy dog.png");
}
function setup(){
//creating a variable database to store the location of the food database
database=firebase.database()
createCanvas(600,400)
dog = createSprite(200,100,15,15)
dog.addImage(dogimg);
dog.scale=0.1;
//creating a variable named as food stock that stores the number of bottles inside the databse we use the word ref
foodstock = database.ref('Food')
//.ref() is used to refer to te location of the database that we care about
//.on() is used as a listener which keeps listening to the changes in the database
/*foodstock.on("value",readStock)
addFood=createButton("Add Food");
addFood.position(800,95)
addFood.mousePressed(addFoodS)

feeddog = createButton("Feed the Dog")
feeddog/position(800,115)
feeddog.mousePressed(feedsthedog)
*/
}
function draw(){
background("green")
if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogimg1)
}

drawSprites()
fill(255,255,254)
stroke("black")
text("Food remaining : "+foodS,170,200);
textSize(13)
text("Note : Press UP_ARROW key to feed Drago milk!,130,10,300,20");
}
function readStock(data){
    foodS = data.val();
}

function feedDog(){
    dog.addImage(dogimg1)
  
}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
    x=0;
}else{
    x=x-1
}
database.ref('/').update({
    Food:x
})
}