const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const html = require('./src/generateHtml');

let teamMembers = [];
function createTeam () {
  inquirer 
    .prompt ([
    {
        type: 'input',
        name: 'name',
        message: `Enter the team member's name.`,
         validate: function(input) {
          if (input) {
              return true;
          }
          else {
              console.log('Please enter a valid name.')
          }
        }
      },
  
      {
          type: 'input',
          name: 'id',
          message: `Enter the team member's employee ID.`,
          validate: function(input) {
              if (input) {
                  return true;
              }
              else {
                  console.log('Please enter a valid employee ID.')
              }
            }
      },
      {
          type: 'input',
          name: 'email',
          message: `Enter the team member's email address.`,
          validate: function(input) {
              if (input) {
                  return true;
              }
              else {
                  console.log('Please enter a valid email address')
              }
            }
      },
      {
        type: 'list',
        name: 'role',
        message: `What is the team member's role?`,
        choices: ['Engineer', 'Intern', 'Manager'], 
        }

]) .then ((answers) => {
    if (answers.role === "Manager") {
        inquirer
            .prompt ([
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the manager's office number?`,   
            when: (answer) => {
                answer = answer.officeNumber;
                return 
            }
        }])
    const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
    teamMembers.push(manager);
    console.log('Manager added!');
    addMore();
    } 
    else if (answers.role === "Engineer") {
    inquirer
        .prompt (
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's GitHub user name?`,
            when: (answer) => {
                answer = answer.github;
                return } 
            })
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
    teamMembers.push(engineer);
    console.log(engineer);
    console.log('Engineer added!');
    addMore();
    }
    else if (answers.role === "Intern") {
        inquirer
        .prompt ([
        {
            type: 'input',
            name: 'school',
            message: `In what school is the intern enrolled?`,
            when: (answer) => {
                answer = answer.school;
                return 
            }
        }])
    const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
    teamMembers.push(intern);
    console.log('Intern added!');
    addMore();
    }
})
}

function addMore() {
    inquirer
        .prompt ([
    {
    type: "confirm",
    name: "addMore",
    message: "Would you like to add another team member?",  
    }
]) .then ((response) => {
    if (response.addMore) {
        createTeam()
    }
    else {
        fs.writeFile('index.html', html(teamMembers), 'utf-8', (err) =>
            err ? console.error(err) : console.log('Populating your webpage.'),
            console.log(teamMembers));
            console.log('Generating employee cards.')
    }})
} 
createTeam ();