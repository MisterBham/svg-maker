// const shapes = require('./shapes');
const { Circle, Triangle, Rectangle } = require('./shapes');

describe('Circle', () => {
    describe('Test render Circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        // expect(shape.render()).toEqual('<circle cx="150" cy="100" r="99" fill="red" />');
        expect(shape.render()).toContain('<circle cx="150" cy="100" r="99" fill="red" />');
    })
});

describe('Triangle', () => {
    describe('Test render Triangle', () => {
        const shape = new Triangle();
        shape.setColor('red');
        // expect(shape.render()).toEqual('<polygon points="150 0, 300 200, 0 200" style="fill:red" />');
        expect(shape.render()).toContain('<polygon points="150 0, 300 200, 0 200" style="fill:red" />');
    })
});

describe('Rectangle', () => {
    describe('Test render Rectangle', () => {
        const shape = new Rectangle();
        shape.setColor('red');
        // expect(shape.render()).toEqual('<rect width="300" height="200" style="fill:red" />');
        expect(shape.render()).toContain('<rect width="300" height="200" style="fill:red" />');
    })
});
