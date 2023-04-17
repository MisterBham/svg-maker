const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Rectangle } = require('./lib/shapes');

// Line of questioning
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 text characters. \n NOTE: text will be capatilized automatically.",
    validate: (input) => {
      if (input == "" || input > 3) {
        return console.log(
          "Cannot proceed without at least 1-3 text characters!"
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "textcolor",
    message:
      "What text color would you like? Enter a color keyword or a hexadecimal number.",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "This is required! Please provide a color keyword or a hexadecimal number for your text color."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "shape",
    message: "What shape would like behind/around your shape.",
    choices: ['Circle', 'Triangle', 'Square'],
    validate: (list) => {
      if (list == "") {
        return console.log(
          "Cannot proceed without choosing a shape! Please select from list."
        );
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "shapecolor",
    message:
      "What color would you like your shape to be? Enter a color keyword or a hexadecimal number.",
    validate: (input) => {
      if (input == "") {
        return console.log(
          "This is required! Please provide a color keyword or a hexadecimal number for your shape."
        );
      } else {
        return true;
      }
    },
  }
]

// let shapecolor;

function writeToFile(answers) {
  let finalProduct;
  let text = `${answers.text}`;
  
  text = text.toUpperCase();

  if (answers.shape === 'Circle') {
    const newShape = new Circle(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    finalProduct = newShape.render();
  } else if (answers.shape === "Triangle") {
    const newShape = new Triangle(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    finalProduct = newShape.render();
  } else {
    const newShape = new Rectangle(`${answers.shapecolor}`, text, `${answers.textcolor}`);
    finalProduct = newShape.render();
  }

  fs.writeFile('./examples/logo.svg', finalProduct, (err) =>
      err ? console.log(err) : console.log('Generated logo.svg!')
  );
}

function init() {
  inquirer.prompt(questions)
  .then (answers => writeToFile(answers))
}

// Start on load
init();
