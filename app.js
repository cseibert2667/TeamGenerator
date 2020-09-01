// Node modules
const path = require("path");
const fs = require("fs");
// NPM modules
const inquirer = require("inquirer");
// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { listenerCount } = require("process");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// Classes first (pass tests) -> Inquirer prompts -> create html (write file)
// render([
//     new Manager
//     new Intern
//     new Engineer
// ]){}

inquirer.prompt([
    {
        message: "What is your manager's name?",
        name: "name"
    },
    {
        message: "What is your manager's id?",
        name: "id"
    },
    {
        message: "What is your manager's email?",
        name: "email"
    },
    {
        message: "What is your manager's office number?",
        name: "officeNumber"
    }
    
]).then(function(manager){
    // Build manager object, push into employees array
    console.log(manager);
    inquirer.prompt([
        {
            type: "list",
            message: "Who would you like to add to the team?",
            name: "engineerOrIntern",
            choices: ["Engineer", "Intern", "Quit"]
        }
    ]).then(function ({engineerOrIntern}){
        if(engineerOrIntern === "Engineer"){
            //engineer details prompts
            inquirer.prompt([
                {
                    message: "What is your engineer's name?",
                    name: "name"
                },
                {
                    message: "What is your engineer's id?",
                    name: "id"
                },
                {
                    message: "What is your engineer's email?",
                    name: "email"
                },
                {
                    message: "What is your engineer's github?",
                    name: "github"
                },
            ]).then(function(engineer){
                
            })
        } else if (engineerOrIntern === "Intern") {
            //intern details prompt
            inquirer.prompt([
                {
                    message: "What is your interns's name?",
                    name: "name"
                },
                {
                    message: "What is your interns's id?",
                    name: "id"
                },
                {
                    message: "What is your interns's email?",
                    name: "email"
                },
                {
                    message: "What is your interns's github?",
                    name: "github"
                },
            ]).then(function(intern){
                // build intern object, add to employees array
            })
        } else {
            // write file
        }
    })
})

// move prompt functions to separate file, .thens on this page