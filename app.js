// Node modules
const path = require("path");
const fs = require("fs");
// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");

// inquire prompts
const {
  managerPrompt,
  addEmployee,
  internPrompt,
  engineerPrompt,
} = require("./lib/prompts");
// array where created employees will be stored
const employees = [];

managerPrompt().then(function (manager) {
  // builds manager, pushes to array
  employees.push(
    new Manager(manager.name, manager.id, manager.email, manager.officeNumber)
  );
  main();
});

function main() {
  addEmployee().then(function ({ engineerOrIntern }) {
    if (engineerOrIntern === "Engineer") {
      engineerPrompt().then(function (engineer) {
        // builds engineer, pushes to array
        employees.push(
          new Engineer(
            engineer.name,
            engineer.id,
            engineer.email,
            engineer.github
          )
        );
        // prompt for another employee
        main();
      });
    } else if (engineerOrIntern === "Intern") {
      internPrompt().then(function (intern) {
        // builds intern, pushes to array
        employees.push(
          new Intern(intern.name, intern.id, intern.email, intern.school)
        );
        // prompt for another employee
        main();
      });
    } else {
      fs.writeFile(outputPath, render(employees), (err) => {
        if (err) throw err;
        console.log("File has been written!");
      });
    }
  });
}
