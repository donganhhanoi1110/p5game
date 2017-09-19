var stars = [];
function setup() {
    createCanvas(400,400);
    
    for (var i = 0; i < 500; i++) {
        stars[i] = new Star();
    }
}

function draw() {
    background(100,250,100);
    translate(width / 2, height /2);
    for (var index = 0; index < stars.length; index++) {
        stars[index].update();
        stars[index].show();    
        
    }
}