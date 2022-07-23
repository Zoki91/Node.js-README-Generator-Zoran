// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// README APP Questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your Project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What description can you give about your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Table of Conetents?',
      name: 'Table of Contents',
    },
    {
      type: 'input',
      message: 'What will you need to install to run this?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How will you use this application?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'License',
      name: 'license',
      choices: ['MIT', 'ISC',],
      filter(val) {
        return val.toLowerCase()
      }
    },
    {
      type: 'input',
      message: 'Who is contributing?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'If you have any questions, please email me?',
      name: 'Questions (email)',
    },
  ])


  .then((answers) => fs.appendFile('log.txt', JSON.stringify(answers), (err) =>
    err ? console.log(err) : console.log('Thanks for you responses')));










//   function generateMarkdown(data){}
// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
