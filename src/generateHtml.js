// function to choose what data to render based on the role chosen
function renderHtmlCards (...teamMembers) {
    let role = teamMembers.role;
    let htmlCards = ``

    if (role === 'Engineer') {
       engineerCard = `
       <div class="col">
           <div class="card bg-light shadow mx-auto" style="width: 18rem;">
               <div class="card-header bg-warning bg-gradient">
                 <p class="fs-3 lh-md fw-semibold text-white">${Engineer.name}</p>
                 <p class="fs-4 fw-semibold text-white"><i class="fa-solid fa-laptop-code"></i>${Engineer.role}</p>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item"><p>ID: ${Engineer.id}</p></li>
                 <li class="list-group-item"><p>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</p></a></li>
                 <li class="list-group-item"><p>GitHub: <a href='https://github.com/${Engineer.github}'>${engineer.github}</p></li>
               </ul>
            </div>
      </div>`;
      htmlCards.push(engineerCard);
    };
    if (role === 'Manager') {
        managerCard =  `
        <div class="col">
        <div class="card bg-light shadow mx-auto" style="width: 18rem;">
            <div class="card-header bg-warning bg-gradient">
              <p class="fs-3 lh-md fw-semibold text-white">${Manager.name}</p>
              <p class="fs-4 fw-semibold text-white"><i class="fa-solid fa-laptop-code"></i>${manager.role}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><p>ID: ${Manager.id}</p></li>
              <li class="list-group-item"><p>Email: <a href="mailto:${Manager.email}">${manager.email}</p></a></li>
              <li class="list-group-item"><p>Room #: ${Manager.officeNumber}</p></li>
            </ul>
         </div>
   </div>`;
   htmlCards.push(managerCard)
    };
    if (role === 'Intern') {
        internCard = `
        <div class="col">
        <div class="card bg-light shadow mx-auto" style="width: 18rem;">
            <div class="card-header bg-warning bg-gradient">
              <p class="fs-3 lh-md fw-semibold text-white">${intern.name}</p>
              <p class="fs-4 fw-semibold text-white"><i class="fa-solid fa-laptop-code"></i>${intern.role}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><p>ID: ${intern.id}</p></li>
              <li class="list-group-item"><p>Email: <a href="mailto:${intern.email}">${intern.email}</p></a></li>
              <li class="list-group-item"><p>School: ${intern.school}</p>/li>
            </ul>
         </div>
   </div>`;
   htmlCards.push(internCard)
    };  
    return htmlCards;  
}

 
function generateHtml(...htmlCards) {
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/0b4245b6ab.js" crossorigin="anonymous"></script>
    </head>
  <body>
    <div class="container-fluid py-5 bg-success bg-gradient">
        <h1 class="text-center text-white">My Team</h1>
    </div>
    <div class="container-fluid">
        <div class="row mt-5">
${renderHtmlCards(...htmlCards)}
            <li class="list-group-item"></li>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>
`;     
}



module.exports = generateHtml


// function populateCard() {
  //     return `
  //         <div class="col">
  //             <div class="card bg-light shadow mx-auto" style="width: 18rem;">
  //                 <div class="card-header bg-warning bg-gradient">
  //                   <p class="fs-3 lh-md fw-semibold text-white">${teamMembers.name}</p>
  //                   <p class="fs-4 fw-semibold text-white">${teamMembers.role}</p>
  //                 </div>
  //                 <ul class="list-group list-group-flush">
  //                   <li class="list-group-item"><p>ID: ${teamMembers.id}</p></li>
  //                   <li class="list-group-item"><p>Email: <a href="mailto:${teamMembers.email}">${teamMembers.email}</p></a></li>
  //                   ${renderExtraInfo(...teamMembers)}
  //                 </ul>
  //               </div>
  //           </div>`
  //   }
  