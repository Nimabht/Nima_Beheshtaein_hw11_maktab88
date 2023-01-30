const fs = require("fs");

const content = "File created!!!";

if (fs.existsSync("./text.txt")) {
  console.log("File exists");
} else {
  console.log("File not found!");
}
