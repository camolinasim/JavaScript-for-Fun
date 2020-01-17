var mic;

function setup() {
    createCanvas(1500, 1000);
    mic = new p5.AudioIn();
    mic.start();
}

function draw() {
    background(0);
    var vol = mic.getLevel();
    ellipse(700, 450, 250, vol * 3000);
    console.log(vol);
}