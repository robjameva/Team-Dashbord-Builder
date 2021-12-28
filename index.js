const inquirer = require('inquirer');
const { initQuestions, engineerQuestions, internQuestions } = require('./src/questions');
const generateHTML = require('./src/generateHTML');
const writeHTML = require('./src/writeHTML')

const init = () => {
    return inquirer.prompt(initQuestions);
};

const promptEngineer = projectData => {
    if (!projectData.engineers) {
        projectData.engineers = [];
    }
    return inquirer.prompt(engineerQuestions)
        .then(newEngineerData => {
            projectData.engineers.push(newEngineerData)
            if (newEngineerData.addEmployee === 'Engineer') {
                promptEngineer(projectData);
            } else if (newEngineerData.addEmployee === 'Intern') {
                promptIntern(projectData);
            } else {
                writeHTML(generateHTML(projectData));
            }
        })
}

const promptIntern = projectData => {
    if (!projectData.interns) {
        projectData.interns = [];
    }
    return inquirer.prompt(internQuestions)
        .then(newInternData => {
            projectData.interns.push(newInternData)
            if (newInternData.addEmployee === 'Intern') {
                promptIntern(projectData)
            } else if (newInternData.addEmployee === 'Engineer') {
                promptEngineer(projectData);
            } else {
                writeHTML(generateHTML(projectData));
            }
        })
}

init()
    .then(data => {
        if (data.addEmployee === "Engineer") {
            promptEngineer(data)
        } else if (data.addEmployee === "Intern") {
            promptIntern(data)
        } else {
            writeHTML(generateHTML(data));
        }
    })