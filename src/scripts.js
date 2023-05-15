import P5 from 'p5';

class Particle {
    constructor(x, y, p5) {
        this.p5 = p5;
        this.pos = p5.createVector(x, y);
        this.dir = p5.createVector(1, 1);
    }

    draw() {
        this.p5.point(this.pos);
    }

    update() {
        if (this.pos.x <= 0 || this.pos.x >= this.p5.width) {
            this.dir.x *= -1;
        }

        if (this.pos.y <= 0 || this.pos.y >= this.p5.height) {
            this.dir.y *= -1;
        }

        this.pos.add(this.dir);
    }
}

const sketch = p5 => {
    const p = new Particle(1, 1, p5);

    p5.setup = () => {
        p5.createCanvas(200, 300);
    };

    p5.draw = () => {
        p5.background(51);
        p5.fill(0);
        p5.stroke(255);
        p5.strokeWeight(5);

        p.update();
        p.draw();
    };
};

new P5(sketch);
