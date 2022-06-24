// packages --------------------------------------------------------------------------
const inquirer = require('inquirer');
const fs = require('fs');

// Array of Questions ----------------------------------------------------------------
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
        message: 'License?',
        name: 'license',
        type: 'checkbox',
        choices: ['MIT', 'GNU GPLv3', 'No License'],
    },
    // contact info
      // github profile
    {
      message: 'Github profile for contact?',
      name: 'github',
      type: 'input',
    },
      // email
    {
        message: 'eMail Adress for contact?',
        name: 'email',
        type: 'input',
    },
];

// run app ---------------------------------------------------------------------------
inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        
        // variables from user input
        const {
            title,
            description, 
            installation, 
            usage, 
            contribution,
            test,
            liscense,
            github,
            email,
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
        // Appends installation section
        fs.appendFile(`${title}.md`, `##Installation\n ${installation}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends usage section
        fs.appendFile(`${title}.md`, `##Usage\n ${usage}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends contribution guidelines section
        fs.appendFile(`${title}.md`, `##Contribution Guidelines\n ${contribution}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends test instructions section
        fs.appendFile(`${title}.md`, `##Test Instructions\n ${test}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends License section
        switch(liscense){
          // MIT
          case 'MIT':
            fs.appendFile(`${title}.md`, `##License\n MIT - Limited restriction on reuse, distribution of closed source versions is allowed.\n`, err => {
              if (err) {
                console.log(err);
                return;
              }
              console.log('success');
            })
            break;
          // GNU GPLv3
          case 'GNU GPLv3':
            fs.appendFile(`${title}.md`, `##License\n GNU GPLv3 - Limited restriction on reuse, distribution of closed source versions is allowed.\n`, err => {
              if (err) {
                console.log(err);
                return;
              }
              console.log('success');
            })
            break;
          // no license
          default:
            fs.appendFile(`${title}.md`, `##License\n GNU GPLv3 - Limited restriction on reuse, distribution of closed source versions is allowed.\n`, err => {
              if (err) {
                console.log(err);
                return;
              }
              console.log('success');
            })
            break;
        }
        
        // Appends contact section
          // github profile
          // email
    })
