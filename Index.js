const inquirer = require("inquirer");
const fs = require("fs");
//const generateHTML = require("./utils/generateHTML");
//const bootstrap = require("bootstrap");
const Engineer = require("./Classes/Engineer");
const Managers = require("./Classes/Manager");
const Intern = require("./Classes/Intern");

//Array for information to be stored
const engineer = [];
const managerInfo = [];
const intern = [];
//Questions for the user to add information
function Manager() {
  inquirer
    .prompt([
      {
        type: "list",
        Message: "Please pick the type of user",
        name: "usertype",
        choices: ["Manager", "Employee", "Intern"],
      },
      {
        type: "input",
        message: "What is your name?",
        name: "username",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },

      {
        type: "input",
        message: "What is your office number?",
        name: "office",
      },
    ])
    //adding team members to the array
    .then((damanager) => {
      const teamMember = new Managers(
        damanager.usertype,
        damanager.username,
        damanager.employeeID,
        damanager.email,
        damanager.office
      );
      managerInfo.push(teamMember);
      another();
    });
}
function team() {
  inquirer
    .prompt([
      {
        type: "list",
        Message: "Please pick the type of user",
        name: "usertype",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is the name of the team member?",
        name: "username",
      },
      {
        type: "input",
        message: "What is the employee Id of the team member?",
        name: "employeeID",
      },
      {
        type: "input",
        message: "What is the email of the team member?",
        name: "email",
      },

      {
        type: "input",
        message: "What is the associated office number?",
        name: "office",
      },
      {
        type: "input",
        message: "What is their github?",
        name: "github",
      },
      {
        type: "input",
        message:
          "What school are they enrolled in? (Please leave empty if N/A)",
        name: "school",
      },
    ])
    .then((dateam) => {
      if (dateam.usertype === "Engineer") {
        const teamMember = new Engineer(
          dateam.usertype,
          dateam.username,
          dateam.employeeID,
          dateam.email,
          dateam.office,
          dateam.github
        );
        engineer.push(teamMember);
        another();
      } else {
        const teamMember = new Intern(
          dateam.usertype,
          dateam.username,
          dateam.employeeID,
          dateam.email,
          dateam.office,
          dateam.school
        );
        intern.push(teamMember);
        another();
      }
    });
}

//ask user if they would like to add another team member
function another() {
  inquirer
    .prompt({
      type: "confirm",
      name: "another",
      message: "Would you like to add another team member?",
    })
    .then((answer) => {
      if (answer.another) {
        team();
      } else {
        info();
      }
    });
}
//display the team members info
function info() {
  console.log(managerInfo);
  console.log(engineer);
  console.log(intern);
}
//Generating the HTML File and putting it in the output folder for the user
// function writeToFile(data){
//   fs.writeFileSync("./output/index.html",generateHTML(data),"utf8");
//   console.log('done');
// };

// function init() {
//   inquirer
//     .prompt(questions) // Produces question for user
//     .then(function(data){ //function to save the responses of the user
//       writeToFile(data); //Location to push the information to
//     });
//     }

//Function call to Start app
Manager();
