function Star() {
    this.x = random(-width, width);
    this.y = random(-height, height);
    this.z = random(width);

    this.update = function() {
        this.z = this.z  - 10;
        if (this.z < 1) {
            this.z = width;
            this.x = random(-width, width);
            this.y = random(-height, height);
        }
    }

    this.show = function() {
        fill(255,100,100);
        noStroke();
        
        var sx = map( this.x / this.z, 0, 1, 0 , width);
        var sy = map( this.y / this.z, 0, 1, 0 , width);
        ellipse(sx , sy, 10, 10);

    }
}