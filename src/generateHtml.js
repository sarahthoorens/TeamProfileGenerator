// function to choose what data to render based on the role chosen
function renderExtraInfo(data) {
    let role = data.role[0];
    let extraInfo = ``;
  
    if (role === 'Engineer') {
       extraInfo = `<p>GitHub: <a href='https://github.com/${github}'>${github}</p>`;
       
    };
    if (role === 'Manager') {
        extraInfo = `<p>Room #: ${officeNumber}</p>`;
    };
    if (role === 'Intern') {
        extraInfo = `<p>School: ${school}</p>`;
    };
    console.log(extraInfo);    
    return extraInfo;
     
  }

  function populateCard(data) {
    return `
        <div class="col">
            <div class="card bg-light shadow mx-auto" style="width: 18rem;">
                <div class="card-header bg-warning bg-gradient">
                  <p class="fs-3 lh-md fw-semibold text-white">${data.name}</p>
                  <p class="fs-4 fw-semibold text-white">${data.role}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item"><p>ID: ${data.id}</p></li>
                  <li class="list-group-item"><p>Email: <a href="mailto:${data.email}">${data.email}</p></a></li>
                  
                </ul>
              </div>
          </div>`
  }
  
function generateHtml(data) {
    return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
  </head>
  <body>
    <div class="container-fluid py-5 bg-success bg-gradient">
        <h1 class="text-center text-white">My Team</h1>
    </div>
    <div class="container-fluid">
        <div class="row mt-5">
${(populateCard(data))}
            <li class="list-group-item">${renderExtraInfo(data)}</li>
            </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </body>
</html>
`;      }



module.exports = generateHtml