//Audio Visualizer - Cristian Molina

//for me in the future:
// that -1000 in the map function controls how big the rectangles are. Don't ask me why idk
//The more negative, the bigger the rectangles
//and that weird 1.5 in the rect function is so that
//the blue line appears in the middle of the screen
var song;
var amp;
var button;
var w;
var barNum = 4096;
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
    createCanvas(1500, 840);
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
        var y = map(amp, 0, barNum, height, -10000);
        rect(i * w, y / 1.5, w, height - y);
    }
    //

    stroke(c);
    //noFill();

}

