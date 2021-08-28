const inquirer = require("inquirer");
const fs = require("fs");
//const generateHTML = require("./utils/generateHTML");
//const bootstrap = require("bootstrap");
const TeamMembers = require("./TeamMembers");

//Questions for the user to add information
const teamInfo = []; //Array to add information to
function team() {
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
    ])
    //adding team members to the array
    .then((dateam) => {
      console.log(dateam);
      const teamMember = new TeamMembers(
        dateam.usertype,
        dateam.username,
        dateam.employeeID,
        dateam.email,
        dateam.office
      );
      teamInfo.push(teamMember);

      another();
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
        writeToFile(data);
      }
    });
}

//Generating the HTML File and putting it in the output folder for the user
// function writeToFile(data){
//   fs.writeFileSync("./output/index.html",generateHTML(data),"utf8");
//   console.log('done');
// }

// function init() {
//   inquirer
//     .prompt(questions) // Produces question for user
//     .then(function(data){ //function to save the responses of the user
//       writeToFile(data); //Location to push the information to
//     });
//     }

// //Function call to initialize app
// init();
team();
