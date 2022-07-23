// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
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
      message: 'Provide instructions and examples for use?',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'License',
      name: 'license',
      choices: ['ISC', 'MIT', 'AGPL', 'GPL v3'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'questions',
    },
  ])

  .then((answers) => {
    const mark = generateMarkdown(answers)
    fs.writeFile('README.md', mark, function(err) {
      if(err){
        console.log("Could not generate README file")
  }
}
  )});
  