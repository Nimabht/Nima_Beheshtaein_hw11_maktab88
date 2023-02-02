const fs = require("fs");

if (fs.existsSync("./text.txt")) {
  console.log("File exists");
} else {
  console.log("File not found!");
}
