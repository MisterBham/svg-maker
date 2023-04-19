// const shapes = require('./shapes');
const { Circle, Triangle, Square } = require('./shapes');

describe('Circle', () => {
    test('Test render Circle', () => {
        const shape = new Circle();
        shape.setColor('red');
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="99" fill="red" />');
    });
});

describe('Triangle', () => {
    test('Test render Triangle', () => {
        const shape = new Triangle();
        shape.setColor('red');
        expect(shape.render()).toContain('<polygon points="150 0, 300 200, 0 200" style="fill:red" />');
    });
});

describe('Square', () => {
    test('Test render Square', () => {
        const shape = new Square();
        shape.setColor('red');
        expect(shape.render()).toContain('<rect width="300" height="200" style="fill:red" />');
    });
});
