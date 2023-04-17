const index = require('../index');

class Shape {
    constructor(shapecolor, text, textcolor) {
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }

    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<svg height="200" width="300">
        <text x="150" y="100" fill="${this.textcolor}">${this.text}</text>
        <circle cx="150" cy="100" r="99" fill="${this.shapecolor}" />
        </svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapecolor, text, textcolor) {
    // super(shapecolor, text, textcolor);
    }
    render() {
        return `<svg height="200" width="300">
        <text x="150" y="100" fill="${this.textcolor}">${this.text}</text>
        <polygon points="150 0, 300 200, 0 200" style="fill:${this.shapecolor}" />
        </svg>`;
    }
}

class Rectangle extends Shape {
    constructor(shapecolor, text, textcolor) {
    // super(shapecolor, text, textcolor);
    }
    render() {
        return `<svg width="300" height="200">
        <text x="150" y="100" fill="${this.textcolor}">${this.text}</text>
        <rect width="300" height="200" style="fill:${this.shapecolor}" />
        </svg>`;
    }
}

module.exports = { Shape, Circle, Triangle, Rectangle };
