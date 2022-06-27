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
            license,
            github,
            email,
        } = answers;

        // license logic
        let licenseInfo = '';
        let licenseImg = '';
        switch(license[0]){
          // MIT
          case 'MIT':
            licenseImg = '![mit license img](/images/mitlicense.png)"';
            licenseInfo = 'Limited restriction on reuse, distribution of closed source versions is allowed.';
            break;
          // GNU GPLv3
          case 'GNU GPLv3':
            licenseImg = '![gplv3 license img](/images/GPLv3license.png)';
            licenseInfo = 'Limited restriction on reuse, distribution of closed source versions is restricted.';
            break;
          // no license
          default:
            licenseInfo = 'Code is entirely open-source, protected by no licenses';
            break;
        }


        // initiliazes readme
        fs.writeFile(`${title}.md`, `#${title}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        
        // adds license image towards the top
        fs.appendFileSync(`${title}.md`, `   ${licenseImg}\n`, err => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('success');
        })

        // Appends description section
        fs.appendFileSync(`${title}.md`, `###Description\n ${description}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends installation section
        fs.appendFileSync(`${title}.md`, `###Installation\n ${installation}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends usage section
        fs.appendFileSync(`${title}.md`, `###Usage\n ${usage}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends contribution guidelines section
        fs.appendFileSync(`${title}.md`, `###Contribution Guidelines\n ${contribution}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends test instructions section
        fs.appendFileSync(`${title}.md`, `###Test Instructions\n ${test}\n`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
        // Appends License section
        fs.appendFileSync(`${title}.md`, `###License\n This code is protected by ${license}. This implies: ${licenseInfo}\n`, err => {
          if (err) {
            console.log(err);
            return;
          }
          console.log('success');
        })
        
        // Appends contact section
          // github profile
          // email
          fs.appendFileSync(`${title}.md`, `###Contact Info\n Github: ${github} & Email: ${email}`, err => {
            if (err) {
              console.log(err);
              return;
            }
            console.log('success');
          })
    })
