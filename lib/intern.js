const Employee = require('./employee')

class Intern extends Employee {
    constructor (id, email, role, school) {
    super(id, email, role);
    
    this.school = 'Intern';
    }

getRole() {
    return 'Intern';
}

getSchool() {
    return this.school;
}
}

const intern = new Intern;

intern.getName();
intern.getId();
intern.getEmail;
intern.getSchool();
intern.getRole();

module.exports = Intern