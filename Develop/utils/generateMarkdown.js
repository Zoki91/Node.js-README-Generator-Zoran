// // TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  return `

# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
    
## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.contributing}

## Licenses
${answers.license} 

![badmath](https://img.shields.io/apm/l/vim-mode)
    
## GitHub Profile
${answers.Githhub}

## Questions
${answers.questions}`;
}


module.exports = generateMarkdown;