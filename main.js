objects=[]
img="";
status="";
function preload(){

}
function setup(){
canvas=createCanvas(380,380)
canvas.center()
video=createCapture(VIDEO)
video.size(380,380)
 video.hide()
objectd=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHTML="status:detecting objects";
}
function modelLoaded(){
    console.log("cocossd is loaded")
    status=true
    
}
function gotResult(error,results){
    if (error) {
     console.log(error)
    } else {
       console.log(results) 
       objects=results
    }
}
function draw(){
    image(video,0,0,380,380)
    if (status!="") {
        objectd.detect(video,gotResult)
        r=random(255)
        g=random(255)
        b=random(255)
        for (i = 0; i < objects.length; i++) {
            document.getElementById("numberofobjects").innerHTML="number of objects detected="+objects.length;
            document.getElementById("status").innerHTML="status:objects detected";
            fill(r,g,b)
            strokeWeight(1)
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
            noFill()
            stroke(r,g,b);
            strokeWeight(5)
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
            
        
        }   
        }
    
    
}