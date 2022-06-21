



// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    // title
    {
        message: 'Title?',
        name: 'title',
        type: 'input',
    },
    // description
    {
        message: 'Description?',
        name: 'description',
        type: 'input',
    },
    // installation instructions
    {
        message: 'Installation Instructions?',
        name: 'installation',
        type: 'input',
    },
    // usage info
    {
        message: 'Usage info?',
        name: 'usage',
        type: 'input',
    },
    // contribution guidelines
    {
        message: 'Contribution guidelines?',
        name: 'contribution',
        type: 'input',
    },
    // test instructions
    {
        message: 'Test instructions?',
        name: 'test',
        type: 'input',
    },
    // liscense
    {
        message: 'Liscense?',
        name: 'liscense',
        type: 'checkbox',
        choices: ['', ''],
    },
    // contact info
    {
        message: 'Contact info/email?',
        name: 'contact',
        type: 'input',
    },
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
