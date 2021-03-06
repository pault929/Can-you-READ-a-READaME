const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter Title of your READ ME:"
    },
    {
      type: "input",
      name: "about",
      message: "Please give us a brief description of your project."
    },
    {
      type: "input",
      name: "installation",
      message: "What type of installation did you use?",
      default: "npm i",
    },
    {
      type: "input",
      name: "contributing",
      message: "Who helped in your project?"
    },
    {
      type: "input",
      name: "test",
      message: "What type of test did you run?"
    },
    {
      type: "input",
      name: "usage",
      message: "What is the purpose / usage of this app?"
    },
    {
      type: "list",
      name: "license",
      message: "What type of License?  https://shields.io/category/license",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username:"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your Linkedin URL."
    },
  
  
  
  
  ]);
}

function generateHTML(answers) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>

<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1>Read me: <class="display-5">${answers.title}</class></h1>
  <p id="License" class="lead"><h3>License</h3>${answers.license}</p>
    <br>
  <p>Repo URL: <a href="https://github.com/pault929/Can-you-READ-a-READaME">ReadMe URL</a><p> 
    <h3><span class="badge badge-secondary">Table of Content</span></h3>
      <a href=#About>About</a><br>
      <a href=#Installation>Installation</a><br>
      <a href=#Usage>Usage</a><br>
      <a href=#License>License</a><br>
      <a href=#Contributing>Contributors</a><br> 
      <a href=#Test>Test</a><br>
      <a href=#Images>Images</a><br>
    <br>
    <h3>Questions : Please follow the email and links below to contact me.</></h3>
    <p>Please clink on the following links to get in contact with me.<br>
    or email me at : paultoro@gmail.com</p> 
    <ul>
      <li>GitHub: <a href="https://github.com/${answers.github}">${answers.github}</a></li>
      <li>LinkedIn: <a href="https://${answers.linkedin}">${answers.linkedin}</a></li>
    </ul>
      <p id="About" class="lead"><h3>About</h3>${answers.about}.</p>
      <p id="Installation" class="lead"><h3>Installation</h3>${answers.installation}.</p>
      <p id="Usage" class="lead"><h3>Usage</h3>${answers.usage}.</p>
      <p id="Contributing" class="lead"><h3>Contributors</h3>${answers.contributing}.</p>
      <p id="Test" class="lead"><h3>Test</h3>${answers.test}.</p>
    </ul>
    </div>

  <div class="examples">
    <h3 id="Images"><h3>Images Example</h3>
    <img src="images/indexcode.JPG">
    <img src="images/indextop.JPG">
    <img src="images/promptuser.JPG">
    <img src="images/tophtml.JPG">
    <img src="images/bottomhtml.JPG">
  </div>
 </body>
</html>`;
}

promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);

    return writeFileAsync("read.md", html);
  })
  .then(function() {
    console.log("Great Job, Please visit Git hub link to check out new READ ME file!");
  })
  .catch(function(err) {
    console.log(err);
  });
