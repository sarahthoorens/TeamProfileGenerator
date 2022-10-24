const inquirer = require('inquirer');
const fs = require('fs');
const html = require('./src/generateHtml');
let teamMembers = []

function initTeam () {
inquirer
 .prompt ([
    {
      type: 'input',
      name: 'name',
      message: `Enter the team member's name.`
    },

    {
        type: 'input',
        name: 'id',
        message: `Enter the team member's badge ID.`
    },
    {
        type: 'input',
        name: 'email',
        message: `Enter the team member's email address.`
    },
    {
        type: 'list',
        name: 'role',
        message: `What is the team member's role?`,
        choices: ['Engineer', 'Intern', 'Manager']
        
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `What is the manager's office number?`,
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        name: 'github',
        message: `What is the engineer's user name?`,
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: `In what school is the intern enrolled?`,
        when: (answers) => answers.role === 'Intern'
    }
])
.then((answers) => {
    if (answers.role === "Manager") {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
      teamMembers.push(manager);
    }
    if (answers.role === "Engineer") {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
      teamMembers.push(engineer);
    }
    if (answers.role === "Intern") {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
      teamMembers.push(intern);
    }
});
addMore();
}

function addMore () {
    inquirer
    .prompt ([
        {
        type: "confirm",
        name: "addMore",
        message: "Would you like to add another team member?",
        validate: (confirm) => {
            if (confirm) {
                return initTeam();
              } else {
                teamMembers.forEach((teamMembers) => {
                  console.log(teamMembers);
                  return teamMembers;
                });
            fs.writeFile('index.html', html(response), 'utf-8', (err) =>
            err ? console.error(err) : console.log('Populating your webpage.'), console.log(response))
            }
             console.log("Populating your team webpage...");
         
               }
            }])
              }


// .then((response) =>
//    fs.writeFile('index.html', html(response), 'utf-8', (err) =>
//     err ? console.error(err) : console.log('Populating your webpage.'), console.log(response))
//     )
   
// }
// return inquirer.prompt(questions).then((answers) => {
//  if (answers.is_finished) {
//    return answers;
//  } else {
//    return getAnswers();
//  }
// });

// function to start questions, write html file when complete


// Function call to initialize app
initTeam();