function preload() {}

function setup() {
  canvas = createCanvas(600, 500);
  canvas.position(20, 140);
  video = createCapture(VIDEO);
  video.size(550, 550);
  video.position(140, 140);
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}
function draw() {}
function modelLoaded() {
  console.log("Model is Loaded");
}
function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}
