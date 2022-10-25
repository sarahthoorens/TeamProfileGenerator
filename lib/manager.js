const Employee = require('./employee')

class Manager extends Employee {
    constructor (id, email, role, officeNumber) {
    super(id, email, role);
    
    this.officeNumber = officeNumber

    }
   
    getRole() {
      return "Manager";
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    }
    const manager = new Manager();

    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();

    module.exports = Manager


