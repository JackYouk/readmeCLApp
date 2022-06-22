



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
        choices: ['Yes', 'No'],
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
        
        const {
            title,
            description, 
            installation, 
            usage, 
            contribution,
            test,
            liscense,
            contact,
        } = answers;


        // initiliazes readme
        fs.writeFile(`${title}.md`, `#${title}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })

        // Appends description section
        fs.appendFile(`${title}.md`, `##Description\n ${description}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends description section
        fs.appendFile(`${title}.md`, `##Installation\n ${installation}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends description section
        fs.appendFile(`${title}.md`, `##Usage\n ${usage}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends description section
        fs.appendFile(`${title}.md`, `##Contribution Guidelines\n ${contribution}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends description section
        fs.appendFile(`${title}.md`, `##Test Instructions\n ${test}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends Liscense section
        // Appends contact section
    })







// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
