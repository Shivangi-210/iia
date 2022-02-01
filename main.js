function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(580,300);
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("MobileNet",ModelLoaded);
}

function ModelLoaded(){
  console.log("Model is Loaded!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! :D");
}
 
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult); 
}

function gotResult(error,result){
  if(error){
    console.error(error);
  }
  else{
    console.log(result);
    document.getElementById("O").innerHTML = result[0].label;
    document.getElementById("A").innerHTML = result[0].confidence.toFixed(3);
  }
}