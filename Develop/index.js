// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = {
    title: 'What is the project\'s title',
    description: 'Please enter the project\'s description',
    installationIstructions: 'What are the installation instructions',
    usageInformation: 'What is the usage information',
    contributionGuidelines: 'What are the contribution guidelines',
    testInstructions: 'What are the test instructions',
    license: 'Which licence is your code using?',
    licenseChoices: ['MIT','Apache 2.0', 'GPLv3', 'GPLv3', 'BSD 3', 'LGPLv2.1', 'Microsoft Public', 'Unlicense'],
    githubUserName: 'What is your github profile',
    userEmail: 'What is your email address',
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter the following information.\n' + questions.title,
                name: 'title',
            },
            {
                type: 'input',
                message: questions.description,
                name: 'description',
            },
            {
                type: 'input',
                message: questions.installationIstructions,
                name: 'installationInstructions',
            },
            {
                type: 'input',
                message: questions.usageInformation,
                name: 'usageInformation',
            },
            {
                type: 'input',
                message: questions.contributionGuidelines,
                name: 'contributionGuidelines',
            },
            {
                type: 'input',
                message: questions.testInstructions,
                name: 'testInstructions',
            },
            {
                type: 'choices',
                message: questions.license,
                choices: questions.licenseChoices,
                name: 'license',
            },
            {
                type: 'input',
                message: questions.githubUserName,
                name: 'userGithub',
            },
            {
                type: 'input',
                message: questions.userEmail,
                name: 'userEmail',
            },
        ])
        .then((response) =>
            console.log('Success!' + '\n' + response)
      );
}

// Function call to initialize app
init();
