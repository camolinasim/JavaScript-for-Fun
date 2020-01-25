//Audio Visualizer - Cristian Molina
var song;
var amp;
var button;
var w;
var barNum = 2048;
var volhistory = [];

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        //song.play();
    }
}

function preload() {
    //song = loadSound('Mirai.m4a');
}

function setup() {
    createCanvas(1500, 810);
    mic = new p5.AudioIn();
    mic.start();
    angleMode(DEGREES);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    //song.play();
    fft = new p5.FFT(0, barNum);
    mic.connect(fft);
    w = width / barNum;
}

function draw() {
    background(0);
    var spectrum = fft.analyze();
    //mic.connect(spectrum);
    //console.log(spectrum);
    //stroke(255);
    let c = color(0, 191, 255);

    for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        //console.log(amp);
        var y = map(amp, 0, barNum, height, 0);
        rect(i * w, y / 2, w, height - y);
    }
    //

    stroke(c);
    //noFill();

}