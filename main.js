function preload(){
}
function setup() {
  canvas = createCanvas(300, 300);
  var constraints = {
    audio: false,
    video: {
      facingMode: {
        exact: "environment"
      }
    }    
  };
  video = createCapture(constraints);
  video.hide();
  brain_finder = ml5.imageClassifier("MobileNet", working);
  
}
function draw(){
  image(video, 0, 0, 300, 300);
  brain_finder.classify(video, result);
}

function working(){
  console.log("Model Loaded !!!☺");
 
}
function result(error, output){
  if (error){
    console.error(error);
 }
 else{
    console.log(output);
    document.getElementById("objectN").innerHTML = output[0].label;
    document.getElementById("accuracyV").innerHTML = (output[0].confidence * 100).toFixed(2) + "%";
 }
}



