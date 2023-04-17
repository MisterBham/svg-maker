const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Rectangle } = require('./lib/shapes');

// Line of questioning
const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to 3 text characters.",
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

  if (answers.shape === 'Circle') {
    const newShape = new Circle(`${answers.shapecolor}`, `${answers.text}`, `${answers.textcolor}`);
    console.log(newShape.render());
    finalProduct = newShape.render();
    console.log(finalProduct);
  } else if (answers.shape === "Triangle") {
    new Triangle(`${answers.shapecolor}, ${answers.text}, ${answers.textcolor}`);
  } else {
    new Rectangle(`${answers.shapecolor}, ${answers.text}, ${answers.textcolor}`);
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
