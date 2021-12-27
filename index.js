const inquirer = require('inquirer');

const initQuestions = [{
    type: 'input',
    name: 'managerName',
    message: "Plase enter the Manager's Name (Required)",
    validate: managerNameInput => {
        if (managerNameInput) {
            return true;
        } else {
            console.log("Plase enter the Manager's Name!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'managerId',
    message: "Plase enter the Manager's ID (Required)",
    validate: managerIdInput => {
        if (managerIdInput) {
            return true;
        } else {
            console.log("Plase enter the Manager's ID!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'managerEmail',
    message: "Plase enter the Manager's email address (Required)",
    validate: managerEmailInput => {
        if (managerEmailInput) {
            return true;
        } else {
            console.log("Plase enter the Manager's email address!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'managerOffice',
    message: "Plase enter the Manager's office number (Required)",
    validate: managerOfficeInput => {
        if (managerOfficeInput) {
            return true;
        } else {
            console.log("Plase enter the Manager's office number!");
            return false;
        }
    }
},
{
    type: 'rawlist',
    name: 'addEmployee',
    message: "Choose another team member to add or select I'm Done",
    choices: [
        'Engineer',
        'Intern',
        "I'm Done!"
    ],
    default: 0
}];

const engineerQuestions = [{
    type: 'input',
    name: 'engineerName',
    message: "Plase enter the Engineer's Name (Required)",
    validate: engineerNameInput => {
        if (engineerNameInput) {
            return true;
        } else {
            console.log("Plase enter the Engineer's Name!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'engineerId',
    message: "Plase enter the Engineer's ID (Required)",
    validate: engineerIdInput => {
        if (engineerIdInput) {
            return true;
        } else {
            console.log("Plase enter the Engineer's ID!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'engineerEmail',
    message: "Plase enter the Engineer's email address (Required)",
    validate: engineerEmailInput => {
        if (engineerEmailInput) {
            return true;
        } else {
            console.log("Plase enter the Engineer's email address!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'engineerGithub',
    message: "Plase enter the Engineer's github username (Required)",
    validate: engineerGihubInput => {
        if (engineerGihubInput) {
            return true;
        } else {
            console.log("Plase enter the Engineer's github username!");
            return false;
        }
    }
},
{
    type: 'rawlist',
    name: 'addEmployee',
    message: "Choose another team member to add or select I'm Done",
    choices: [
        'Engineer',
        'Intern',
        "I'm Done!"
    ],
    default: 0
}
];

const internQuestions = [{
    type: 'input',
    name: 'internName',
    message: "Plase enter the Intern's Name (Required)",
    validate: internNameInput => {
        if (internNameInput) {
            return true;
        } else {
            console.log("Plase enter the Intern's Name!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'internId',
    message: "Plase enter the Intern's ID (Required)",
    validate: internIdInput => {
        if (internIdInput) {
            return true;
        } else {
            console.log("Plase enter the Intern's ID!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'internEmail',
    message: "Plase enter the Intern's email address (Required)",
    validate: internEmailInput => {
        if (internEmailInput) {
            return true;
        } else {
            console.log("Plase enter the Intern's email address!");
            return false;
        }
    }
},
{
    type: 'input',
    name: 'internSchool',
    message: "Plase enter the Intern's school (Required)",
    validate: internSchoolInput => {
        if (internSchoolInput) {
            return true;
        } else {
            console.log("Plase enter the Intern's school!");
            return false;
        }
    }
},
{
    type: 'rawlist',
    name: 'addEmployee',
    message: "Choose another team member to add or select I'm Done",
    choices: [
        'Engineer',
        'Intern',
        "I'm Done!"
    ],
    default: 0
}
];


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
                console.log(projectData);
                return projectData;
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
                console.log(projectData);
                return projectData;
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
            console.log(data)
            return data
        }
    })