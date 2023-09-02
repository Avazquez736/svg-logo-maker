const inquirer = require("inquirer");
const fs = require("fs");
const {Circle, Sqare, Triangle} = require("./lib/shapes");


// 
const userPrompt = [
     {
         type: "input",
         name: "text",
         message: "Enter up to 3 Characters:",
     },
     {
         type: "input",
         name: "text-color",
         message: "Enter a color keyword:",
     },
     {
         type: "input",
         name: "shape",
         message: "Enter a color keyword:",
     },
     {
         type: "list",
         name: "pixel-image",
         message: "Which Image would you like?",
         choices: ["Circle", "Square", "Triangle"],
     },
 ];

 // Function to write data to file
 function writeToFile(fileName, data) {
	console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

