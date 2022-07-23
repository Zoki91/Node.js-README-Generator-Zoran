// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const mYmarkDown = require('./Develop/utils/generateMarkdown');
const generateMarkdown = require('./Develop/utils/generateMarkdown');


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
      type: 'list',
      message: 'Table of Conetents?',
      name: 'Table of Contents',
      choices: ['Y', 'N'],
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
    },
    {
      type: 'input',
      message: 'Who is contributing?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'Github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'Questions',
    },
  ])


  .then((answers) => {
    const mark = generateMarkdown(answers)
    fs.writeFile('README1.md', mark, function(err) {
      if(err){
        console.log("Could not generate README file")
  }
}
  )});
  








//   function generateMarkdown(data){}
// // TODO: Create a function to write README file
// // function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
