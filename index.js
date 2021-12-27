const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const robEmployee = new Employee('rob', 10, 'rob@gmail')
const robManager = new Manager('rob', 10, 'rob@gmail', 100)
const robEnginner = new Engineer('rob', 10, 'rob@gmail', 'robjameva')
const robIntern = new Intern('rob', 10, 'rob@gmail', 'Rowan')

console.log(robEmployee)
console.log(robManager)
console.log(robEnginner)
console.log(robIntern)