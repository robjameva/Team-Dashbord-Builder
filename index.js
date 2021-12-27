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


// {
//     type: 'input',
//     name: 'github',
//     message: 'Enter your GitHub Username (Required)',
//     validate: githubInput => {
//         if (githubInput) {
//             return true;
//         } else {
//             console.log('Please enter your GitHub username!');
//             return false;
//         }
//     }
// },
// {
//     type: 'input',
//     name: 'email',
//     message: 'Enter your email address (Required)',
//     validate: emailInput => {
//         if (emailInput) {
//             return true;
//         } else {
//             console.log('Please enter your email address!');
//             return false;
//         }
//     }
// },
// {
//     type: 'confirm',
//     name: 'isOpenSource',
//     message: 'Is this intended to be an open source project?',
//     default: false
// },
// {
//     type: 'input',
//     name: 'contribution',
//     message: 'Provide some guidelines for contribution to your project',
//     when: ({ isOpenSource }) => isOpenSource
// }

const EngineerQuestions = [{
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


const init = () => {
    return inquirer.prompt(initQuestions);
};

const promptEngineer = projectData => {
    if (!projectData.engineers) {
        projectData.engineers = [];
    }
    return inquirer.prompt(EngineerQuestions)
        .then(newEngineerData => {
            projectData.engineers.push(newEngineerData)
            if (newEngineerData.addEmployee === 'Engineer') {
                promptEngineer
            } else {
                console.log(projectData)
                return projectData;
            }
        })
}

init()
    .then(data => {
        console.log(data)
        if (data.addEmployee === "Engineer") {
            promptEngineer(data)
        }
    })