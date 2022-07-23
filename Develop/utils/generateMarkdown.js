// // TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  return `
![badmath](https://img.shields.io/apm/l/vim-mode)
# ${answers.title}


## Description
${answers.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Questions](#questions)
- [GitHub](#github)


## Installation
${answers.installation}


## Usage
${answers.usage}


## Credits
${answers.contributing}


## License
${answers.license} 

Find out more about the license at by clicking the link [MIT](license.txt) 

![badmath](https://img.shields.io/apm/l/vim-mode)
  

## GitHub
My Github user profile can be found by clicking the link ${answers.github}


## Questions
If you have any question relating to the README generator or any Node.js enquiries please feel free to email me ${answers.questions}`;
}


module.exports = generateMarkdown;