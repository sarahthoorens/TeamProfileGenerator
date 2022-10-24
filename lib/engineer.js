const Employee = require('./employee')

class Engineer extends Employee {
    constructor (id, email, role, github){
    super(id, email, role);
    
    this.github = github;
    
}
getGithub () {
    return this.github;
}

getRole() {
    return "Engineer";
  }
}

const engineer = new Engineer;

engineer.getName()
engineer.getEmail()
engineer.getId()
engineer.getGithub()
engineer.getRole()

module.exports = Engineer

