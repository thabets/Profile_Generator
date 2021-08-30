class Engineer {
  constructor(usertype, name, employeeID, email, office) {
    this.usertype = usertype;
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    this.office = office;
    this.github = github;
  }
}
class Intern {
  constructor(usertype, name, employeeID, email, office) {
    this.usertype = usertype;
    this.name = name;
    this.employeeID = employeeID;
    this.email = email;
    this.office = office;
  }
}

module.exports = Engineer;
module.exports = Intern;
