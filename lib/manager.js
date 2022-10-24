const Employee = require('./employee')

class Manager extends Employee {
    constructor (id, email, role, officeNumber) {
    super(id, email, role);
    
    this.officeNumber = officeNumber

    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    getRole() {
        return "Manager";
      }
    }
    const manager = new Manager();

    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();

    module.exports = Manager


