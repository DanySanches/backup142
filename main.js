musica ="";

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;

function preload(){
     musica = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    // canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("PoseNet iniciado com sucesso");
    window.alert("PoseNet iniciado com sucesso");
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

    rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);

    }
}

function draw(){
    image(video, 0,0, 600,500)
}

function play(){
    musica.play();
    musica.setVolume(1);
    //  rate() função utilizada para controlar a  velocidade da  música
    musica.rate(1);
}