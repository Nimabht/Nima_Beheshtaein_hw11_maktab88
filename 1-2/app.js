const fs = require("fs");

const content = "File created!!!";

fs.writeFile("./second-text.txt", content, function (err) {
  if (err) console.log(err);
  console.log("File is created successfully.");
});
