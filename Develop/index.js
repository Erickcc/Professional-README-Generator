// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = {
  title: "What is the project's title",
  description: "Please enter the project's description",
  installationInstructions: "What are the installation instructions",
  usageInformation: "What is the usage information",
  contributionGuidelines: "What are the contribution guidelines",
  testInstructions: "What are the test instructions",
  license: "Which licence is your code using?",
  licenseChoices: [
    "AGPLv3",
    "GPLv3",
    "LGPLv3",
    "Mozilla Public License 2.0",
    "Apache License 2.0",
    "MIT",
  ],
  githubUserName: "What is your github profile",
  userEmail: "What is your email address",
};

const licenseDescription = [
  `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.\n <br> * [View full GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)`,
  `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.\n <br> * [View full GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`,
  `Permissions of this copyleft license are conditioned on making available complete source code of licensed works and modifications under the same license or the GNU GPLv3. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work through interfaces provided by the licensed work may be distributed under different terms and without source code for the larger work.\n <br> * [View full GNU Lesser General Public License v3.0](https://choosealicense.com/licenses/lgpl-3.0/)`,
  `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.\n <br> * [View full Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/) `,
  `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n <br> * [View full Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`,
  `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.\n <br> * [View full MIT License](https://choosealicense.com/licenses/mit/)`,
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=>{
      if (err) throw err;
      console.log(fileName + " File created succesfully");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the following information.\n" + questions.title,
        name: "title",
      },
      {
        type: "input",
        message: questions.description,
        name: "description",
      },
      {
        type: "input",
        message: questions.installationInstructions,
        name: "installationInstructions",
      },
      {
        type: "input",
        message: questions.usageInformation,
        name: "usageInformation",
      },
      {
        type: "input",
        message: questions.contributionGuidelines,
        name: "contributionGuidelines",
      },
      {
        type: "input",
        message: questions.testInstructions,
        name: "testInstructions",
      },
      {
        type: "list",
        message: questions.license,
        choices: questions.licenseChoices,
        name: "license",
      },
      {
        type: "input",
        message: questions.githubUserName,
        name: "userGithub",
      },
      {
        type: "input",
        message: questions.userEmail,
        name: "userEmail",
      },
    ])
    .then((response) => {
      const fileTitle = response.title.replace(/\s/g, "_") + '.md';
      const badgeLink = 'https://img.shields.io/badge/license-' + response.license.replace(/\s/g, "_") + '-green';
      let licenseIndex;
        switch (response.license){
            case "AGPLv3":
                licenseIndex = 0;
                break;
            case "GPLv3":
                licenseIndex = 1;
                break;
            case "LGPLv3":
                licenseIndex = 2;
                break;
            case "Mozilla Public License 2.0":
                licenseIndex = 3;
                break;
            case "Apache License 2.0":
                licenseIndex = 4;
                break;
            case "MIT":
                licenseIndex = 5;
                break;
        }

      const data = `
# ${response.title}
[![License](${badgeLink}) ](${badgeLink})

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.installationInstructions}

## Usage
${response.usageInformation}

## License
${licenseDescription[licenseIndex]}

## How to Contribute
${response.contributionGuidelines}

## Tests
${response.testInstructions}

## Questions
For further inquires, please contact me through Github or E-mail
* [Github profile](https://github.com/${response.userGithub})
<br>
* <a href="mailto:${response.userEmail}">E-mail</a>
`;

      writeToFile(fileTitle, data);
    });
}

// Function call to initialize app
init();
