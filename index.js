// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'Title?',
        name: 'title',
        type: 'input',
    }
];

inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        fs.writeFile(`${answers.title}.md`, JSON.stringify(answers, null , 2), err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        })







// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
