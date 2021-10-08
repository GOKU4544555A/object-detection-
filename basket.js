img1=""
status1=""
objects=[]
function setup(){
canvas=createCanvas(640,420)
canvas.center()
objectdetector=ml5.objectDetector('cocossd',modelLoaded)
document.getElementById("status").innerHTML="status:detectingObjects"
}
function preload(){
      img1=loadImage("basket.jpg")
}
function draw(){
image(img1,0,0,640,420)
if (status1!="") {
      objectdetector.detect(img1,gotResult)
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="status:objects dectected"
document.getElementById("number_of_objects").innerHTML="no of objects dectected are:"+objects.length
fill("red")
percent=floor(objects[i].confidence*100)
text(objects[i].label+""+percent+"%",objects[i].x+15,objects[i].y+15)
noFill()
stroke("black")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}
function modelLoaded(){
console.log("modelLoaded")
status1=true
}
function gotResult(error,results){
if (error) {
console.log(error)
}
else{
console.log(results)
objects=results
}
}