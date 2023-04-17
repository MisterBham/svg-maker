const index = require('../index');

class Shape {
    constructor(shapecolor, text, textcolor) {
        this.shapecolor = shapecolor;
        this.text = text;
        this.textcolor = textcolor;
    }

    setColor(color) {
        this.shapecolor = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="99" fill="${this.shapecolor}" />`

        // return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"> 
        // <style> 
        //     .svg {
        //     font: 50px sans-serif;
        //     } 
        // </style>
        // <circle cx="150" cy="100" r="99" fill="${this.shapecolor}" />
        // <text x="105" y="115" class="svg" fill="${this.textcolor}">${this.text}</text>
        // </svg>`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150 0, 300 200, 0 200" style="fill:${this.shapecolor}" />`;

        // return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg" >
        // <style> 
        // .svg {
        // font: 50px sans-serif;
        // } 
        // </style>
        // <polygon points="150 0, 300 200, 0 200" style="fill:${this.shapecolor}" />
        // <text x="105" y="140" class="svg" fill="${this.textcolor}">${this.text}</text>
        // </svg>`;
    }
}

class Rectangle extends Shape {
    render() {
        return `<rect width="300" height="200" style="fill:${this.shapecolor}" />`;
        
        // return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        // <style> 
        // .svg {
        // font: 50px sans-serif;
        // } 
        // </style>
        // <rect width="300" height="200" style="fill:${this.shapecolor}" />
        // <text x="100" y="115" class="svg" fill="${this.textcolor}">${this.text}</text>
        // </svg>`;
    }
}

module.exports = { Shape, Circle, Triangle, Rectangle };
