img = "";
objects = [];
status = "";


function preload(){
    img=loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "Status ; Detecting Objects";
}

function modelloaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResul(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
function draw() {
    image(img, 0, 0, 640, 420);

    if(status != "")
    {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : object Detected";

            fill("red");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x +15, objects[i].y + 15);
            nofill();
            stroke("red");
           rect(object[i].x, object[i].y, object[i].width, object[i].height);
        }
    }
}

