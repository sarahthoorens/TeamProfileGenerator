const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const html = require('./src/generateHtml');
let teamMembers = [];

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
        message: `Enter the team member's employee ID.`
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
        message: `What is the engineer's GitHub user name?`,
        when: (answers) => answers.role === 'Engineer' 
    },

    {
        type: 'input',
        name: 'school',
        message: `In what school is the intern enrolled?`,
        when: (answers) => answers.role === 'Intern' 
  }, 
    {
        type: "confirm",
        name: "addMore",
        message: "Would you like to add another team member?",
        validate: (confirm) => {
            if (confirm === 'Yes') {
                 (answers) => {
                        if (answers.role === "Manager") {
                          const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
                          teamMembers.push(manager);
                        }
                        else if (answers.role === "Engineer") {
                          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
                          teamMembers.push(engineer);
                        }
                        else if (answers.role === "Intern") {
                          const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                          teamMembers.push(intern);
                        }
                }
                initTeam();
              } 
            else {
            fs.writeFile('index.html', html(teamMembers), 'utf-8', (err) =>
            err ? console.error(err) : console.log('Populating your webpage.'), console.log(response))
            console.log(teamMembers);
            console.log("Populating your team webpage...");
             }
            }
    }
])
    // .then((answers) => {
    //     if (answers.role === "Manager") {
    //       const manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNumber);
    //       teamMembers.push(manager);
    //     }
    //     else if (answers.role === "Engineer") {
    //       const engineer = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.github);
    //       teamMembers.push(engineer);
    //     }
    //     else if (answers.role === "Intern") {
    //       const intern = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
    //       teamMembers.push(intern);
    //     }
}
initTeam();

//     .then((response) =>
//    fs.writeFile('index.html', generateHtml(response), 'utf-8', (err) =>
//     err ? console.error(err) : console.log('Populating your webpage.'), console.log(response)))
//     }   
//   })}



// function to choose what data to render based on the role chosen


// function renderExtraInfo(data) {
//     let role = data.role[0];
//     let extraInfo = ``;
  
//     if (role === 'Engineer') {
//        extraInfo = `<p>GitHub: <a href='https://github.com/${github}'>${github}</p>`;
       
//     };
//     if (role === 'Manager') {
//         extraInfo = `<p>Room #: ${officeNumber}</p>`;
//     };
//     if (role === 'Intern') {
//         extraInfo = `<p>School: ${school}</p>`;
//     };
//     console.log(extraInfo);    
//     return extraInfo;
     
//   }

// teamMembers.forEach(populateCard(data));
    
// function populateCard(data) {
//     return `
//         <div class="col">
//             <div class="card bg-light shadow mx-auto" style="width: 18rem;">
//                 <div class="card-header bg-warning bg-gradient">
//                   <p class="fs-3 lh-md fw-semibold text-white">${data.name}</p>
//                   <p class="fs-4 fw-semibold text-white">${data.role}</p>
//                 </div>
//                 <ul class="list-group list-group-flush">
//                   <li class="list-group-item"><p>ID: ${data.id}</p></li>
//                   <li class="list-group-item"><p>Email: <a href="mailto:${data.email}">${data.email}</p></a></li>
                  
//                 </ul>
//               </div>
//           </div>`
//   }

// function generateHtml(data) {
//     return `
// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <title>My Team</title>
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
//   </head>
//   <body>
//     <div class="container-fluid py-5 bg-success bg-gradient">
//         <h1 class="text-center text-white">My Team</h1>
//     </div>
//     <div class="container-fluid">
//         <div class="row mt-5">
// ${(populateCard(data))}
//             <li class="list-group-item">${renderExtraInfo(data)}</li>
//             </div>
//         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
//     </body>
// </html>
// `;      }




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
