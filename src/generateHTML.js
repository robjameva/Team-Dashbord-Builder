

const renderManager = pageData => {
    return `
        <div class="card shadow">
            <div class="card-header text-light" style="background-color: #7f4db9;">
              <h3>${pageData.managerName}</h3>
              <span>
                  <i class="fas fa-mug-hot"></i> Manager
              </span>
            </div>
            <div class="card-body">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${pageData.managerId}</li>
                    <li class="list-group-item">Email: <a href="mailto:${pageData.managerEmail}">${pageData.managerEmail}</a></li>
                    <li class="list-group-item">Office Number: ${pageData.managerOffice}</li>
                  </ul>
            </div>
        </div>
    `
}

const renderEngineers = engineerArr => {
    if (engineerArr) {
        return engineerArr.map(engineer => {
            return `
            <div class="card shadow">
                <div class="card-header text-light" style="background-color: #7f4db9;">
                  <h3>${engineer.engineerName}</h3>
                  <span>
                  <i class="fas fa-cogs"></i> Engineer
                  </span>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.engineerId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.engineerEmail}">${engineer.engineerEmail}</a></li>
                        <li class="list-group-item">Github: <a href="https://github.com/${engineer.engineerGithub}" target="_blank">${engineer.engineerGithub}</a></li>
                      </ul>
                </div>
            </div>`
        }).join('')
    } else {
        return '';
    }
}

const renderInterns = internArr => {
    if (internArr) {
        return internArr.map(intern => {
            return `
            <div class="card shadow">
                <div class="card-header text-light" style="background-color: #7f4db9;">
                  <h3>${intern.internName}</h3>
                  <span>
                  <i class="fas fa-graduation-cap"></i> Intern
                  </span>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.internId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.internEmail}">${intern.internEmail}</a></li>
                        <li class="list-group-item">School: ${intern.internSchool}</li>
                      </ul>
                </div>
            </div>`
        }).join('')
    } else {
        return '';
    }
}



const generateHTML = pageData => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/cb341cc7fd.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>
<body>
    <nav class="navbar navbar-light" style="background-color: #562a88;">
        <div class="container-fluid d-flex justify-content-center">
          <a class="navbar-brand text-light fs-1" href="#">
            <i class="fas fa-users"></i>
            My Team
          </a>
        </div>
      </nav>
      <section id="cards">

      ${renderManager(pageData)}
      ${renderEngineers(pageData.engineers)}
      ${renderInterns(pageData.interns)}
        
          
      </section>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
`
}

module.exports = generateHTML;