const fs = require("fs");

const content = "Added Text! \n";

fs.appendFile("./text.txt", content, (err) => {
  if (err) {
    console.error(err);
  }
  console.log("Text added to text.txt");
});
